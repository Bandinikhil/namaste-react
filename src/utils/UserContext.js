import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "",
});

export default UserContext;
// import { createContext } from "react";

// const UserContext = createContext({
//   loggeInUser : "Degault User",
// })

// export default UserContext