import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';
import Table from '../../views/Table/Table';

const Home = () => {
  const tables = useSelector(state => getAllTables(state) );
  return (
    <div className={styles.home}>
      <h1 className='mb-5 mt-3'>All tables</h1>
      <div className=''>
        {tables.map(table => (
          <Table key={table.id} {...table} />
        ))}
      </div>
    </div>
  );
};
export default Home;