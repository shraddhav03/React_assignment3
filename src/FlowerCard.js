const FlowerCard = ({ bouquet }) => {
  return (
    <div>
      {bouquet.map(({ id, flowers, totalFlowers, price }) => {
        const isRose = flowers.filter((flower) => flower === "rose");
        console.log(isRose);
        return (
          isRose.length > 0 && <div>Price of bouquet with roses : {price}</div>
        );
      })}
    </div>
  );
};
export default FlowerCard;
