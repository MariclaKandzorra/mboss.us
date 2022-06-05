import { useRouter } from 'next/dist/client/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { format, compareAsc, parseISO } from 'date-fns';
import { formatInTimeZone, utcToZonedTime } from 'date-fns-tz'

function Search() {
const router = useRouter();
const{ location, startDate, endDate, time1, time2, noOfGuests } = router.query;

const {format} = require('date-fns');
const formStartDate = format(new Date(startDate), 'EE, do MMM yyyy')
const formEndDate = format(new Date(endDate), 'EE, do MMM yyyy');
const formTime1 = format(new Date(time1),'kk:mm:ss');
const formTime2 = format(new Date(time2),'kk:mm:ss');
const formTzTime1 = utcToZonedTime((time1), 'Europe/Rome', 'kk:mm:ss');
const formTzTime2 = utcToZonedTime((time2), 'Europe/Rome', 'kk:mm:ss');
const parsedTime = parseISO(time1, time2)
const parsedDate = parseISO(startDate, endDate)
const formRange = 'from ' + formStartDate + ' at ' + formTime1 + ' to ' + formEndDate + ' at ' + formTime2 + ' with ' + noOfGuests; 

console.log(formStartDate);
console.log(formEndDate);
console.log(formTime1);
console.log(formTime2);
console.log(formTzTime1);
console.log(formTzTime2);
console.log(formRange);
console.log(parsedTime);



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
					
				
				</ section>
			</main>
			<Footer />
        </div>
    )
}

export default Search; 