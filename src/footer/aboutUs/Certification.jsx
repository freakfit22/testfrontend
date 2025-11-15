
import { useEffect, useState } from "react";
import { fetchCertifications } from "../../components/api";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Certification = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchCertifications();
                setData(response);
            } catch (err) {
                console.error("Error fetching certifications:", err);
                setError("Failed to load certifications");
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) return <p className="text-white text-center py-10">Loading...</p>;
    if (error) return <p className="text-red-500 text-center py-10">{error}</p>;

    return (
        <section className="bg-black py-[64px]">
            <div className="container mx-auto px-[16px] flex flex-col lg:flex-row items-center">

                {/* SLIDER SECTION */}
                <div className="flex flex-col lg:flex-row gap-[16px] items-center lg:w-[600px] justify-center">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        className="w-[350px] lg:w-[500px] rounded-xl shadow-lg"
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="rounded-xl w-full aspect-[3/2] object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* TEXT SECTION */}
                <div className="lg:w-[600px] mt-[32px] lg:mt-0 lg:pl-[64px] text-justify">
                    <h2 className="text-[32px] font-bold text-white mb-[16px]">
                        Certification
                    </h2>

                    <p className="text-gray-400 text-[16px] mb-[16px] leading-[1.6]">
                        At <span className="text-orange-400 font-semibold">FreakFitHub</span>, 
                        our trainers are experienced fitness professionals dedicated to delivering 
                        the best results in their career. Almost all of our instructors hold the 
                        ZIN™ certificate, ensuring that every Zumba session is safe, energetic, and 
                        taught with proper techniques.
                    </p>

                    <p className="text-gray-400 text-[16px] mb-[16px] leading-[1.6]">
                        Our yoga trainers are also internationally certified, giving women across 
                        India and worldwide access to high-quality online yoga, flexibility, and 
                        wellness sessions directly from home.
                    </p>

                    <p className="text-gray-400 text-[16px] leading-[1.6]">
                        We also provide an Official Participation Certificate to every member who 
                        completes our program. This certificate, issued directly by FreakFitHub, 
                        recognizes consistency, dedication, and progress in your fitness journey. 
                        It represents the trust, quality, and professionalism of our online Zumba 
                        and yoga training — motivating you to continue your transformation with confidence.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Certification;
