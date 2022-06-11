import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/outline'

function InfoCard({img, location, title, description, star, price, total }) {
    return (
        <div>
			{/*Left*/}
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 '>
        
                <Image src={img} 
                    layout='fill'
                    objectFit='cover'
					className='rounded-xl'
                />
            </div>
			
			{/*Right*/}
            <div>
                <div className='flex justify-between'>
                    <p>{location}</p>
                    <HeartIcon className='h-7 cursor-pointer' />                
				</div>
            </div>
        </div>

    );
}
      
export default InfoCard;

