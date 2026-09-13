import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../../../../context/CartContext';
import { useFavorites } from '../../../../context/FavoritesContext';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const { totalCount } = useCart();
  const { favorites } = useFavorites();

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6 3.6L5.8 17.4H3.4L8.8 4.6H2.6V2.4H11.6V3.6ZM19.2 17.4H16.8V6.2H19.2V17.4ZM27.4 17.6C24.4 17.6 22.3 15.5 22.3 12.3C22.3 9.1 24.4 7 27.4 7C29.6 7 31.2 8.1 31.9 9.8L29.8 10.8C29.3 9.7 28.5 9.1 27.3 9.1C25.7 9.1 24.6 10.4 24.6 12.3C24.6 14.2 25.7 15.5 27.3 15.5C28.6 15.5 29.5 14.8 30 13.7L32.1 14.7C31.3 16.5 29.7 17.6 27.4 17.6ZM41.8 12.7H35.6C35.8 14.3 37 15.4 38.6 15.4C39.7 15.4 40.6 14.9 41.1 14L43 15C42.1 16.6 40.5 17.6 38.5 17.6C35.4 17.6 33.3 15.4 33.3 12.3C33.3 9.2 35.3 7 38.4 7C41.4 7 43.4 9.1 43.4 12.2V12.7H41.8ZM35.6 11.1H41.1C40.8 9.7 39.8 8.9 38.4 8.9C37 8.9 35.9 9.7 35.6 11.1Z" fill="#0F0F11"/>
          </svg>
        </Link>

        <nav className={styles.nav}>
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/phones" className={getLinkClass}>
            Phones
          </NavLink>
          <NavLink to="/tablets" className={getLinkClass}>
            Tablets
          </NavLink>
          <NavLink to="/accessories" className={getLinkClass}>
            Accessories
          </NavLink>
        </nav>
      </div>

      <div className={styles.actions}>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${styles.actionBtn} ${isActive ? styles.actionBtnActive : ''}`
          }
        >
          <div className={styles.iconWrapper}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.9996 2.72314C6.18365 1.05318 3.32766 1.13524 1.60741 2.85549C-0.150244 4.61315 -0.150244 7.46271 1.60741 9.22037L7.9996 15.6126L14.3918 9.22037C16.1495 7.46271 16.1495 4.61315 14.3918 2.85549C12.6715 1.13524 9.81555 1.05318 7.9996 2.72314ZM2.55022 3.7983C3.79978 2.54874 5.82914 2.54874 7.0787 3.7983L7.9996 4.7192L8.92051 3.7983C10.1701 2.54874 12.1994 2.54874 13.449 3.7983C14.6985 5.04786 14.6985 7.07722 13.449 8.32678L7.9996 13.7762L2.55022 8.32678C1.30066 7.07722 1.30066 5.04786 2.55022 3.7983Z" fill="#0F0F11"/>
            </svg>
            {favorites.length > 0 && (
              <span className={styles.badge}>{favorites.length}</span>
            )}
          </div>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${styles.actionBtn} ${isActive ? styles.actionBtnActive : ''}`
          }
        >
          <div className={styles.iconWrapper}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.6667 4.66667H11.3333C11.3333 2.82572 9.84095 1.33333 8 1.33333C6.15905 1.33333 4.66667 2.82572 4.66667 4.66667H1.33333C0.965144 4.66667 0.666667 4.96514 0.666667 5.33333V14C0.666667 14.3682 0.965144 14.6667 1.33333 14.6667H14.6667C15.0349 14.6667 15.3333 14.3682 15.3333 14V5.33333C15.3333 4.96514 15.0349 4.66667 14.6667 4.66667ZM8 2.66667C9.10457 2.66667 10 3.5621 10 4.66667H6C6 3.5621 6.89543 2.66667 8 2.66667ZM2 6H4.66667V7.33333C4.66667 7.70152 4.96514 8 5.33333 8C5.70152 8 6 7.70152 6 7.33333V6H10V7.33333C10 7.70152 10.2985 8 10.6667 8C11.0349 8 11.3333 7.70152 11.3333 7.33333V6H14V13.3333H2V6Z" fill="#0F0F11"/>
            </svg>
            {totalCount > 0 && (
              <span className={styles.badge}>{totalCount}</span>
            )}
          </div>
        </NavLink>
      </div>
    </header>
  );
};
