
import { useNavigate } from 'react-router-dom';
import ButtonPrim from '../../common/ButtonPrim/ButtonPrim';

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
      <ButtonPrim onClick={handleClick}>Show more</ButtonPrim>
    </div>
  </div>
  );
};
export default Table;