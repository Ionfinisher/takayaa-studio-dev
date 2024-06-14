import React from 'react';
import { Link } from 'react-router-dom';
import { CircleArrowOutDownRight } from 'lucide-react';
import { Separator } from "~/components/ui/separator"
import takayaa from "../assets/takayaa-logo.png"
import divider from "../assets/images/divider.png"

const HomePage = () => {
  return (
    <>
      {/* Hero section */}
      <div className="container mx-auto px-4 md:px-8 text-black bg-cover bg-center bg-[url('src/assets/images/ttten.svg')]">

        <div className="flex flex-col gap-8 items-center justify-center w-full h-[600px]">
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
      <div className="container mx-auto px-4 md:px-8 my-24">
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

      {/* Portfolio section */}
      <div className="w-full px-4 md:px-8 mb-24 text-[#e4e2e3] bg-[#484647bb] flex flex-col justify-center items-center gap-4">
        <div className='border border-white montserrat-md text-white py-2 px-5 rounded-full w-36 flex gap-2 items-center justify-center mb-12 mt-24'>
          <CircleArrowOutDownRight size={13} strokeWidth={2} />
          Our work
        </div>
        
        <div className="flex flex-col gap-8 items-center justify-center text-center text-lg md:text-2xl">
          <div className="amalfi-coast">
            Project Name
          </div>
          <div>
            <img src="src/assets/images/project.jpeg" alt="Project" className="w-full aspect-video md:w-[55%] md:aspect-video mx-auto"/>
          </div>
          <div className="px-9 md:px-72">
            Mondodo is architectureal Daseo
            creative studio. Harnessing innovation and
            recision. we architectural
            masterpieces that elevate the human
            exnerience. The best adenev in 2022's
            digital world.
          </div>
          <img src={divider} alt="divider" className='h-9 mb-14' />
        </div>

        <div className="flex flex-col gap-8 items-center justify-center text-center text-lg md:text-2xl">
          <div className="amalfi-coast">
            Project Name
          </div>
          <div>
            <img src="src/assets/images/project.jpeg" alt="Project" className="w-full aspect-video md:w-[55%] md:aspect-video mx-auto"/>
          </div>
          <div className="px-9 md:px-72">
            Mondodo is architectureal Daseo
            creative studio. Harnessing innovation and
            recision. we architectural
            masterpieces that elevate the human
            exnerience. The best adenev in 2022's
            digital world.
          </div>
          <img src={divider} alt="divider" className='h-9 mb-14' />
        </div>
        



        
        

        
      </div>
      
      {/* Portfolio section */}

      {/* Services section */}
      <div className="container mx-auto px-4 md:px-8 mb-24">
        <div className="border border-black montserrat-md text-black py-2 px-5 rounded-full max-w-44 flex gap-2 items-center justify-center mb-12">
          <CircleArrowOutDownRight size={13} strokeWidth={2} />
          Our services
        </div>
        <div className="flex pb-12">
          <div className="basis-1/2 flex flex-col justify-center items-start gap-5">
            <div className="flex justify-center items-center gap-4">
              <p className="montserrat-md text-xs text-gray-600">01.</p>
              <p className='montserrat-md text-2xl md:text-5xl'>Digital Marketing</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <p className="montserrat-md text-xs text-gray-600">02.</p>
              <p className='montserrat-md text-2xl md:text-5xl'>Branding</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <p className="montserrat-md text-xs text-gray-600">03.</p>
              <p className='montserrat-md text-2xl md:text-5xl'>Content Strategy</p>
            </div>
            
          </div>

          <div className="basis-1/2 flex flex-col justify-center items-start gap-5">
            <div className="flex justify-center items-center gap-4">
              <p className="montserrat-md text-xs text-gray-600">01.</p>
              <p className='montserrat-md text-2xl md:text-5xl'>Webdesign</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <p className="montserrat-md text-xs text-gray-600">02.</p>
              <p className='montserrat-md text-2xl md:text-5xl'>Webdesign</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <p className="montserrat-md text-xs text-gray-600">03.</p>
              <p className='montserrat-md text-2xl md:text-5xl'>Webdesign</p>
            </div>
            
          </div>

        </div>

      </div>
      
      {/* Services section */}

    </>
  );
};

export default HomePage;
