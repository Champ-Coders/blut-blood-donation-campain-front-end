import RegisterFrom from "./RegisterFrom"

const Register = () => {
  return (
    <div className="container mx-auto max-w-7xl py-6 sm:py-16">
      <div className="text-center mb-6 sm:mb-14">
        <h1 className="text-2xl sm:text-5xl font-roboto font-bold">Blut Organization</h1>
      </div>

      <div className="container mx-auto py-14 px-10 max-w-3xl border border-gray-300">
          <RegisterFrom />
      </div>
    </div>
  )
}
export default Register