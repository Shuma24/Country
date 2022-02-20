import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Layout.scss";

function Layout() {
  function setDefaultValue() {
    const themeStatus = localStorage.getItem("theme");
    return themeStatus;
  }

  const [theme, setTheme] = useState(setDefaultValue);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header className='header'>
        <div className='header__container container'>
          <div className='header__content'>
            <Link to='/' className='header__logo'>
              Where in the world?
            </Link>
            <div className='header__dark-mode' onClick={toggleTheme}>
              <svg
                width='24px'
                height='24px'
                xmlns='http://www.w3.org/2000/svg'
                className='ionicon'
                viewBox='0 0 512 512'>
                <title>Moon</title>
                <path
                  d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z'
                  fill='#ffff'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='32'
                />
              </svg>
              <span className='header__switcher'>Dark Mode</span>
            </div>
          </div>
        </div>
      </header>
      <main className='main'>
        <div className='main__container container'>
          <Outlet />
        </div>
      </main>
      <footer className='footer'>
        <div className='footer__container container'>
          <div className='footer__content'>
            Created by Shuma {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </>
  );
}

export { Layout };
