const CartoonNames = ({ cartoons }) => {
  return (
    <div>
      {cartoons.map(({ name, magnitude }) => {
        if (magnitude % 2 === 0) {
          return (
            <div>
              <h1>{name}</h1>
            </div>
          );
        }
      })}
    </div>
  );
};
export default CartoonNames;
