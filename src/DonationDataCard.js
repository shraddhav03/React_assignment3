const DonationDataCard = ({ DonationData }) => {
  return (
    <div>
      <p>
        Total Donation Collected :
        {DonationData.reduce((total, curr) => {
          return total + curr.Donation;
        }, 0)}
      </p>
    </div>
  );
};
export default DonationDataCard;
