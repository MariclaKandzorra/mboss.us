import React from 'react';
import ReactDom from 'react-dom';
import Map from '@arcgis/core/Map';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Directions from '@arcgis/core/idgets/Directions';
import Search from '@arcgis/core/widgets/Search';
import Home from '@arcgis/core/widgets/Home';
import Legend from '@arcgis/core/widgets/Legend';
import Expand from '@arcgis/core/widgets/Expand';
import Config from '@arcgis/core/core/config';

function MapGL({ Map, GeoJSONLayer, MapView, FeatureLayer, Directions, Search, Home, Legend, Expand, Config }) {
            // If GeoJSON files are not on the same domain as your website, a CORS enabled server
            // or a proxy is required.
            const url = 'VenuesNYC.geojson'

            // Paste the url into a browser's address bar to download and view the attributes
            // in the GeoJSON file. These attributes include:
            // * mag - magnitude
            // * type - earthquake or other event such as nuclear test
            // * place - location of the event
            // * time - the time of the event
            // Use the Arcade Date() function to format time field into a human-readable format

	

            const clusterConfig = {
                type: "cluster",
                clusterRadius: "100px",
                // {cluster_count} is an aggregate field containing
                // the number of features comprised by the cluster
                popupTemplate: {
                    content: "This cluster represents {cluster_count} venues in Frankfurt am Main.",
                    fieldInfos: [{
                        fieldName: "cluster_count",
                        format: {
                            places: 0,
                            digitSeparator: true
                        }
                    }]
                },
                clusterMinSize: "24px",
                clusterMaxSize: "60px",
                labelingInfo: [{
                    deconflictionStrategy: "none",
                    labelExpressionInfo: {
                        expression: "Text($feature.cluster_count, '#,###')"
                    },
                    symbol: {
                        type: "text",
                        color: "#004a5d",
                        font: {
                            weight: "bold",
                            family: "Noto Sans",
                            size: "12px"
                        }
                    },
                    labelPlacement: "center-center"
                }]
            };
			
			

            const geojsonLayer = new GeoJSONLayer({
                title: "Frankfurt - Venues",
                url: url,
                copyright: "Maricla Kandzorra",
                featureReduction: clusterConfig,
                popupTemplate: {
                    title: "Venues",
                    content: "<div class='mr-5 center'><p class='text-red-500 font-bold font-sans text-xl text-center'>{title}</p><br><br><div class='flex items-center cursor-pointer my-auto hover:shadow-xl active:scale-90 duration-150'><img src={img} class='rounded-xl mb-5 fill cover'><br></div><p class='text-justify text-gray-400 h-1'>Location:</p><p class='text-justify text-gray-400'>{Location},</p><br><p class='text-justify text-gray-400 h-1'>Address:</p><p class='text-justify text-gray-400'> {address},</p><p class='text-justify text-gray-400 h-1'> Description:</p><p class='text-justify text-gray-400'> {description},</p><p class='text-justify text-gray-400 h-1'>Stars:</p><p class='h-5 w-5 text-yellow-500' ><i class='fa-regular fa-star'></i>{star}</p></div>", 
					fieldInfos: [{
                        fieldName: "", 
                        format: {
                            dateFormat: "short-date-short-time"
                        }
                    }]
                },
                renderer: {
                    type: "simple",
                    field: "mag",
                    symbol: {
                        type: "simple-marker",
                        size: 4,
                        color: "#69dcff",
                        outline: {
                            color: "rgba(0, 139, 174, 0.5)",
                            width: 5
                        }
                    }
                }
            });


			const map = new Map({
                basemap: "hybrid",
                ground: "world-elevation",
                layers: [geojsonLayer] 
            });

            const view = new MapView({
                container: "viewDiv",
                center: [-73.983, 40.725],
                zoom: 13,
                map: map
            });

			
			const searchWidget = new Search({
				view: view,
				allPlaceholder: "District or Senator",
				includeDefaultSources: false,
				sources: [
				
				{
				name: "ArcGIS World Geocoding Service",
				placeholder: "Search Your Event Service",
				singleLineFieldName: "SingleLine",
				apiKey: "AAPK516826240f974fa0a770431e5ec07799SrunNw-JWfu8xy9rhuEdeNrwm7GGkLKtL7ntNWCIdE_uDNMCvqEMhp8kDbU9mICg",
				locator: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer",
				}
				]
			});

        

        // Add the search widget to the top left corner of the view
        view.ui.add(searchWidget, {
          position: "top-right"
        });
      

            const baseLayer = new FeatureLayer({
                portalItem: {
                    id: "2b93b06dc0dc4e809d3c8db5cb96ba69"
                },
                legendEnabled: true,
                popupEnabled: false,
                renderer: {
                    type: "simple",
                    symbol: {
                        type: "simple-fill",
                        color: [252, 250, 100],
                        outline: {
                            color: [0, 139, 174, 0.5],
                            width: 0.5
                        }
                    }
                },
                spatialReference: {
                    wkid: 4326
                }
            });

            view.ui.add(
                new Home({
                    view: view
                }),
                "top-left"
            );

            const legend = new Legend({
                view: view,
                container: "legendDiv"
            });

            const infoDiv = document.getElementById("infoDiv");
            view.ui.add(
                new Expand({
                    view: view,
                    content: infoDiv,
                    expandIconClass: "esri-icon-layer-list",
                    expanded: false
                }),
                "top-left"
            );

            const toggleButton = document.getElementById("cluster");

            // To turn off clustering on a layer, set the
            // featureReduction property to null
            toggleButton.addEventListener("click", function() {
                let fr = layer.featureReduction;
                layer.featureReduction =
                    fr && fr.type === "cluster" ? null : clusterConfig;
                toggleButton.innerText =
                    toggleButton.innerText === "Enable Clustering" ? "Disable Clustering" : "Enable Clustering";
            });
        
	
			const visibleMap = <div id='viewDiv'></div>;
			const clusterInfo = <div id='infoDiv' class='esri-widget'><button id='cluster' class='esri-button'>Disable Clustering</button><div id='legendDiv'></div></div>
			
    return ({ visibleMap, clusterInfo });
    
}

export default MapGL;