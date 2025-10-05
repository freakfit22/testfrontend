// import teamMembers from "../data/teamMembers.json";
import member1 from "../assets/Website/member1.jpg";
import member2 from "../assets/Website/member2.jpg";
import member3 from "../assets/Website/member3.jpg";
import member4 from "../assets/Website/member4.jpg";
const teamMembers = [
  {
    name: "Ruchi Harjpal Genani",
    title: "Zumba Trainer",
    desc: "Specialized in Zumba, Aerobics, HIIT, Weight Loss Training, and Fusion Workout.",
    img: member1
  },
   {
    name: "Saloni Jaisinghani",
    title: "Zumba Trainer",
    desc: "Specialized in Zumba, Aerobics, HIIT, Weight Loss Training, and Fusion Workout.",
    img: member2
  },
   {
    name: "Sneha Lulla",
    title: "Zumba Trainer",
    desc: "Specialized in Zumba, Aerobics, HIIT, Weight Loss Training, and Fusion Workout.",
    img: member3
  },
    {
    name: "Anamika Sharma",
    title: "Yoga Trainer",
    desc: "Specialized in Yoga, Meditation, Face Yoga, and Mindfulness.",
    img: member4
  },

  // ...other members
];

export default function MemberUsSection() {
  return (
    <section className="w-full text-white font-sans bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-[-10] bg-[radial-gradient(circle_at_center,_#ff6b6b_-120%,_#1f252b_70%)]" />
      
      <h2 className="text-center text-2xl md:text-5xl font-bold uppercase pt-0 pb-10 tracking-wide">
        Member Us
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-16 px-4 md:px-16">
        {teamMembers.slice(0, 4).map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center mt-10">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-white/20 mb-4">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            </div> 
            <h3 className="text-[#a885b9] font-semibold text-sm mb-1">{member.name}</h3>
            <p className="text-xs text-white mb-2">{member.title}</p>
            <p className="text-xs text-white max-w-[200px]">{member.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-4 md:px-16 pt-16 pb-28 bg-gradient-to-r from-[#a885b9] to-[#A3CBEC_0%]">
        {teamMembers.slice(4).map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center mt-10">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-white/20 mb-4">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">{member.name}</h3>
            <p className="text-xs text-white mb-2">{member.title}</p>
            <p className="text-xs text-white max-w-[200px]">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
