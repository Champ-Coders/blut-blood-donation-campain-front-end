const CallNow = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <div
        style={{
          backgroundImage: `url(https://innovativeartisan.com/demo/html/blad-ai/assets/images/call.jpg)`,
        }}
        className={`bg-cover h-auto sm:h-[calc(100vh-64px)] relative py-[90px]`}
      >
        <div className="absolute h-auto inset-0 bg-black/80"></div>
        <div className="w-full h-full font-poppins flex justify-center items-center">
          <div className="container f mx-auto max-w-5xl">
            <div className="py-[70px] text-white border-8 border-primary relative text-center block">
              <p>START DONATING</p>
              <h1 className="my-6 text-5xl">
                <span className="font-semibold">Call Now:</span> +8801935399238
              </h1>
              <div className="flex justify-center items-center gap-5">
                <p className="text-base transition duration-300 ease-in hover:text-primary">
                  Dhaka, Bangladesh
                </p>
                <p className="text-base transition duration-300 ease-in hover:text-primary">
                  Donate@gamil.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallNow;
