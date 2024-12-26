import './Home.css'
    function Home() {
    return (
        <>
        <section className="container w-[88%] mx-auto ">
            <div className="grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1">
            <div className="items-center sm:p-6 md:mt-[30%] xs:p-6 lg:py-10  xs:mt-0 xs:py-12 flex lg:order-first md:order-first sm:order-last xs:order-last">
                <div className=" lg:top-[55%] md:top-20 xs:top-0">
                <div className="lg:text-6xl md:text-5x1 sm:text-4xl xs:text-2xl">
                    <h1 className=" font-normal   ">
                    Next Generation digital banking
                    </h1>
                </div>
                <div className="size-8/12 sm:size-full xs:size-fit">
                    <p className=" pt-5 text-gray-400">
                    Take your financial lift online . Your Easybank account will
                    be a one-stop-shop for spending saving budgeting investing .
                    and much more .
                    </p>
                </div>
                <button className=" text-white mt-4 btn bg-gradient-to-r from-green-500 to-cyan-500 hover:text-black duration-300 transition-all rounded-full p-2 px-6 ">
                    Request Invite
                </button>
                </div>
            </div>

            <div className="lg:order-last  sm:order-first xs:order-first ">
                <div className="lg:relative md:relative">
                <img
                    src="../../../src/images/bg-intro-desktop.svg"
                    alt="icon"
                    className="w-full lg:absolute sm:relative xs:relative lg:top-[10px] md:top-24 sm:top-0 xs:top-10"
                />
                <img
                    className="absolute amin lg:top-[-20px] md:top-20 
                                sm:w-[80%] sm:top-[-25%] sm:left-[50%] sm:translate-x-[-50%]
                                xs:w-[70%] xs:top-[-18%] xs:left-[50%] xs:translate-x-[-50%] lg:w-full md:w-full  "
                    src="./src/images/image-mockups.png"
                    alt="phone"
                />
                </div>
            </div>
            </div>
        </section>

        {/* Second section */}
        <section className="lg:p-20 mt-9 xs:py-20 bg-customGray">
            <div className="lg:w-full md:w-[90%] xs:w-[80%] xs:mx-auto ">
            <div className="lg:w-[57%] md:w-[57%] px-7">
                <h2 className="text-3xl leading-relaxed font-semibold ">Why choose Easybank?</h2>
                <p className="text-1xl leading-8 text-gray-500 ">
                We leverage Open Banking to true your bank account into your
                financial hup. Control your financial like never before.{" "}
                </p>
            </div>
            <div className="w-[95%]  mx-auto py-12">
                <div className="grid lg:grid-cols-4 md-:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-6">
                <div className="lg:text-start md:text-center sm:text-center xs:text-center shadow-sm p-6">
                    <div className="flex lg:justify-start md:justify-center sm:justify-center xs:justify-center ">
                    <img
                        src="./src/images/icon-online.svg"
                        alt="icon online"
                    />
                    </div>
                    <h2 className="text-2xl pt-6">Online Banking</h2>
                    <p className="text-gray-500 pt-6">
                    Our modern web and mobile application allow you to keep track
                    of you financial wherever you are the world.{" "}
                    </p>
                </div>
                <div className="lg:text-start md:text-center sm:text-center xs:text-center shadow-sm p-6">
                    <div className="flex lg:justify-start md:justify-center sm:justify-center xs:justify-center ">
                    <img
                        src="./src/images/icon-budgeting.svg"
                        alt="icon online"
                    />
                    </div>
                    <h2 className="text-2xl pt-6">Online Banking</h2>
                    <p className="text-gray-500 pt-6">
                    Our modern web and mobile application allow you to keep track
                    of you financial wherever you are the world.{" "}
                    </p>
                </div>
                <div className="lg:text-start md:text-center sm:text-center xs:text-center shadow-sm p-6">
                    <div className="flex lg:justify-start md:justify-center sm:justify-center xs:justify-center ">
                    <img
                        src="./src/images/icon-onboarding.svg"
                        alt="icon online"
                    />
                    </div>
                    <h2 className="text-2xl pt-6">Online Banking</h2>
                    <p className="text-gray-500 pt-6">
                    Our modern web and mobile application allow you to keep track
                    of you financial wherever you are the world.{" "}
                    </p>
                </div>
                <div>
                    <div className="lg:text-start md:text-center sm:text-center xs:text-center shadow-sm p-6">
                    <div className="flex lg:justify-start md:justify-center sm:justify-center xs:justify-center ">
                        <img
                        src="./src/images/icon-api.svg"
                        alt="icon online"
                        />
                    </div>
                    <h2 className="text-2xl pt-6">Online Banking</h2>
                    <p className="text-gray-500 pt-6">
                        Our modern web and mobile application allow you to keep
                        track of you financial wherever you are the world.{" "}
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Section Three */}

        <section className="p-12 my-12 w-[90%] mx-auto">
            <h2 className="text-3xl font-semibold">Latest Articles</h2>
    
            <div className="grid lg:grid-cols-4 md:grid-cols-2 ms:gird-cols-1 xs:grid-cols-1 pt-12 gap-6">
                {/* img one */}
            <div className="shadow-md rounded-md">

                <img src="./src/images/image-currency.jpg" className="rounded-md  lg:h-[181.79px] lg:w-full" alt="money" />

                <div className="lg:p-5 md:p-5 sm:p-8 xs:p-8 ">
                <p className="text-gray-500 text-[13px]">By Claire Robinson</p>
                <h3 className="text-lg pt-2 font-bold hover:text-green-500 duration-200 transition-all cursor-pointer">
                Receive money in any currency with no fees
                </h3>
                <p className="pt-2 text-gray-500 text-[13px]">
                The world is getting smaller and we are becoming more mobile. So
                why should you be forced to only receive money in a single...{" "}
                </p>
                </div>

            </div>
                 {/* img tow */}
            <div className="shadow-md rounded-md">

                <img src="./src/images/image-restaurant.jpg" className="rounded-md lg:h-[181.79px] md:h-[214.41px] w-full" alt="money" />

                <div className="lg:p-5 md:p-5 sm:p-8 xs:p-8  ">
                <p className="text-gray-500 text-[13px]">By Wilson Hutton</p>
                <h3 className="text-lg pt-2 font-bold hover:text-green-500 duration-200 transition-all cursor-pointer">
                Treat yourself without worrying about money
                </h3>
                <p className="pt-2 text-gray-500 text-[13px]">
                Our simple budgeting feature allows you to separate out 
                your spending and set realistic limits each month. 
                That means you...{" "}
                </p>
                </div>

            </div>
                 {/* img three */}
            <div className="shadow-md rounded-md">

                <img src="./src/images/image-plane.jpg" className="rounded-md lg:h-[181.79px] md:h-[214.41px] w-full" alt="money" />

                <div className="lg:p-5 md:p-5 sm:p-8 xs:p-8 ">
                <p className="text-gray-500 text-[13px]">By Wilson Hutton</p>
                <h3 className="text-lg pt-2 font-bold hover:text-green-500 duration-200 transition-all cursor-pointer">
                Take your Easybank card wherever you go 
                </h3>
                <p className="pt-2 text-gray-500 text-[13px]">
                We want you to enjoy your travels. 
                This is why we don&apos;t charge any fees 
                on purchases while you&apos;re abroad. 
                We&apos;ll even show you...{" "}
                </p>
                </div>

            </div>
                 {/* img four */}
            <div className="shadow-md rounded-md">

                <img src="./src/images/image-confetti.jpg" className="lg:h-[181.79px] md:h-[214.41px] w-full rounded-md" alt="money" />

                <div className="lg:p-5 md:p-5 sm:p-8 xs:p-8  ">
                <p className="text-gray-500 text-[13px]">By Claire Robinson</p>
                <h3 className="text-lg pt-2 font-bold hover:text-green-500 duration-200 transition-all cursor-pointer">
                Our invite-only Beta accounts are now live!
                </h3>
                <p className="pt-2 text-gray-500 text-[13px]">
                After a lot of hard work by the whole team, 
                we&apos;re exited to launch our closed beta. 
                It&apos;s easy to request an invite through the site...{" "}
                </p>
                </div>

            </div>
            
            </div>
        </section>

        {/* Section four */}
        <section className=" bg-Midnight_Blue py-12 ">
            <div className="grid grid-cols-12 gap-4 w-[85%] mx-auto">

                <div className="lg:col-span-3 md:col-span-3
                                sm:col-span-6 xs:col-span-12">
                    <div className="flex justify-center">
                        <img src="./src/images/logo.svg" className="lg:pb-10 md:pb-10 sm:pb-8 xs:pb-8  text-white " alt="logo" />  
                    </div>
                    <div className="flex lg:justify-around md:justify-center sm:justify-center xs:justify-center px-2 lg:pb-0 md:pb-0 sm:pb-3 xs:pb-3 ">
                        <img src="./src/images/icon-facebook.svg"  className="cursor-pointer mx-0  md:mx-2 sm:mx-2 xs:mx-2 text-gray-100
                        hover:text-green-500  duration-300 transition-all  " alt="facebook"/>
                        <img src="./src/images/icon-youtube.svg"   className="cursor-pointer mx-0  md:mx-2 sm:mx-2 xs:mx-2 text-gray-100
                        hover:text-green-500  duration-300 transition-all  " alt="youtube"/>
                        <img src="./src/images/icon-twitter.svg"   className="cursor-pointer mx-0  md:mx-2 sm:mx-2 xs:mx-2 text-gray-100
                        hover:text-green-500  duration-300 transition-all  " alt="twitter"/>
                        <img src="./src/images/icon-pinterest.svg" className="cursor-pointer mx-0  md:mx-2 sm:mx-2 xs:mx-2 text-gray-100
                        hover:text-green-500  duration-300 transition-all  " alt="pinterest"/>
                        <img src="./src/images/icon-instagram.svg" className="cursor-pointer mx-0  md:mx-2 sm:mx-2 xs:mx-2 text-gray-100
                        hover:text-green-500  duration-300 transition-all  " alt="instagram"/>
                    </div>
                </div>

                <div className="lg:col-span-4 md:col-span-4 
                                sm:col-span-6 xs:col-span-12">
                    <div className="grid grid-cols-12 lg:gap-3 lg:pl-8 ">
                        
                        <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 xs:col-span-12 md:ml-10 sm:mx-auto xs:mx-auto ">
                        <div className="text-gray-300 text-center text-sm">
                                <a href="#" className="block hover:text-green-500 transition-all duration-300 ">About Us</a>
                                <a href="#" className="block hover:text-green-500 transition-all duration-300 pt-4">Contact</a>
                                <a href="#" className="block hover:text-green-500 transition-all duration-300 pt-4">Blog</a>
                            </div>
                        </div>

                        <div className="lg:col-span-6 md:col-span-6 sm:col-span-6 xs:col-span-12 md:ml-10 sm:mx-auto xs:mx-auto lg:pb-0 md:pb-0 sm:pb-3 xs-pb-3  ">
                            <div className="text-gray-300 text-center text-sm">
                                <a href="#" className="block hover:text-green-500 transition-all duration-300 lg:pt-0 md:pt-0 sm:pt-0 xs:pt-4">Careers</a>
                                <a href="#" className="block hover:text-green-500 transition-all duration-300 pt-4">Support</a>
                                <a href="#" className="block hover:text-green-500 transition-all duration-300 pt-4">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 md:col-span-5
                                sm:col-span-12 xs:col-span-12 sm:text-center xs:text-center
                                lg:pt-0 md:pt-0 sm:pt-4 xs:pt-4">
                    <button className="btn bg-gradient-to-r
                    from-green-500 to-cyan-500 text-white hover:text-black 
                    duration-300 transition-all rounded-full p-2 lg:px-6 md:px-6 sm:px-12 xs:px-12">
                        Request Invite</button>
                    <p className="mt-4">
                        <a href="#" className=" text-gray-400 C_icon">
                            <span className="CC_icon">&copy;</span> Easybank.ALL Rights Reserved
                        </a>
                    </p>
                </div>

            </div>
        </section>
        </>
    );
    }

    export default Home;
