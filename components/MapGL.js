import Map from 'react-map-gl';



function MapGS() {
	
	const [viewport,setViewport] = React.useState({
	latitude: 40.717,
	longitude: -73.977,
	zoom: 12.10,
	})
	
    return (
		<Map 
			style={{width: 800, height: 500}}
			mapStyle='mapbox://styles/amarican/cl4k4nurg000k14mwqioog1rm'
			mapboxApiAccessToken={process.env.mapbox_key}
			{...viewport}
		/ >	
		
	
	)
    
}

export default Map;