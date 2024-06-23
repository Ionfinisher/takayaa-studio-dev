import React from 'react';
import { Link } from 'react-router-dom';
import { CircleArrowOutDownRight, Download } from 'lucide-react';
import takayaa from "../assets/takayaa-logo.png"

const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png']

const HomePage = () => {
  return (
    <>
      {/* Hero section */}
      <div className="w-full px-4 md:px-8 py-12 text-black bg-cover bg-center bg-[url('src/assets/images/TAKAYAA-BACKGROUND.webp')]">

        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col m-3 gap-1 montserrat-md">
            <div className="text-2xl md:text-4xl text-center">
              <img src={takayaa}  alt="logo" className="mx-auto w-64 h-24 md:w-full md:h-40"/>
              <div className='my-2'>A CREATIVE DIGITAL AGENCY</div>
              <div className='mt-2'>LIKE YOU'VE NEVER SEEN BEFORE</div>
            </div>
            
            <div className="text-sm md:text-lg text-center my-3">
              <div>Here to help you bring your ideas further</div>
              <div>with our creative digital services.</div>
            </div>
          </div> 
          <div className="md:my-2">
            <Link to={"/"} className='border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-2xl montserrat-2xl text-black py-4 px-10 rounded-full flex gap-2 items-center'>
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
        <div className="montserrat-md text-3xl md:text-7xl my-5">
          <div>We Integrate, Collaborate</div>
          <div>and Challenge.</div>
          <div>We are digital natives</div>
          <div>embracing the creative</div>
          <div>freedom to produce</div>
          <div>solutions that connect,</div>
          <div>communicate, and inspire.</div>
        </div>
      </div>
      {/* About us section */}



      {/* Expertise section */}
      <div className='w-full py-24 bg-[#484647bb]'>
        <div id="ourexpertise" className="container mx-auto px-4 md:px-8">
          <div className="border border-white montserrat-md text-white py-2 px-5 rounded-full max-w-44 flex gap-2 items-center justify-center mb-16">
            <CircleArrowOutDownRight size={13} strokeWidth={2} />
            Our expertise
          </div>
          <div className="flex my-5 text-white">
            <div className="basis-1/2 flex flex-col justify-center items-start gap-8 md:gap-12">
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">01.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Digital Marketing</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">02.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Branding</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">03.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Content Strategy</p>
              </div>
              
            </div>

            <div className="basis-1/2 flex flex-col justify-center items-start gap-8 md:gap-12">
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">04.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Digital Marketing</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">05.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Branding</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">06.</p>
                <p className='montserrat-md text-xl md:text-4xl'>Content Strategy</p>
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
      <div id="freeressources" className="w-full py-24 bg-[#484647bb]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12 items-center justify-evenly">
            <h1 className="text-white montserrat-md text-3xl md:text-5xl text-center">Download our free ressource now !</h1>
            <Link to={"/"} className='border border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-2xl montserrat-2xl text-white py-4 px-10 rounded-full flex gap-2 items-center'>
              <Download size={20} strokeWidth={2} />
              Download
            </Link>
          </div>
        </div>
      </div>
      {/* Download resources section */}

      {/* Contact section */}
      {/* Contact section */}

      {/* Our social media section */}
      {/* Our social media section */}

      {/* Footer section */}
      {/* Footer section */}

    </>
  );
};

export default HomePage;
