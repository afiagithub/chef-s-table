import './banner.css'
const Banner = () => {
    return (
        <div className='mx-5 lg:mx-16 pb-5 lg:pb-8 pt-3'>
            <div className="hero rounded-2xl" >
                <div className="hero-content text-center text-neutral-content">
                    <div className="py-6 lg:py-28 w-full lg:w-4/5 mx-auto">
                        <h1 className="text-5xl font-bold leading-snug w-4/5 mx-auto">
                            Discover an exceptional cooking class tailored for you!</h1>
                        <p className="my-8 w-5/6 mx-auto">Take a journey with to learn baking basics, 
                        mastering the grill,  the art of making delicious desserts 
                        and many more cooking skills. We teach various cooking techniques 
                        like Sautéing, Roasting, and Braising</p>
                        <div className="btn-section flex gap-5 items-center justify-center">
                            <button className="btn bg-[#0BE58A] rounded-full border-4 border-[#0BE58A] 
                            px-6 font-semibold text-lg hover:text-[#0BE58A] hover:border-[#0BE58A] hover:bg-white">
                                Explore Now</button>
                            <button className="btn bg-transparent rounded-full border-4 border-white text-white 
                            px-6 font-semibold text-lg hover:border-black hover:bg-black">
                                Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;