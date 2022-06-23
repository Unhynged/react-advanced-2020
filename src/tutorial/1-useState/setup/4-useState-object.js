import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: "24",
    message: "random message",
  });
  const changeMessage = () => {
    // setPerson ({ message: 'hello world' });
    setPerson({...person, message: 'hello world' }); {/* The solution is using a spread operator, where we first copy the values and then we come up with which ever value we want to override. It says that in the function person leave the two values of name and age as they are at overwrite only the message. If you're using the object, then you need to make sure that you always use the spread operator. */}
  };
  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
