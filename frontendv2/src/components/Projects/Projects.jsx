import "./Project.css"
import { AiOutlineProject } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteProject, getUser } from '../../Action/Action';
import { DeleteFilled } from "@ant-design/icons";






export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {

  const dispatch = useDispatch();

  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };

  return (
    <>
      <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <h4>{projectTitle}</h4>
        </div>
        <div>
          <h4> About Project</h4>
          <h5>{description}</h5>
          <h6 >Tech Stack: {technologies}</h6>
        </div>
      </a>

      {isAdmin && (
        <Button
          type="primary"
          style={{ color: "rgba(40,40,40,0.7)" }}
          onClick={() => deleteHandler(id)}
        >
          <DeleteFilled />
        </Button>
      )}
    </>
  );
};

const Projects = ({ project }) => {
  return (
    <>
      <div className="projects">
        <h3>
          Projects <AiOutlineProject />
        </h3>

        <div className="projectsWrapper">
          {project && project.map((item) => (
            <ProjectCard
              id={item._id}
              key={item._id}
              url={item.url}
              projectImage={item.image.url}
              projectTitle={item.title}
              description={item.description}
              technologies={item.techStack}
            />
          ))}
        </div>

        <h3 style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
          All The Projects Shown Above Are Made By Me <FaRegSmileWink />
        </h3>
      </div>

    </>
  )
}

export default Projects