import './titlePage.css'
import { useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react';
import { useStep } from '../../context/stepContext';

const TitlePage = () => {

    const navigate = useNavigate();
    const [services, setServices] = useState();

    const param = useParams();
    const id = param.id;
    const {step, nextStep} = useStep();

    const fetchItems = async () => {
        try {
          const data = await fetch(`./data/data.json`);
          const service = await data.json();
          const findService = service?.services?.find(item => item.id == id);
          setServices(findService);
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        fetchItems();  
      }, [param]);

    return(
        <div className='title-container'>
            <div className='title-menu'>
                <button type='submit' onClick={() => {
                        nextStep();
                        navigate(-1)
                    }}
                >    
                    Back
                </button>
                <div className='title'>
                        {services?.title}
                </div>
            </div>
        </div>
    )
}

export default TitlePage;