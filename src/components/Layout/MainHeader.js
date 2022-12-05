import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const MainHeader = (props) => {

  const Url = 'https://github.com/leyulunna/TheCart';

  return (
    <header className={classes.header}>
      <h1>TheCart</h1>
      <nav>
          <ul>
            <li>
              <CartButton />
            </li>
            <li>
              <div className={classes.font}>
                <span><a href={Url} target="_blank" rel="noreferrer">Visit <FontAwesomeIcon icon={faGithub} /> to Learn More</a></span>
              </div>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default MainHeader;
