import React from 'react';
import { Link } from 'react-router-dom';
import { CircleArrowOutDownRight } from 'lucide-react';
import { Separator } from "~/components/ui/separator"

const HomePage = () => {
  return (
    <>
      {/* Hero section */}
      <div className="container mx-auto px-4 md:px-8 text-white bg-cover bg-center bg-[url('src/assets/images/nice-cube.jpeg')]">

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


      {/* About us section */}
      <div className="container mx-auto px-4 md:px-8 my-24">
        <div className='border border-black text-black py-2 px-5 rounded-full w-36 flex gap-2 items-center justify-center'>
          <CircleArrowOutDownRight size={13} strokeWidth={2} />
          About us
        </div>
        <div className="text-3xl md:text-7xl my-5">
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
      <div className="w-full px-4 md:px-8 my-10 text-white p-9 bg-right-top bg-[url('src/assets/images/nice-cube.jpeg')] flex flex-col justify-center items-center gap-4">
        <div className='border border-white text-white py-2 px-5 rounded-full w-36 flex gap-2 items-center justify-center'>
          <CircleArrowOutDownRight size={13} strokeWidth={2} />
          Our work
        </div>
        <div className="flex flex-col gap-20 items-center justify-center text-center text-lg md:text-2xl my-5">
          <div>
            <img src="src/assets/images/project.jpeg" alt="Project" className="w-60 h-32 md:w-96 md:h-64"/>
          </div>
          <div className="px-9 md:px-72">
            Mondodo is architectureal Daseo
            creative studio. Harnessing innovation and
            recision. we architectural
            masterpieces that elevate the human
            exnerience. The best adenev in 2022's
            digital world.
          </div>
          <Separator className="bg-gray-200 my-8"/>
        </div>

        <div className="flex flex-col gap-20 items-center justify-center text-center text-lg md:text-2xl my-5">
          <div>
            <img src="src/assets/images/project.jpeg" alt="Project" className="w-60 h-32 md:w-96 md:h-64"/>
          </div>
          <div className="px-9 md:px-72">
            Mondodo is architectureal Daseo
            creative studio. Harnessing innovation and
            recision. we architectural
            masterpieces that elevate the human
            exnerience. The best adenev in 2022's
            digital world.
          </div>
          <Separator className="bg-white my-8"/>
        </div>

        <div className="flex flex-col gap-20 items-center justify-center text-center text-lg md:text-2xl my-5">
          <div>
            <img src="src/assets/images/project.jpeg" alt="Project" className="w-60 h-32 md:w-96 md:h-64"/>
          </div>
          <div className="px-9 md:px-72">
            Mondodo is architectureal Daseo
            creative studio. Harnessing innovation and
            recision. we architectural
            masterpieces that elevate the human
            exnerience. The best adenev in 2022's
            digital world.
          </div>
        </div>
      </div>
      
      {/* Portfolio section */}

    </>
  );
};

export default HomePage;
