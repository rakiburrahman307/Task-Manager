const Banner = () => {
    const textField = (
        <div>
            <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className="w-1/2 text-white pl-10 space-y-8" data-aos="zoom-in-left">
                    <h2 className="text-6xl font-bold">Task Mastery Begins Here</h2>
                    <p>
                    Elevate your efficiency with our Task Manager. Seamlessly organize, prioritize, and conquer tasks effortlessly. Log in now for a productivity revolution                    </p>
                    <div className="flex" data-aos="flip-left">
                        <input type="text" placeholder="Type here" className="input input-bordered input-md w-48 max-w-md text-black rounded-none rounded-s-lg" />
                        <button className="btn btn-outline btn-accent rounded-e-full">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href="#slide6" className="btn btn-circle mr-5">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/DGbm2Bj/alvaro-reyes-q-Wwp-Hwip31-M-unsplash-min.jpg" className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                {textField}
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/W2hMVBL/airfocus-f2-C59x5uvn8-unsplash-min.jpg" className="w-full" />

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                {textField}
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/HHPys1k/eden-constantino-i-Jg1-Yzs-Efqo-unsplash-min.jpg" className="w-full" />

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                {textField}
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/nBbt4WJ/jo-szczepanska-5ai-Rb5f464-A-unsplash-1-min.jpg" className="w-full" />

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                {textField}
            </div>
        </div>
    );
};

export default Banner;



