
import { useNavigate } from 'react-router-dom';

const Table = ({id, status}) => {
  const navigate = useNavigate();
  const handleClick = e => {
    e.preventDefault();
    navigate(`/table/${id}`);
  };
  return (
  <div className='row m-3 pb-4 align-items-center border-bottom'>
    <h2 className='col-3'>{'Table ' + id}</h2>
    <p className='col-3 m-0'><span className='fw-bold'>Status: </span>{status}</p>
    <div className='col-6 text-end'>
      <button className='btn btn-primary' onClick={handleClick}>Show more</button>
    </div>
  </div>
  );
};
export default Table;