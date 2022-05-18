import Image from 'next/image'

function LargeCard({img, title, description, buttonText }) {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-9 m-w-[300px]'>
                <img src='https://i.ibb.co/JC4VsQP/eventoutdoorgateways.jpg' 
                className='fill cover rounded-2xl'
                img='https://i.ibb.co/JC4VsQP/eventoutdoorgateways.jpg'
                />
        </div>
        <div className='absolute top-10 sm:top-28 md:top-38 lg:top-38  left-12'>
          <h3 className='text-4xl mb-3 width-64 font-semibold py-8'>{title='Design your outdoor event'}</h3>
          <p>{description='MBOSS.US with your Wishlist'}</p>
          <button className='text-sm text-white bg-gray-900 px-4 py2 rounded-lg mt-5'>{buttonText='Get inspired'}</button>
          </div>
        </section>
        
    )      
}

export default LargeCard