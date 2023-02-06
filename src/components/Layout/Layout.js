import './Layout.css';
import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <div className='Layout'>
      <Header />
      <main className='Layout__main'>{children}</main>
    </div>
  );
}
export default Layout;
