
import Image from 'next/image';
import { GlobeAltIcon, MenuIcon, SearchIcon, UsersIcon, UserCircleIcon } from '@heroicons/react/solid'
import React, { useState, useRef, useCallback } from 'react';
import ReactDom from 'react-dom';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/dist/client/router';
import { parseJSON } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';



function Header() {
	const utcDate = parseJSON('2022-05-30T15:00:00.000Z, America/New_York');
	const timeZone = 'Europe/Rome';
	const zonedTime = utcToZonedTime(utcDate, timeZone);
	const pattern = "EE, do MMM yyyy kk:mm:ss 'GMT+02:00'";
	const output = format(zonedTime, pattern, { timeZone: 'Europe/Rome' });
	console.log(output);
	console.log("Node version:", process.version)
	
	
	const [searchInput, setSearchInput] = useState();
	const [time1, setTime1] = useState(new Date(utcDate));
	const [time2, setTime2] = useState(new Date(utcDate));
	const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(addDays(new Date(), 1));
    const [noOfGuests, setNoOfGuests] = useState(1);
	const router = useRouter();

    const handleSelect= (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    };
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    const resetInput= () => {
		setSearchInput();
	};
	
	const search = () => {
		router.push({
			pathname: '/search',
			query: {
				location: searchInput,
				startDate: startDate.toDateString(),
				endDate: endDate.toDateString(),
				noOfGuests,
                time1: time1.toISOString(),
				time2: time2.toISOString(),
			},
		});
	};

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 
         bg-white shadow-md p-5 md:px-10">
            
            {/*Left - Logo*/}
            <div 
			onClick={() => router.push('/')} 
			className='relative flex items-center h-10 cursor-pointer 
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
                    className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-500' 
					type='text' 
					placeholder= 'Search Location'
				/>
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
				editableDateInputs={true}
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
			<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Stack spacing={3}>
			<TimePicker
				ampm={false}
				openTo='hours'
				views={['hours', 'minutes', 'seconds']}
				inputFormat='HH:mm:ss'
				mask='_:_:_'
				value={time1}
				label="Event Start Time"
				onChange={(newValue) => {
				setTime1(newValue);
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
			<TimePicker
				ampm={false}
				openTo='hours'
				views={['hours', 'minutes', 'seconds']}
				inputFormat='HH:mm:ss'
				mask='_:_:_'
				value={time2}
				label="Event End Time"
				onChange={(newValue) => {
				setTime2(newValue);
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
				</Stack>
				</LocalizationProvider>
			</div>
				<div className='flex'>
					<button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
					<button onClick={search} className='flex-grow text-red-400'>Search</button>
				</div>
            </div>
           
			
			)}
        </header>
    );


	
}
            
export default Header;