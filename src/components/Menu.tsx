import { useDataContext } from '../contexts/DataContext';
import { useNavigationContext } from '../contexts/NavigationContext';

const Menu = () => {
  const { page, setPage, pages } = useNavigationContext();
  const { generate } = useDataContext();
  return (
    <>
      <ul className="menu">
        {pages.map((item) => (
          <li key={item.title}>
            <a href={item.url} onClick={() => setPage(item.url)} className={item.url === page ? 'active' : ''}>{item.title}</a>
          </li>
        ))}
        <li><button onClick={generate}>Regenerate Data</button></li>
      </ul>
    </>
  );
}

export default Menu;