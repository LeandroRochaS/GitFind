import { Header } from '../../components/Header';
import { ItemList } from '../../components/ItemList';
import backgroundWhite from '../../images/background.svg';
import backgroundBlack from '../../images/outra.svg';
import './style.css';
import { useState } from 'react';

type User = {
  login: String;
  avatar_url: string;
  name: string;
  bio: string;
};

type Repos = {
  html_url: string;
  name: string;
  description: string;
};

export function Home() {
  const [user, setUser] = useState<String>('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repos[] | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleGetData = async () => {
    try {
      const userData = await fetch(`https://api.github.com/users/${user}`);
      const newUser: User = await userData.json();

      console.log(newUser.name);

      if (newUser.name) {
        const { login, avatar_url, name, bio } = newUser;

        setCurrentUser({ login, avatar_url, name, bio });
        console.log(avatar_url, name, bio);
      } else {
        return;
      }

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`,
      );

      const newReposUser: Repos[] = await reposData.json();
      console.log(newReposUser);
      if (newReposUser.length) {
        setRepos(newReposUser);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleDeleteData = () => {
    setCurrentUser(null);
    setRepos(null);
    setUser('');
  };

  const handleToggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="conteudo">
        <div className="background-container">
          {darkMode ? (
            <img
              src={backgroundWhite}
              className="background"
              alt="background app"
            />
          ) : (
            <img
              src={backgroundBlack}
              className="background-black"
              alt="background app"
            />
          )}
        </div>
        <div className="infos">
          <div className="input-content">
            <input
              className="input-user"
              value={user.toString()}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              name="usuario"
              placeholder="@username"
            />
            <button onClick={handleGetData} className="button-user">
              Buscar
            </button>
            <button
              style={{ marginLeft: '10px' }}
              onClick={handleDeleteData}
              className="button-user"
            >
              Limpar
            </button>
          </div>
          {currentUser && (
            <>
              <div className={`profile ${darkMode ? 'dark-light' : ''}`}>
                <img
                  src={currentUser.avatar_url}
                  alt="image profile github"
                  className="perfil-img"
                />
                <div className="perfil-info">
                  <h3>{currentUser.name}</h3>
                  <span>{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr />
            </>
          )}
          {repos && (
            <div className="list-repositorios">
              <h4>Repositórios</h4>

              {repos.slice(0, showMore ? repos.length : 4).map((element) => (
                <ItemList
                  title={element.name}
                  description={element.description}
                  darkMode={darkMode}
                  key={element.name}
                />
              ))}

              {repos.length > 4 && (
                <button
                  className="showmore-button"
                  onClick={handleToggleShowMore}
                >
                  {showMore ? 'Ver Menos' : 'Ver Mais'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
