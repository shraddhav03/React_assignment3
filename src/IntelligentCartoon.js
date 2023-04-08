const IntelligentCartoon = ({ cartoons, superpower = "Intelligence" }) => {
  console.log(cartoons);
  return (
    <div>
      {cartoons.map((cartoons) => {
        console.log(cartoons.superpower);
        console.log("prop", superpower);
        if (cartoons.superpower === superpower) {
          console.log("if ");
          console.log(superpower);
          return (
            <div>
              <p>
                {cartoons.name} - {cartoons.superpower} - {cartoons.magnitude}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};
export default IntelligentCartoon;
