// const WhyChooseUs = () => {
//     const stats = [
//         { value: "10+", label: "Years of Experience" },
//         { value: "10K+", label: "People Transformed" },
//         { value: "99%", label: "Success Rate" },
//         { value: "4.9", label: "Rating" },
//     ];

//     return (
//         <section className="bg-black py-[64px]">
//             <div className="container mx-auto text-center px-[16px]">
                
//                 {/* Heading */}
//                 <h2 className="text-[32px] font-bold text-white mb-[40px]">
//                     Why <span className="text-orange-400">Choose</span> Us?
//                 </h2>

//                 {/* Stats */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px] text-center">
//                     {stats.map((item, index) => (
//                         <div key={index} className="flex flex-col items-center">
//                             <p className="text-white text-[32px] font-bold">
//                                 {item.value}
//                             </p>
//                             <p className="text-gray-400 text-[14px] uppercase tracking-wide">
//                                 {item.label}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WhyChooseUs;


import { useEffect, useState } from "react";

const Counter = ({ end, duration = 2000 }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const endValue = parseFloat(end);
        const increment = endValue / (duration / 16); // approx 60fps

        const animate = () => {
            start += increment;
            if (start < endValue) {
                setValue(Math.ceil(start));
                requestAnimationFrame(animate);
            } else {
                setValue(end);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{value}</span>;
};

const WhyChooseUs = () => {
    const stats = [
        { value: 6, suffix: "+", label: "Years of Experience" },
        { value: 15, suffix: "k+", label: "People Transformed" },
        { value: 95, suffix: "%", label: "Success Rate" },
        { value: 4.9, suffix: "", label: "Rating" },
    ];

    return (
        <section className="bg-black py-[64px]">
            <div className="container mx-auto text-center px-[16px]">
                
                <h2 className="text-[32px] font-bold text-white mb-[40px]">
                    Why <span className="text-orange-400">Choose</span> Us?
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px] text-center">
                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <p className="text-white text-[32px] font-bold">
                                <Counter end={item.value} />{item.suffix}
                            </p>
                            <p className="text-gray-400 text-[14px] uppercase tracking-wide">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
