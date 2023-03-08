import * as React from 'react';

const Currencies = () => {
 const [value, setValue] = React.useState('');
 const handleChange = (event) => {
   setValue(event.target.value);
 };

 return (
   <div>
       <select  
                className='alert alert-secondary'
                value={value} 
                onChange={handleChange}
                style={{width: '10vw', backgroundColor: 'hsl(125,60%,74%)', border: 'none'}}>
         <option value="$">$ Dollar</option>
         <option value="£">£ Pound</option>
         <option value="€">€ Euro</option>
         <option value="₹">₹ Rupee</option>
       </select>
   </div>
 );
};

export default Currencies;
