import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const LINKS = [
  {
    name: 'Гисты',
    path: '/gists/'
  },
  {
    name: 'Работы',
    path: '/works/'
  },
  {
    name: 'Блог',
    path: '/posts/'
  },
  {
    name: 'Обо мне',
    path: '/about/'
  }
];

export const Nav = () => (
  <>
    <nav className="nav">
      {LINKS.map((item, index) => (
        <Button key={index} component={NavLink} to={item.path} exact>
          {item.name}
        </Button>
      ))}
    </nav>
  </>
);
