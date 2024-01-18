import styles from './TablePage.module.scss';
import { Navigate, useParams,} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import TableForm from '../../features/TableForm/TableForm';

const TablePage = () => {
  const { id } = useParams();
  
  const table = useSelector(state => getTableById(state, id));
  console.log(table);

  if(!table) return <Navigate to='/tables' />
  return (
    <div className={'mb-5 mt-3 ' + styles.wrapper}>
      <h1>Table {table.id}</h1>
      <TableForm table={table} />
    </div>
  );
};
export default TablePage;