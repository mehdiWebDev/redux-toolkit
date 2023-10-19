import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => {
    return state.auth.isAuthenticated;
  });

  return (
    <>
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
