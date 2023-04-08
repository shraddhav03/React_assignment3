const DisplayImage = ({ imageLink, imageHeight, imageWidth }) => {
  return (
    <div>
      <img
        src={imageLink}
        heigth={imageHeight}
        width={imageWidth}
        alt="Jungle Image"
      ></img>
    </div>
  );
};

export default DisplayImage;
