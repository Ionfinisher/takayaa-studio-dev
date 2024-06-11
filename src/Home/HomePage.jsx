// Suggested code may be subject to a license. Learn more: ~LicenseLog:491628413.
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      {/* Hero section */}
      <div className="container mx-auto px-4 md:px-8 text-white bg-cover bg-center bg-[url('/home/user/takayaa-studio/src/assets/images/nice-cube.jpeg')]">

        <div className="flex flex-col gap-8 items-center justify-center w-full h-[500px]">
          <div className="flex flex-col m-3 gap-1">
            <div className="text-xl md:text-4xl text-center font-extrabold">
              <div className='mb-2'>TAKAYAA STUDIO :</div>
              <div className='my-2'>A CREATIVE DIGITAL AGENCY</div>
              <div className='mt-2'>LIKE YOU'VE NEVER SEEN BEFORE</div>
            </div>
            
            <div className="text-sm md:text-lg text-center my-3">
              <div>Here to help you bring your ideas further</div>
              <div>with our creative digital services.</div>
            </div>
          </div> 
          <div className="md:my-2">
            <Link to={"/"} className='border border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-xl font-bold text-white py-4 px-10 rounded-full flex gap-2 items-center'>
              {`LET'S TALK`}
            </Link>
          </div> 
        </div>
      </div>
      {/* Hero section */}

      
    </>
  );
};

export default HomePage;
