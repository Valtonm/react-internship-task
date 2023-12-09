import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../service';
import './menu.css'
import { useStep } from '../../context/stepContext';

const Menu = () => {

const [services, setServices] = useState();
const {step, nextStep} = useStep();
const navigate = useNavigate();

  const fetchItems = async () => {
    try {
      const data = await fetch(`./data/data.json`);
      const service = await data.json()
      setServices(service.services);
      console.log(service);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchItems();  
  }, []);
  
    return(
        <div className='menu-container'>
            <div className='services-container'>
                {services?.map((item, index) => (
                    <div onClick={() => {    
                        nextStep();
                        navigate(`/${item.id}`);
                    }}
                     >
                        <Service
                            key={index}
                            img={item.img}
                            title={item.title}
                        />
                    </div>
                ))}
            </div>
            <div className='text-container'>
                <p>Not sure about consulation type? Pleas call <span>0202 7599053</span></p>
            </div>
        </div>
    )
}
export default Menu;