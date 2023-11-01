
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';



function FoodMenu() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Food', value: '1', link: '/' },
      { name: 'Beverage', value: '2', link: 'beverage' },
      { name: 'Dessert', value: '3', link: 'dessert' },
    ];
  
    return (

      <>

        <ButtonGroup>
          {radios.map((radio, idx) => (
            <Link to={radio.link} ><ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton></Link>
          ))}
        </ButtonGroup>
      </>
      
        
        
    );
  }
  
  export default FoodMenu;