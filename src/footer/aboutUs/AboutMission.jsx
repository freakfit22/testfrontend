
import { useEffect, useState } from "react";
import { fetchOurMission } from "../../components/api";

const AboutMission = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchOurMission();
                setData(response);
            } catch (err) {
                setError("Failed to load mission data");
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    // AUTO SLIDER
    useEffect(() => {
        if (data.length < 2) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 2) % data.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [data]);

    if (loading) return <p className="text-white py-10 text-center">Loading...</p>;
    if (error) return <p className="text-red-500 py-10 text-center">{error}</p>;

    const img1 = data[currentIndex];
    const img2 = data[(currentIndex + 1) % data.length];

    return (
        <section className="bg-black py-[64px]">
            <div className="container mx-auto px-[16px] flex flex-col lg:flex-row items-center">

                {/* TEXT SECTION */}
                <div className="lg:w-[600px] mt-[32px] lg:mt-0 lg:pl-[15px] text-justify">
                    <h2 className="text-[32px] font-bold text-white mb-[16px]">
                        OUR MISSION
                    </h2>

                    <p className="text-gray-400 leading-[1.6] mb-[16px]">
                        At <span className="text-orange-400 font-semibold">FreakFitHub</span>, 
                        our mission is to empower women across India and around the world 
                        to achieve a healthier, stronger, and more confident life through 
                        online Zumba classes, women-only fitness programs, and live home workouts.
                    </p>

                    <p className="text-gray-400 leading-[1.6] mb-[16px]">
                        We aim to make fitness fun, flexible, and result-driven by offering 
                        daily Zumba sessions, fat-loss workouts, and weekend yoga classes that 
                        fit every woman’s routine. With expert trainers, structured sessions, 
                        and a supportive online community, we make it easier for women to stay 
                        consistent and see visible transformation from home.
                    </p>

                    <p className="text-gray-400 leading-[1.6]">
                        We are committed to delivering affordable online fitness, beginner-friendly 
                        Zumba, and sustainable weight-loss guidance designed exclusively for women. 
                        FreakFitHub is building a global movement of strong, confident, and empowered 
                        women who enjoy every step of their fitness journey.
                    </p>
                </div>

                {/* IMAGE SLIDER SECTION */}
                <div className="relative flex gap-8 mt-10 lg:mt-0 lg:w-[700px] justify-center overflow-hidden">
                    <div
                        className="flex gap-6 transition-all duration-700 ease-in-out"
                        style={{ transform: `translateX(0)` }}
                    >
                        {[img1, img2].map(
                            (item, index) =>
                                item && (
                                    <img
                                        key={index}
                                        src={item.image}
                                        alt={item.title}
                                        className="
                                            rounded-xl shadow-lg
                                            w-[160px] h-[230px]
                                            lg:w-[250px] lg:h-[350px]
                                            object-cover
                                            opacity-100
                                            transition-all duration-700
                                        "
                                    />
                                )
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMission;
