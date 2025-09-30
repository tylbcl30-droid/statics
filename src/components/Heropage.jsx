import plasentaImage from '../assets/animation.gif';
import { useState, useEffect } from 'react';
import { motion, useAnimation} from 'framer-motion';

const HeroPage = () => {
    const [text, setText] = useState("COMING SOON");
    const [buttonText, setButtonText] = useState("Copy");

    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
        .then(() => {
            setButtonText("Copied!");
        setTimeout(() => setButtonText(buttonText), 2000);
        })
    }


    return (
        <div className="w-full min-h-screen" style={{ overflow: 'hidden', backgroundColor: '#132B27' }}>

        <div className='mx-24 my-8 flex flex-col gap-14 max-sm:mx-8 max-lg:mx-12'>
            <div>
                <motion.nav className='flex justify-between items-center bg-[#1F4E3D] py-4 px-8 max-sm:px-4 max-sm:py-3 rounded-lg box border border-black'
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    style={{ overflow: 'hidden' }}
                >
                    <a href="" className='flex items-center gap-2'>
  <img className='w-10 p-1 rounded-full bg-[#132B27]' src={plasentaImage} />
 <h3 className='distinct font-bold text-base max-sm:hidden uppercase tracking-widest text-white animate-pulse'>
  $PLASENTA
</h3>
</a>


                    <div className='gap-6 max-lg:gap-3 flex items-center'>
 {/* Twitter */}
<a 
  href="#" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="flex gap-2 items-center"
>
  <h3 className="max-sm:hidden text-white">Twitter</h3>
  <div className="md:hidden button rounded-md border border-black p-2">
    {/* Twitter Icon */}
    <svg className="w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
    </svg>
  </div>
</a>

{/* Telegram */}
<a 
  href="#" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="flex gap-2 items-center"
>
  <h3 className="max-sm:hidden text-white">Telegram</h3>
  <div className="md:hidden button rounded-md border border-black p-2">
    {/* Telegram Icon */}
    <svg className="w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
      <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
    </svg>
  </div>
</a>

</div>


                    <div>
  <a 
    href="#" 
    target="_blank" 
    rel="noopener noreferrer"
    className="uppercase bg-[#1F4E3D] text-white button rounded-md px-4 py-2 max-sm:text-sm border border-black"
  >
    Buy Plasenta
  </a>
</div>

                </motion.nav>
            </div>


            <div className='flex justify-between max-lg:flex-col lg:items-center gap-12'>
                <div className='flex flex-col lg:w-1/2 '>
                <motion.h1 
  className="distinct text-[5rem] max-lg:text-[4rem] max-sm:text-[2.5rem] tracking-wider font-[900] leading-[1.1] text-white"
  animate={{ opacity: [1, 0.7, 1, 0.5, 1] }}
  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
>
  $Plasenta 
</motion.h1>



<motion.h3 
  className='text-sm pb-8 leading-6 text-white'
  initial={{ x: '30%', opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1.5, ease: 'easeOut' ,delay: 0.5 }}
  style={{ overflow: 'hidden' }}
>
  Before birth, there is Plasenta. The womb of chaos, the first meme, the origin of internet vibes. 
  $PLASENTA — the beginning of everything.

</motion.h3>


                    <motion.div className='flex max-sm:flex-col max-sm:gap-3 items-center rounded-md bg-[#1F4E3D] py-3 px-3 rounded-lg box border border-black justify-between mb-6'
                        initial={{ x: '30%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut',delay: 1 }}
                    >
                        <h3 className="max-sm:text-center max-sm:text-[0.75rem] text-white" >{text}</h3>
                        <button onClick={handleCopyText} className='bg-[#1F4E3D] text-white box rounded-md px-8 max-sm:px-4 text-center py-2 button uppercase border border-black' >{buttonText}</button>
                    </motion.div>

                    <motion.div className='flex gap-8'
                        initial={{ x: '30%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: 'easeOut' ,delay: 1.5 }}
                    >
<a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#1F4E3D] text-white uppercase text-sm tracking-wide rounded-md px-6 py-2 border border-black transition duration-300 hover:scale-105 hover:bg-[#2E6B52] animate-chaos flex items-center gap-2"
>
  Dexscreener 🧪
</a>

<a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#1F4E3D] text-white uppercase text-sm tracking-wide rounded-md px-6 py-2 border border-black transition duration-300 hover:scale-105 hover:bg-[#2E6B52] animate-chaos flex items-center gap-2"
>
  Buy Now 🚀
</a>

<a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#1F4E3D] text-white uppercase text-sm tracking-wide rounded-md px-6 py-2 border border-black transition duration-300 hover:scale-105 hover:bg-[#2E6B52] animate-chaos flex items-center gap-2"
>
  Join The Chaos 🌀
</a>

                    </motion.div>
                </div>

                <motion.div
                className="max-lg:flex max-lg:justify-center"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                style={{ overflow: 'hidden' }} // Ensure no overflow issues
            >
                    <img className='' src={plasentaImage} alt="plasenta" />
                </motion.div>
            </div>    
        </div>

        {/* === TOKENOMICS (Compact & Neat) ===
<section id="tokenomics" className="mx-24 max-lg:mx-12 max-sm:mx-8 my-16 text-center">
  <h2 className="text-3xl font-bold text-white mb-8 tracking-wide">
    TOKENOMICS
  </h2>

  <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
    <div className="bg-[#1F4E3D] text-white font-semibold py-6 px-6 rounded-md border border-black shadow">
      1B TOTAL SUPPLY  
      <p className="text-sm text-white/70 mt-1">Fixed and fair, no hidden mint</p>
    </div>
    <div className="bg-[#1F4E3D] text-white font-semibold py-6 px-6 rounded-md border border-black shadow">
      LP BURNED  
      <p className="text-sm text-white/70 mt-1">Liquidity permanently locked</p>
    </div>
    <div className="bg-[#1F4E3D] text-white font-semibold py-6 px-6 rounded-md border border-black shadow">
      NO TAXES  
      <p className="text-sm text-white/70 mt-1">0% buy/sell, trade freely</p>
    </div>
    <div className="bg-[#1F4E3D] text-white font-semibold py-6 px-6 rounded-md border border-black shadow">
      OWNERSHIP RENOUNCED  
      <p className="text-sm text-white/70 mt-1">Fully community-driven</p>
    </div>
  </div>
</section> */}

        
        <div className="plasenta flex gap-10 px-6  bg-[#1F4E3D] mb-6 py-4 ">
            <div className=' flex gap-10  items-center  plasenta-slide '>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p> 
            </div>

            <div className=' flex gap-10 items-center plasenta-slide '>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p>
                <p className='font-bold text-white tracking-wider'>#PLASENTA</p> 
            </div>
        </div>

        </div>
    )
}

export default HeroPage;
