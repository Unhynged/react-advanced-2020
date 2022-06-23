import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = 'hello people'
    console.log(title);
  };
  // We don't see the changes as we're not currently re-rendering the component. We would want to keep the value between the renders but also we would want to trigger that rerender and this is where the useState hook comes into play. 

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
