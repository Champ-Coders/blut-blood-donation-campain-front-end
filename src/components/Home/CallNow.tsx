const CallNow = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <div
        style={{
          backgroundImage: `url(https://innovativeartisan.com/demo/html/blad-ai/assets/images/call.jpg)`,
        }}
        className={`bg-cover h-[calc(100vh-64px)] relative py-[90px]`}
      >
        <div className="absolute h-full inset-0 bg-black/80"></div>
        <div className="container mx-auto max-w-5xl bg-red-500">
          Call To action
        </div>
      </div>
    </div>
  );
};
export default CallNow;
