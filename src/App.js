// import BouquetCard from "./BouquetCard";
// import DonationDataCard from "./DonationDataCard";
import "./styles.css";
// import DisplayImage from "./DisplayImage";
// import CartoonCharacters from "./CartoonCharacters";
// import CartoonNames from "./CartoonNames";
import DisplayCars from "./DisplayCars";

// const imageWidth = "200px";
// const imageHeight = "220px";
// const imageLink = "https://picsum.photos/200";
// const bouquet = [
//   {
//     id: 1,
//     flowers: ["rose", "lily", "marigold"],
//     totalFlowers: 9,
//     price: 1400
//   },
//   {
//     id: 2,
//     flowers: ["snapdragon", "sunflower"],
//     totalFlowers: 10,
//     price: 3400
//   }
// ];

// Expected Output
// 1. snapdragon
// 2. sunflower

// const cartoons = [
//   {
//     id: 1,
//     name: "Mickey Mouse",
//     superpower: "Invisibility",
//     magnitude: 1
//   },
//   {
//     id: 2,
//     name: "Spongebob Squarepants",
//     superpower: "Super Strength",
//     magnitude: 3
//   },
//   {
//     id: 3,
//     name: "Bugs Bunny",
//     superpower: "Teleportation",
//     magnitude: 9
//   },
//   {
//     id: 4,
//     name: "Tom and Jerry",
//     superpower: "Intelligence",
//     magnitude: 8
//   },
//   {
//     id: 5,
//     name: "The Powerpuff Girls",
//     superpower: "Flight",
//     magnitude: 10
//   }
// ];

// const DonationData = [
//   {
//     id: 1,
//     name: "Nitin",
//     Donation: 7800
//   },
//   {
//     id: 2,
//     name: "Mehak",
//     Donation: 9500
//   },
//   {
//     id: 3,
//     name: "Mehul",
//     Donation: 65000
//   },
//   {
//     id: 4,
//     name: "Nina",
//     Donation: 560
//   }
// ];
const cars = [
  {
    id: 1,
    name: "supra",
    price: 500000,
    category: "sports"
  },
  {
    id: 2,
    name: "A5",
    price: 700000,
    category: "luxury"
  },
  {
    id: 3,
    name: "huyara",
    price: 1500000,
    category: "sports"
  },
  {
    id: 4,
    name: "agera R",
    price: 3500000,
    category: "sports"
  }
];

export default function App() {
  return (
    <div className="App">
      {/* <DisplayImage
        imageLink={imageLink}
        imageHeight={imageHeight}
        imageWidth={imageWidth} */}
      {/* /> */}
      {/* <CartoonCharacters cartoons={cartoons} /> */}
      {/* <CartoonNames cartoons={cartoons} /> */}
      {/* <BouquetCard bouquet={bouquet} /> */}
      {/* <DonationDataCard DonationData={DonationData} /> */}
      <DisplayCars cars={cars} />
    </div>
  );
}
