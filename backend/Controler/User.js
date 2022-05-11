import { User } from "../Model/User.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../middleware/SendMail.js";
import cloudinary from "cloudinary";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const token = jwt.sign({ _id: user_id }, process.env.JWT_SECRET);
    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 600000),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged In Successfuly",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged Out Successfuly",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne().select("-password -email");
    res.status(300).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.status(300).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const userMessage = `Hey, Iam  ${name}. My email is ${email}. My message is ${message}.`;
    await sendMail(userMessage);
    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { name, email, password, skills, about } = req.body;
    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }
    if (skills) {
      if (skills.image1) {
        await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
          folder: "portfolio",
        });
        user.skills.image1 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image2) {
        await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
          folder: "portfolio",
        });
        user.skills.image2 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image3) {
        await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
          folder: "portfolio",
        });
        user.skills.image3 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image4) {
        await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
          folder: "portfolio",
        });
        user.skills.image4 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image5) {
        await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
          folder: "portfolio",
        });
        user.skills.image5 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      if (skills.image6) {
        await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
          folder: "portfolio",
        });
        user.skills.image6 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    }

    if (about) {
      user.about.name = about.name;
      user.about.title = about.title;
      user.about.subtitle = about.subtitle;
      user.about.description = about.description;
      user.about.quote = about.quote;
      if (about.avatar) {
        await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
          folder: "portfolio",
        });
        user.about.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    }


    await user.save();


    res.status(300).json({
      success: true,
      message:"User updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
