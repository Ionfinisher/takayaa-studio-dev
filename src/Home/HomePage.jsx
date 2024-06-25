import React from 'react';
import { Link } from 'react-router-dom';
import { CircleArrowOutDownRight, Download } from 'lucide-react';
import takayaa from "../assets/takayaa-logo.png"

const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png']

const HomePage = () => {
  return (
    <>
      {/* Hero section */}
      <div id="home" className="w-full px-4 md:px-8 py-12 text-black bg-cover bg-center bg-[url('src/assets/images/TAKAYAA-BACKGROUND.webp')]">

        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col m-3 gap-1 montserrat-md">
            <div className="text-2xl md:text-4xl text-center">
              <img src={takayaa}  alt="logo" className="mx-auto w-64 h-24 md:w-full md:h-40"/>
              <div className='my-2'>A CREATIVE DIGITAL AGENCY</div>
              <div className='mt-2'>LIKE YOU'VE NEVER SEEN BEFORE</div>
            </div>
            
            <div className="text-sm md:text-lg text-center my-3">
              <div>Find out more about how we can help you</div>
              <div>make a difference.</div>
            </div>
          </div> 
          <div className="md:my-2">
            <Link to={"https://forms.gle/QwjYdgynRiwuLf3r5"} className='border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-2xl montserrat-2xl text-black py-4 px-10 rounded-full flex gap-2 items-center'>
              {`LET'S TALK`}
            </Link>
          </div> 
        </div>
      </div>
      {/* Hero section */}


      {/* About us section */}
      <div id='aboutus' className="container mx-auto px-4 md:px-8 py-24">
        <div className="border border-black montserrat-md text-black py-2 px-5 rounded-full w-36 flex gap-2 items-center justify-center mb-16">
          <CircleArrowOutDownRight size={13} strokeWidth={2} />
          About us
        </div>
        <div className="montserrat-md text-2xl md:text-6xl my-5">
          <div>Our mission is to propel the online visibility</div>
          <div>and engagement of women's brands and Civil Society Organizations in Africa.</div>
          <div>Our vision is to create a digital ecosystem</div>
          <div>where every voice can be heard</div>
          <div>and every project can thrive through innovative marketing and design solutions.</div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* About us section */}



      {/* Expertise section */}
      <div id="ourexpertise" className='w-full py-24 bg-[#484647bb]'>
        <div className="container mx-auto px-4 md:px-8">
          <div className="border border-white montserrat-md text-white py-2 px-5 rounded-full max-w-44 flex gap-2 items-center justify-center mb-16">
            <CircleArrowOutDownRight size={13} strokeWidth={2} />
            Our expertise
          </div>

          <div className="flex my-5 text-white">
            <div className="basis-1/2 flex flex-col justify-start md:justify-center items-start gap-8 md:gap-12">
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">01.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Graphic Design</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">02.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Web Design</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">03.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Audit & Digital Strategy</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">04.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Training</p>
              </div>
              
            </div>

            <div className="basis-1/2 flex flex-col justify-start md:justify-center items-start gap-8 md:gap-12">
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">05.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Content Marketing</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">06.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Content Creation</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">07.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Graphic Models Sale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Expertise section */}

      {/* They trust us section */}
      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="flex flex-col items-center justify-center gap-8">
        <div className="border border-black montserrat-md text-black py-2 px-5 rounded-full max-w-48 flex gap-2 items-center justify-center mb-16">
          <CircleArrowOutDownRight size={13} strokeWidth={2} />
            They trusted us
          </div>
          <div className="flex flex-row justify-evenly w-full flex-wrap gap-3">
            {images.map((image, index) => (
              <div key={index} className="w-28 h-28 md:w-52 md:h-48">
                <img src={`src/assets/trusted-logos/${image}`} alt="Parteners-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* They trust us section */}

      {/* Testimonials section */}
      {/* Testimonials section */}

      {/* Download resources section */}
      <div id="freeresources" className="w-full py-24 bg-[#484647bb]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12 items-center justify-evenly">
            <h1 className="text-white montserrat-md text-3xl md:text-5xl text-center">You're getting a free copy of our resource on something</h1>
            <Link to={"/"} className='border border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-xl md:text-2xl montserrat-2xl text-white py-4 px-10 rounded-full flex gap-2 items-center'>
              <Download size={20} strokeWidth={2} />
              Get free resource
            </Link>
          </div>
        </div>
      </div>
      {/* Download resources section */}

      {/* Contact section */}
      <div id="contact" className="w-full py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-evenly md:justify-center">
            <h1 className="text-black montserrat-md text-3xl md:text-5xl text-center">
              Find out how we can turn your ideas into tangible, sustainable realities. Contact us today!
            </h1>
            <Link to={"https://forms.gle/QwjYdgynRiwuLf3r5"} className='border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-2xl montserrat-2xl text-black py-4 px-10 rounded-full flex gap-2 items-center'>
                {`LET'S TALK`}
            </Link>
          </div>
        </div>
      </div>
      {/* Contact section */}

      {/* Our social media section */}
      {/* Our social media section */}

      {/* Footer section */}
      {/* Footer section */}

    </>
  );
};

export default HomePage;
