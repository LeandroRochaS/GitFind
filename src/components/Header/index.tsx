import './style.css';
import { Link } from 'react-router-dom';

export function Header(props: any) {
  const { darkMode, toggleDarkMode } = props;

  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="content-title">
        <div className="title-menu">
          <Link to={'/'} className={`title ${darkMode ? 'dark-title' : ''}`}>
            GitFind
          </Link>
        </div>
      </div>
      <div className="content-links">
        <div className="links-menu">
          <ul>
            <li>
              <Link
                className={`li ${darkMode ? 'dark-link' : ''}`}
                to="https://github.com/LeandroRochaS/GitFind"
                target="_blank"
              >
                Repo
              </Link>
            </li>
          </ul>
        </div>
        <button className="button-change" onClick={toggleDarkMode}>
          <svg
            className={darkMode ? 'sun-light' : 'sun-dark'}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </button>
      </div>
    </header>
  );
}
