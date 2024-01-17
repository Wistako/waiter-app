import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';

const Home = () => {
  const tables = useSelector(state => getAllTables(state) );
  console.log(tables);
  return (
    <div className={styles.home}>
      <h1>All tables</h1>
      <div className=''>
        {tables.map(table => (
          <div key={table.id} className=''>
            <h2>{table.status}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;