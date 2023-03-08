import React, {useState} from "react";
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const max = 20000
    const [budget, setBudget] = useState(AppContext);
    const handleChange = (event) => {
        setBudget(event.target.value);
      };
    let totalExpenses = 960

    if(budget > max) {
        alert("The budget cannot exceed 20000");
        setBudget("");
        return;
    }
    else if (budget < totalExpenses){
        alert("The budget cannot be less than spenditure");
        setBudget(totalExpenses);
        return;
    } 

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                        required='required'
                        type='number'
                        step='10'
                        id='budgetSelector'
                        value={budget}
                        style={{ marginLeft: '0.5rem' , size: 10}}
                        onChange={handleChange}>
                        </input>
        </div>
    );
};
export default Budget;

