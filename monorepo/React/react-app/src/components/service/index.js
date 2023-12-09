import './service.css';
import { FaArrowRight } from "react-icons/fa6";

const Service = (props) => {

    return( 
        <div className='service-wrapper'>
             <div className='service'>
                <img src={props.img} />
                <p>{props.title}</p>
             </div>
             <FaArrowRight />
             
        </div>
    )
}

export default Service