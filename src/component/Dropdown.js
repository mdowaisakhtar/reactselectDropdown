import React from 'react'
import Select from "react-select";
import  { useState } from 'react';
import './drop.css';
import download from '../Asset/download.webp';



function Dropdown() {
    const [selectedOptions, setSelectedOptions] = useState([]);


    const options = [
        { value: "1", label: "Soham",email:'owais@gmail.com',image: download,  },
        { value: "2", label: "Newman",email:'owais@gmail.com',image: download },
        { value: "3", label: "Ken",email:'owais@gmail.com',image: download },
        { value: "4", label: "Tracy",email:'owais@gmail.com',image:download},
        { value: "5", label: "Denise",email:'owais@gmail.com',image: download},
    ];

    const CustomOption = ({ innerProps, label, data,value,email }) => (
        <div {...innerProps}>
          <img
            src={data.image}
            alt={value}
            style={{ width: '30px',  borderRadius:'50px',alignItems:'start' }} 
          />
          {label}
          {email}
        </div>
      );
    

    const handleChange = (selectedValues) => {
        setSelectedOptions(selectedValues);
      };
    
  return (
<>
    <div className='MainDiv'>
        <p className='Heading'> Pick Users</p>
        <div  className='selectdiv'>
            <Select isMulti
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            placeholder="Add new user" 
            components={{ Option: CustomOption }}
            className='selectdown'
            
            />
        </div>
    </div>
</>
  )
}

export default Dropdown
