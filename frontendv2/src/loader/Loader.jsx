import loader from '../images/loader.gif'
import './loader.css'
const Loader = () => {

 
  return (
    <>
        <div className="loaderWrapper">
            <img src={loader} alt="loader"/>
        </div>
    </>
  );
};

export default Loader;
