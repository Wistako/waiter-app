import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { updateTableRequest } from "../../../redux/tablesRedux";
import { Spinner } from "react-bootstrap";
import { getLoading } from "../../../redux/loadingRedux";

const TableForm = ({table }) => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);
  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setBill] = useState(table.bill);
  const [billVisible, setBillVisible] = useState(false);
  useEffect(() => {
    if(status === 'busy') {
      setBillVisible(true);
    } else {
      setBillVisible(false);
      setBill(0);
    }
  }, [status])
  
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
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
    if(( value >=0  && !isNaN(value) && value <= 10 ) || e.target.value === '') {
      setMaxPeopleAmount(e.target.value);
      if(peopleAmount > value) {
        setPeopleAmount(value);
      }
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const tableData = {
      id: table.id,
      status,
      peopleAmount,
      maxPeopleAmount,
      bill
    };
    dispatch(updateTableRequest(tableData))
  }
  if(loading) return(<Spinner />)
  return(
      <form onSubmit={handleSubmit}>
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