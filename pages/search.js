import { useRouter } from 'next/dist/client/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { format, compareAsc } from 'date-fns';

function Search() {
const router = useRouter();

const{ location, startDate, endDate, time1, time2, noOfGuests } = router.query;

const formStartDate= format(new Date(startDate), 'dd.MM.yyyy');
const formEndDate= format(new Date(endDate), 'dd.MM.yyyy');
const formTime1= format(new Date(time1), 'HH:mm:ss');
const formTime2= format(new Date(time2), 'HH:mm:ss');


    return (
        <div>
            <Header />
			
			<main className='flex'>
				<section className='flex-grow pt-14 px-5'>
					<p className='text-xs'>300+ Venues from {formStartDate} at {formTime1} to {formEndDate} at {formTime2} for {noOfGuests} Event Visitors</p>
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