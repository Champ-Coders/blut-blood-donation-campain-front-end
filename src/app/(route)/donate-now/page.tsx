import DonateNow from "@/components/DonateNow/DonateNow"
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb"

const RegisterPage = () => {
  return (
    <div>
      <BannerBreadcrumb
        items={[
          {
            label: "Donate",
          },
        ]}
        title="Donate Now"
        image="/assets/blood-donor-bg.png"
      />
      <DonateNow />
      </div>
  )
}
export default RegisterPage