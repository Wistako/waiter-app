
import { useState } from "react";

const TableForm = ({table}) => {
  
  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);
  const [billVisible, setBillVisible] = useState(false);
  
  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    if(e.target.value === 'busy') {
      setBillVisible(true);
    } else {
      setBillVisible(false);
    }
  }

  const handlePeopleAmountChange = (e) => {
    const value = parseInt(e.target.value)
    const maxValue = parseInt(maxPeopleAmount)

    if((value <= maxValue && value >= 0 && !isNaN(value)) || e.target.value === '') {
      setPeopleAmount(e.target.value);
    }
  }

  const handleBillChange = (e) => {
    const value = parseInt(e.target.value)
    if((value >= 0 && !isNaN(value)) || e.target.value === '') {
      setBill(e.target.value);
    }
  }

  const handleMaxPeopleAmountChange = (e) => {
    const value = parseInt(e.target.value)
    if((value >= peopleAmount && value >=0  && !isNaN(value)) || e.target.value === '') {
      setMaxPeopleAmount(e.target.value);
    }
  }

  return(  
  <form>
    <div className='row'>
      <p className='col-2'>Status: </p>
      <select className='col-2' defaultValue={status} onChange={handleStatusChange}>
        <option value='free'>free</option>
        <option value='busy'>busy</option>
        <option value='reserved'>reserved</option>
        <option value='cleaning'>cleaning</option>
      </select>
    </div>
    <p>People: 
      <input type='text' value={peopleAmount} onChange={handlePeopleAmountChange} max={maxPeopleAmount}/>
      /
      <input type='text' value={maxPeopleAmount} onChange={handleMaxPeopleAmountChange}/> 
    </p>
    {billVisible && <p>Bill: <span className='ms-4'>$<input type='text' value={bill} onChange={handleBillChange} /></span></p>  }
    <button type='submit' className='btn btn-primary'>Update</button>
  </form>
  )
};

export default TableForm;