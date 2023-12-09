import './header.css';
import { useStep } from '../../context/stepContext';

const Header = () => {
    const {step, nextStep} = useStep();
    return(
        <div className='header-container'>
            <h3>Choose Service</h3>
            <p>{step}/2</p>
        </div>
    )
}

export default Header;