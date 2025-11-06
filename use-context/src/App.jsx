import NavBar from "./auth-example/Navbar";
import {AuthProvider} from "./auth-example/AuthContext";

function App() {

  return (
    <>
      <AuthProvider>
        <NavBar />
      </AuthProvider>
    </>
  )
}

export default App

// Theme Switcher Example Code
// import { createContext, useContext, useState } from "react";
// import ThemeContext from "./theme-example/ThemeContext";
// import Toolbar from "./theme-example/Toolbar";

// function App() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <>
//       <ThemeContext.Provider value={{theme, setTheme}}>
//         <Toolbar />
//       </ThemeContext.Provider>
//     </>
//   )
// }

// export default App


// Pass Object via Context Provider Example
// const UserContext = createContext();

// function App() {
//   const user = { name: "Yahubaba", role: "Admin" };

//   return (
//     <>
//       <UserContext.Provider value={user}>
//         <Parent />
//       </UserContext.Provider>
//     </>
//   )
// }

// function Parent() {
//   return <Child />;   // Passing down
// }

// function Child() {
//   return (
//     <div>
//       <GrandChild />
//     </div>
//   );  // Passing again
// }

// function GrandChild() {
//   const { name, role } = useContext(UserContext)
//   return <h3>Welcome {name} - your role is {role}</h3>;
// }

// export default App