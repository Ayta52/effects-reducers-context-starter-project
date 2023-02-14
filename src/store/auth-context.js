import react, { useState, useEffect } from "react";

const AuthContext = react.createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedLoginInfo = localStorage.getItem('isLogedIn');

    if (storedLoginInfo === '1') {
      setIsLoggedIn(true)
    };
  }, []);

  const loginHandler = () => {
    localStorage.setItem('isLogedIn', '1')
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLogedIn')
    setIsLoggedIn(false)
  }

  return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContext
