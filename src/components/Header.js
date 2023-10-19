import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth.js";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        <nav>
          <ul>
            {isAuth && (
              <>
                <li>
                  <a href="/">My Products</a>
                </li>
                <li>
                  <a href="/">My Sales</a>
                </li>
              </>
            )}
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;