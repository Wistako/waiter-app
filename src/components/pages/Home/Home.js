import styles from './Home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTables, getTablesLength, removeTableRequest} from '../../../redux/tablesRedux';
import { useNavigate } from 'react-router-dom';
import Table from '../../views/Table/Table';
import ButtonPrim from '../../common/ButtonPrim/ButtonPrim';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tables = useSelector(state => getAllTables(state) );
  const tablesLength = useSelector(state => getTablesLength(state));

  return (
    <div className={styles.home}>
      <h1 className='mb-5 mt-3'>All tables</h1>
        {tables.map(table => (
          <Table key={table.id} {...table} />
        ))}
      <div className='text-end m-3 pb-4'>
        <ButtonPrim onClick={(e) => {e.preventDefault(); navigate('/table/add')}}>Add new table</ButtonPrim>
        <ButtonPrim onClick={(e) => {e.preventDefault(); dispatch(removeTableRequest({id : tablesLength.toString()}))}}>Remove table</ButtonPrim>
      </div>
    </div>
  );
};
export default Home;