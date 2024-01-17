import styles from './TablePage.module.scss';
import { useParams,} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useNavigate } from 'react-router-dom';
import TableForm from '../../features/TableForm/TableForm';

const TablePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const table = useSelector(state => getTableById(state, id));
  
  if (!table) return navigate('/')


  return (
    <div className={'mb-5 mt-3 ' + styles.wrapper}>
      <h1>Table {table.id}</h1>
      <TableForm table={table}/>
    </div>
  );
};
export default TablePage;