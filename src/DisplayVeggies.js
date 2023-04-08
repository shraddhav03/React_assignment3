import { useState } from "react";

const DisplayVeggies = ({ vegetables }) => {
  const [isHighlight, setHighlight] = useState(false);

  const handleClick = () => {
    setHighlight(true);
  };

  return (
    <div>
      <ol>
        {vegetables.map(({ name, pickDate }) => {
          return (
            <li
              style={{
                color: isHighlight && pickDate === "2023-03-30" ? "Green" : ""
              }}
            >
              <p>Name:{name}</p>
              <p>PickDate:{pickDate}</p>
            </li>
          );
        })}
      </ol>
      <button onClick={handleClick}>Highlight Fresh Vegetables</button>
      {isHighlight}
    </div>
  );
};
export default DisplayVeggies;
