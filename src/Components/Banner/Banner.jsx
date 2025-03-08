const Banner = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `url("https://i.ibb.co/1MGy5VS/Chefs-Cooking.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="lg:mx-32">
                            <h3 className="text-3xl text-[#ACE2E1] font-black"><i>Chefs Corner</i></h3>
                            <h5 className="mb-5 text-3xl font-bold">Discover an exceptional cooking class tailored for you!</h5>
                            <p className="mb-5">Indulge in culinary delight at Chefs Corner, where every dish is a masterpiece crafted with passion and flair. Experience exquisite flavors in an inviting ambiance, where each visit promises a memorable dining journey</p>
                            <div>
                                <button className="p-4 rounded-full bg-[#0BE58A] mr-4 text-black">Explore Now</button>
                                <button className="p-3 border rounded-full">Our Feedback</button>
                            </div>
                        </div>
                    </div>
                </div></div>
        </div>
    );
};

export default Banner;