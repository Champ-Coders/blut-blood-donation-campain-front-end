import DonateNow from "@/components/DonateNow/DonateNow";
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb";

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
      />
      <DonateNow />
    </div>
  );
};
export default RegisterPage;
