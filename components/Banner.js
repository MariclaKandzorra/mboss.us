import Image from 'next/image'
import hero from '../public/hero.gif'


function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h=[700px]'>
            <Image 
                src={hero}
                layout='fill'
                objectFit='cover'
            />

         <div className='absolute top-1/3 w-full text-center'>
             <p className='text-3xl text-500 font-semibold 
             pb-4'>Design your Event and MBOSS.US.</p> 
             <button className='text-purple-500 bg-white px-10 py-5 
             shadow-md rounded-full font-bold my-3 hover:shadow-xl 
             active:scale-90 duration-150'>I get started</button>
         </div>    
        </div>
    );
}
      
export default Banner;
