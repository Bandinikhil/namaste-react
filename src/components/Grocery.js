// import { useContext } from "react"; 
// import UserContext from "../utils/UserContext";

const Grocery = () => {
  const {loggedInUser} = useContext(UserContext);
  return (
    <>
    
    <h1>
      {" "}
      Our grocery online store, and we have a lot of child components inside
      this web page!!!
    </h1></>
    
  );
};

export default Grocery;
