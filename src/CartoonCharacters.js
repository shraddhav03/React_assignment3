const CartoonCharacters = ({ cartoons }) => {
  return (
    <div>
      {cartoons.map(({ id, name, superpower, magnitude }) => {
        console.log(magnitude);
        if (magnitude > 5) {
          return (
            <div>
              <p>{id}</p>
              <p>name:{name}</p>
              <p>superpower:{superpower}</p>
              <p>magnitude:{magnitude}</p>

              {/* <p></p> */}
            </div>
          );
        }
      })}
    </div>
  );
};
export default CartoonCharacters;
