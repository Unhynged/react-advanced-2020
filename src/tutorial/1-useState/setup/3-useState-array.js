import React from "react";
import { data } from "../../../data"; // this is a relative path

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person)=> person.id === id);
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {" "}
      {/* This is the same as writing <React.Fragment></React.Fragment>*/}
      {people.map((person) => {
        {
          /* This will allow us to iterate over the array, in this case people and then use the .map method . */
        }
        const { id, name } = person;
        {
          /* Here we are destructuring these two things, the id and the name */
        }
        return (
          <div key={id} className="item">
            {/* Now remember, when we render a list, we need to have this key prop for the unique identifier value. */}
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>{" "}
      {/* What we want to do is only invoke it when we click on it. The solution to this is to set up an arrow function, the button is calling the setPeople function and the only thing we need to do is pass in that new value. The new value in this case is an empty array. */}
    </>
  );
};

export default UseStateArray;
