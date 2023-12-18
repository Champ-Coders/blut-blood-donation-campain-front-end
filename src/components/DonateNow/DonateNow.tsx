import DonationForm from "./DonationForm"

const DonateNow = () => {
  return (
    <div className="py-10 px-10 sm:px-24 sm:py-16">
      <div className="text-center mb-6 sm:mb-14">
        <h1 className="text-2xl sm:text-5xl font-roboto font-bold">Make A Donation</h1>
      </div>
      <div className="container mx-auto pb-24 max-w-3xl ">
        <DonationForm />
      </div>
    </div>
  )
}
export default DonateNow