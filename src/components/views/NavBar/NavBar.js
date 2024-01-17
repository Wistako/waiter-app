import styles from './NavBar.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className='row p-3 mb-2 justify-content-between align-items-center bg-primary text-white rounded'>
      <div className={'col-3 ' + styles.logo} onClick={e => navigate('/')}>
      <h3>Waiter.app</h3>
      </div>
      <div className='col-9 text-end'>
        <nav className={styles.nav}>
          <NavLink to='/' className='text-white'>Home</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;