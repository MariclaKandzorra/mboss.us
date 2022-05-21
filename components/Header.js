import Image from 'next/image';
import { GlobeAltIcon, MenuIcon, SearchIcon, UsersIcon, UserCircleIcon } from '@heroicons/react/solid'
import React, { useState} from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';

function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(addDays(new Date(), 1));
    const [noOfGuests, setNoOfGuests] = useState(1);

    const handleSelect= (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    };
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 
         bg-white shadow-md p-5 md:px-10">
             

            {/*Left - Logo*/}
            <div className='relative flex items-center h-10 cursor-pointer 
            my-auto hover:shadow-xl active:scale-90 duration-150'>   
            {/* go to flexboxfroggy.com and play! */}
                <Image
                  src='https://i.ibb.co/CM7x3FX/1628329259246.png' 
                  layout='fill'
                  objectFit='contain'
                  objectPosition='left'
                  /> {/*You have to register the image url into the next.config.js*/}
                
            </div>

            {/*Middle - Search box heroicons.com npm install @heroicons/react*/}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500' type='text' placeholder='Start your search'/>
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 md:mx-2 shadow-md hover:shadow-xl active:scale-90 duration-150' />
            </div>

            {/*Right*/}
            <div className='flex items-center space-x-4 justify-end
            text-gray-500'>
                <p className='hidden md:inline-flex'>BECOME AN EVENT-DESIGNER</p>
                <GlobeAltIcon className='h-5 hover:shadow-xl active:scale-90 duration-150'/>
                <div className='flex items-center space-x-2 border-2
                p-2 rounded-full shadow-md hover:shadow-xl active:scale-90 duration-150'>
                <MenuIcon className='h-5' />
                <UserCircleIcon className='h-5' />
                </div>
            </div>

            {searchInput && (
            <div className='flex flex-col col-span-3 mx-auto'>
                <DateRangePicker 
                selected={startDate}
                onChange={(handleSelect)}
                ranges={[selectionRange]} 
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                
                />               
            <div clasName='flex border-b mb-4'>    
            <td className='flex flex-grow justify-between flex flex-row-reverse space-x-4 space-x-reverse'>
                <tr className='flex justify-between'>                
                <h2 className=''>Number of Guests </h2>    
                </tr>                                            
                <tr className=''>
                <UsersIcon className='h-6' />
                <input 
                    value={noOfGuests}
                    onChange={(e) => setNoOfGuests(e.target.value)}
                    type='number'
                    min={1}
                    className='w-13 pl-2 text-lg outline-none text-red-400'
                />
                </tr>
                </td>
            </div>
            <div>

            </div>
            </div>
            )}
        </header>
    );
}
            
export default Header;

