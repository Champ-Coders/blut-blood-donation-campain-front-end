import Register from "@/components/Register/Register"
import BannerBreadcrumb from "@/components/UI/BannerBreadcrumb"

const RegisterPage = () => {
  return (
    <div>
      <BannerBreadcrumb
        items={[
          {
            label: "Register",
          },
        ]}
        title="Register Now"
        image="/assets/blood-donor-bg.png"
      />
      <Register />
      </div>
  )
}
export default RegisterPage