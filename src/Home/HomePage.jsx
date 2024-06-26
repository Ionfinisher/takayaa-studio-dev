import React from 'react';
import { Link } from 'react-router-dom';
import { CircleArrowOutDownRight, Download, PartyPopper, Instagram } from 'lucide-react';
import takayaa from "../assets/takayaa-logo.png";
import { InputForm as EmailForm } from '../components/InputForm';
import { Separator } from "~/components/ui/separator"

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
            <Link to={"https://forms.gle/QwjYdgynRiwuLf3r5"} target='_blank' className='border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-2xl montserrat-2xl text-black py-4 px-10 rounded-full flex gap-2 items-center'>
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
        <div className="montserrat-md text-base md:text-xl 
        flex flex-col my-5 gap-5">
          <div className="text-2xl md:text-4xl flex flex-col md:flex-row md:items-end gap-5">
            Welcome to Takayaa Studio
            <PartyPopper size={45} strokeWidth={1} className="animate-shake"/>
          </div>
          <p>Our mission is to propel the online visibility and engagement of women's brands and Civil Society Organizations in Africa. Our vision is to create a digital ecosystem where every voice can be heard and every project can thrive through innovative marketing and design solutions.</p>
          <p>Our core values are creativity, innovation and social impact. We believe in the power of design and marketing to transform ideas into tangible realities and initiatives into sustainable successes. With a passionate and dedicated team, Takayaa Studio is committed to providing tailor-made services that reflect the uniqueness of each client while responding to the specific challenges of our time.</p>
        </div>
      </div>
      {/* About us section */}

      <Separator/>

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
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Graphic Design</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">02.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Web Design</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">03.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Audit & Digital Strategy</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">04.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Training</p>
              </div>
              
            </div>

            <div className="basis-1/2 flex flex-col justify-start md:justify-center items-start gap-8 md:gap-12">
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">05.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Content Marketing</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">06.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Content Creation</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">07.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Graphic Models Sale</p>
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
          <div className="flex flex-col md:flex-row gap-12 items-center justify-evenly">
            <h1 className="text-white montserrat-md text-3xl lg:text-4xl text-center md:basis-2/3">You're getting a free copy of our resource on something</h1>
            <div className='flex flex-col gap-8'>
              <EmailForm/>
              <Link to={"/"} className='border border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-xl md:text-2xl montserrat-2xl text-white py-4 px-10 rounded-full flex gap-2 items-center'>
                <Download size={20} strokeWidth={2} className="animate-bounce"/>
                Get free resource
              </Link>
            </div>
            
          </div>
        </div>
      </div>
      {/* Download resources section */}

      {/* Contact section */}
      <div id="contact" className="w-full py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12 items-center justify-evenly md:justify-center">
            <h1 className="text-black montserrat-md text-3xl lg:text-4xl text-center">
              Find out how we can turn your ideas into tangible, sustainable realities. Contact us today!
            </h1>
            <Link to={"https://forms.gle/QwjYdgynRiwuLf3r5"} target='_blank' className='border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-2xl montserrat-2xl text-black py-4 px-10 rounded-full flex gap-2 items-center'>
                {`LET'S TALK`}
            </Link>
          </div>
        </div>
      </div>
      {/* Contact section */}

      {/* Our social media section and footer*/}
      <div id="footer" className="w-full bg-cover bg-center pt-24 pb-10 bg-[url('src/assets/images/TAKAYAA-BACKGROUND.webp')] uppercase montserrat-sm">
        <div>
          <div className="container mx-auto px-4 md:px-8">
            {/* our social section */}
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
              {/* Instagram part */}
              <Link to={"https://www.instagram.com/takayaastudio?igsh=MTFvd3ViZm1tNXM3Ng=="} target='_blank' className='md:basis-1/3 backdrop-blur-sm shadow-lg rounded-xl p-8'>
                <div className="flex flex-col justify-center items-center gap-5 montserrat-md">
                  {/* Calling instagram logo */}
                  <span class="relative flex h-20 w-20">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-20 w-20 bg-pink-600 justify-center items-center">
                      <Instagram size={30} strokeWidth={2} className='text-white'/>
                    </span>
                  </span>
                  {/* @ part */}
                  <p className="text-black ">@takayaastudio</p>
                </div>
              </Link>

              {/* text part */}
              <div className='md:basis-2/3 text-center montserrat-md text-base md:text-xl'>
                En choisissant Takayaa Studio, vous optez pour une expertise complète et un engagement sincère envers la réussite de vos projets. Ensemble, faisons briller votre marque et amplifions votre impact social. Rejoignez-nous !
              </div>
            </div>
            {/* our social section */}

            <Separator className="my-8 bg-gray-300"/>

            {/* footer section */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 justify-between">
              {/* logo part */}
              <div>
                <img src={takayaa}  alt="logo" className="mx-auto w-32 h-12"/>
              </div>
              {/* logo part */}

              {/* contacts section */}
              <div>
                <div className="flex flex-col gap-5 items-center md:items-start">
                  <p>+228 90 00 00 00</p>
                  <p>takayaastudio@gmail.com</p>
                </div>
              </div>
              {/* contacts section */}

              {/* footer links */}
              <div>
                <div className="flex flex-col gap-5 items-center md:items-start">
                <Link to={"/#home"} className='hover:underline underline-offset-4'>Home</Link>
                <Link to={"/#aboutus"} className='hover:underline underline-offset-4'>About us</Link>
                <Link to={"/#ourexpertise"} className='hover:underline underline-offset-4'>Our expertise</Link>
                <Link to={"/#freeresources"} className='hover:underline underline-offset-4'>Free resource</Link>
                <Link to={"/#contact"} className='hover:underline underline-offset-4'>Contact</Link>
                </div>
              </div>
              {/* footer links */}
            </div>

            <Separator className="mt-4 md:mt-28 mb-4 bg-gray-300"/>

              {/* copyright section */}
              <div className='flex justify-center text-center'>
                <p>© {new Date().getFullYear()} Takayaa Studio. Tout droits réservés.</p>
              </div>
              {/* copyright section */}

            {/* footer section */}
          </div>
          {/* end of footer and socials */}
        </div>
      </div>
      {/* Our social media section and footer*/}

    </>
  );
};

export default HomePage;
