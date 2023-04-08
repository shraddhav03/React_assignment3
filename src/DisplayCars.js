const DisplayCars = ({ cars }) => {
  console.log(cars);
  const result = cars.reduce((acc, cur) => {
    const currentValue = cur.category;
    // console.log(currentValue)
    console.log(acc);
    if (!acc[currentValue]) {
      return { ...acc, [currentValue]: 1 };
    } else {
      return { ...acc, [currentValue]: acc[currentValue] + 1 };
    }
  }, {});
  console.log(result);

  return (
    <div>
      {Object.keys(result).map((item) => {
        return (
          <div>
            {" "}
            {item}:{result[item]}{" "}
          </div>
        );
      })}
    </div>
  );
};
export default DisplayCars;
