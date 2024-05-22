import bgBistroboss from "../assets/home/chef-service.jpg";
const Bistroboss = () => {
  return (
    <div
      className="hero min-h-screen my-24"
      style={{
        backgroundImage: `url(${bgBistroboss})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="lg:max-w-[900px] bg-white text-black py-20 px-28 rounded-md">
          <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
          <p className="my-5 text-slate-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bistroboss;
