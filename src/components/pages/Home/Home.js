import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import { useNavigate } from 'react-router-dom';
import Table from '../../views/Table/Table';
import ButtonPrim from '../../common/ButtonPrim/ButtonPrim';

const Home = () => {
  const navigate = useNavigate();
  const tables = useSelector(state => getAllTables(state) );
  return (
    <div className={styles.home}>
      <h1 className='mb-5 mt-3'>All tables</h1>
        {tables.map(table => (
          <Table key={table.id} {...table} />
        ))}
      <div className='text-end m-3 pb-4'>
        <ButtonPrim onClick={(e) => {e.preventDefault(); navigate('/table/add')}}>Add new table</ButtonPrim>
      </div>
    </div>
  );
};
export default Home;