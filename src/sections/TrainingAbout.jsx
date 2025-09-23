const PersonalTrainerSection = () => {
  return (
    <section className="w-full bg-[radial-gradient(circle_at_center,_#ff6b6b_-120%,_#1f252b_70%)] text-white py-20 px-4 md:px-10">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-10">
        PERSONAL TRAINER
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:gap-16 gap-6 md:max-w-180  mx-auto">
        {[
          {
            title: "Strength Training Power Lifter",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Education for a Strong Life",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Healthy Food Education Body",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: "Healthy Drink Education",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border-4 border-gray-600 p-6 rounded shadow-md"
          >
            <h3 className="text-white text-xs font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-xs mb-4">{item.desc}</p>
            <button className="bg-[#FD4C00]  hover:bg-white hover:text-black  text-white px-2 py-2 text-sm font-semibold  cursor-pointer">
              Learn More
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-300 mt-10 max-w-2xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s,
      </p>
    </section>
  );
};

export default PersonalTrainerSection;
