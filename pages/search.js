import { useRouter } from 'next/dist/client/router';
import Header, { utcDate } from '../components/Header';
import Footer from '../components/Footer';
import { format, compareAsc, parseISO } from 'date-fns';
import { formatInTimeZone, zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz';
import { parseJSON } from 'date-fns';
import InfoCard from '../components/InfoCard';

function Search({ searchResults }) {
	const router = useRouter();
	
	console.log(searchResults);
	
	const{ location, startDate, endDate, time1, time2, noOfGuests } = router.query;
	
	const {format} = require('date-fns');
	const utcDate = parseJSON('2022-05-30T15:00:00.000Z, America/New_York');
	const timeZone = 'Europe/Rome';
	const zonedTime = utcToZonedTime(utcDate, timeZone);
	const pattern = "EE, do MMM yyyy kk:mm:ss 'GMT+02:00'";
	const output = format(zonedTime, pattern, { timeZone: 'Europe/Rome' });
	
	
	const formStartDate = format(new Date(startDate), 'EE, do MMM yyyy');
	const formEndDate = format(new Date(endDate), 'EE, do MMM yyyy');
	const formTime1 = format(new Date(time1),'kk:mm:ss');
	const formTime2 = format(new Date(time2),'kk:mm:ss');
	const formTzTime1 = utcToZonedTime((time1), 'Europe/Rome', 'kk:mm:ss');
	const formTzTime2 = utcToZonedTime((time2), 'Europe/Rome', 'kk:mm:ss');

	const formRange = 'from ' + formStartDate + ' at ' + formTime1 + ' to ' + formEndDate + ' at ' + formTime2 + ' with ' + noOfGuests; 

	console.log(formStartDate);
	console.log(formEndDate);
	console.log(formTime1);
	console.log(formTime2);
	console.log(formTzTime1);
	console.log(formTzTime2);
	console.log(formRange);
	console.log(utcDate);
	console.log(output);
	console.log("Node version:", process.version);



    return (
        <div>
            <Header />
			
			<main className='flex'>
				<section className='flex-grow pt-14 px-5'>
					<p className='text-xs'>300+ Venues for the time {formRange} Event Visitors.</p>
					<h1 className='text-3xl font-semibold mt-2 mb-6'>Stay in {location}</h1>
					<tr className='hidden md:inline-flex lg:inline-flex m-8 mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
						<td>
						<p className='searchsitemenubutton'>Cancellation Flexibility</p>
						</td>
						<td>
						<p className='searchsitemenubutton'>Type of Place</p>
						</td>
						<td>
						<p className='searchsitemenubutton'>Price</p>
						</td>
						<td>
						<p className='searchsitemenubutton'>Size</p>
						</td>
						<td>
						<p className='searchsitemenubutton'>Number of Visitors</p>
						</td>
						<td>
						<p className='searchsitemenubutton'>Customer&apos;s review</p>
						</td>
						<td>
						<p className='searchsitemenubutton'>More Filters</p>
						</td>
					</tr>
					
					<div>
					
					</div>
					
					{ searchResults?.map(({ img, location, title, description, star, price, total }) => (
					
						<InfoCard 
							key={img}
							img={img}
							location={location}
							title={title}
							description={description}
							star={star} 
							price={price}
							total={total}
						/>
					))}
				</ section>
			  </main>
			<Footer />
        </div>
    )
}

export default Search; 

export async function getServerSideProps() {
	const searchResults = await fetch("https://jsonkeeper.com/b/0X4Y").then(res => res.json());

	return {
		props: {
			searchResults, 
		}
	};
}