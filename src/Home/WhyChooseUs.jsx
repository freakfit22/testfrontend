

// import { useEffect, useState } from "react";

// const Counter = ({ end, duration = 2000 }) => {
//     const [value, setValue] = useState(0);

//     useEffect(() => {
//         let start = 0;
//         const endValue = parseFloat(end);
//         const increment = endValue / (duration / 16); // approx 60fps

//         const animate = () => {
//             start += increment;
//             if (start < endValue) {
//                 setValue(Math.ceil(start));
//                 requestAnimationFrame(animate);
//             } else {
//                 setValue(end);
//             }
//         };
//         requestAnimationFrame(animate);
//     }, [end, duration]);

//     return <span>{value}</span>;
// };

// const WhyChooseUs = () => {
//     const stats = [
//         { value: 6, suffix: "+", label: "Years of Experience" },
//         { value: 15, suffix: "k+", label: "People Transformed" },
//         { value: 95, suffix: "%", label: "Success Rate" },
//         { value: 4.9, suffix: "", label: "Rating" },
//     ];

//     return (
//         <section className="bg-black py-[64px]">
//             <div className="container mx-auto text-center px-[16px]">
                
//                 <h2 className="text-[32px] font-bold text-white mb-[40px]">
//                     Why <span className="text-orange-400">Choose</span> Us?
//                 </h2>

//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px] text-center">
//                     {stats.map((item, index) => (
//                         <div key={index} className="flex flex-col items-center">
//                             <p className="text-white text-[32px] font-bold">
//                                 <Counter end={item.value} />{item.suffix}
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


import { useEffect, useRef, useState } from "react";

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    const stats = [
        { value: 6, suffix: "+", label: "Years of Experience" },
        { value: 15, suffix: "k+", label: "People Transformed" },
        { value: 95, suffix: "%", label: "Success Rate" },
        { value: 4.9, suffix: "", label: "Rating" },
    ];

    // ********* COUNTER INSIDE SAME COMPONENT *********
    const Counter = ({ end, duration = 2000 }) => {
        const [value, setValue] = useState(0);
        const started = useRef(false);

        useEffect(() => {
            if (!animate) {
                setValue(0);
                started.current = false;
                return;
            }

            if (started.current) return;
            started.current = true;

            let start = 0;
            const endValue = parseFloat(end);
            const increment = endValue / (duration / 16);

            const animateCount = () => {
                start += increment;
                if (start < endValue) {
                    setValue(Math.ceil(start));
                    requestAnimationFrame(animateCount);
                } else {
                    setValue(end);
                }
            };

            requestAnimationFrame(animateCount);
        }, [animate, end, duration]);

        return <span>{value}</span>;
    };

    // ********* OBSERVER TO TRIGGER ANIMATION *********
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setAnimate(true);
                    else setAnimate(false);
                });
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-black py-[64px]">
            <div className="container mx-auto text-center px-[16px]">
                <h2 className="text-[32px] font-bold text-white mb-[40px]">
                    Why <span className="text-orange-400">Choose</span> Us?
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-[32px] text-center">
                    {stats.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <p className="text-white text-[32px] font-bold">
                                <Counter end={item.value} />
                                {item.suffix}
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
