import Header from '../components/Header';
import Footer from '../components/Footer';

function Search() {
    return (
        <div>
            <Header />
			
			<main className='flex'>
				<section className='flex-grow pt-14 px-5'>
					<p className='text-xs'>300plus Venues for 500 Event Visitors</p>
					<h1 className='text-3xl font-semibold mt-2 mb-6'>Stay in Adventurous Castle on the Island</h1>
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
						<p className='searchsitemenubutton'>Customer's review</p>
						</td>
						<td>
						<p className='searchsitemenubutton'>More Filters</p>
						</td>
					</tr>
					
				
				</ section>
			</main>
			
			
			
			<Footer />
        </div>
    );
}

export default Search; 