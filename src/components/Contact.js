
import React,{ useContext } from "react"
import UserContext from "../utils/UserContext";


const Contact = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    
    <div>
      <h1>{loggedInUser}</h1>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="name"
        />

        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="message"
        />
        <button className=" border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
