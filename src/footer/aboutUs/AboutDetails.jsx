import testImg from "../../assets/testsrc/testImage1.png";
import testImg2 from "../../assets/testsrc/ClassBG.jpg";

const AboutDetails = () => {
    return (
        <section className="bg-black py-[64px]">
            <div className="container mx-auto px-[16px] flex flex-col lg:flex-row items-center">
                
                {/* Images Section */}
                <div className="flex flex-col lg:flex-row gap-[16px] items-center lg:w-[600px]">
                    {/* First Image */}
                    <img
                        src={testImg}
                        alt="Group outdoors"
                        className="rounded-xl w-full aspect-[3/2] object-cover"
                    />
                </div>

                {/* Text Section */}
                <div className="lg:w-[600px] mt-[32px] lg:mt-0 lg:pl-[64px] text-justify">
                    <h2 className="text-[32px] font-bold text-white mb-[16px]">About Us</h2>

                    <p className="text-gray-400 text-[16px] mb-[16px] leading-[1.6]">
                       <span className="text-orange-400 font-semibold">FreakFitHub</span> is an online fitness platform designed to help women stay active through live Zumba workouts, home-based exercise sessions, weekend yoga classes, and simple, effective diet guidance. Founded by 
                        <strong> Gaurav Dixit, Satyam Sharma, and Harsh Jain</strong>, we focus on creating a comfortable and enjoyable fitness experience for women across India and worldwide.
                    </p>

                    <p className="text-gray-400 text-[16px] mb-[16px] leading-[1.6]">
                        With experienced trainers, supportive coaching, and easy-to-follow diet tips, we make your fitness journey consistent and achievable from home. We operate from 
                        <strong> 3/1, Dakshinpuri Ext Dr, near Virat Cinema Hall, Block 17, Block J, Sector 5, Dakshinpuri, New Delhi, Delhi 110062</strong>, and remain committed to helping every woman feel healthier, more confident, and full of energy each day.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutDetails;
