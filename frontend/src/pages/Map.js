import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issues with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const defaultCenter = [33.5731, -7.5898]; // Coordinates for Casablanca

function Map() {

    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentPosition([position.coords.latitude, position.coords.longitude]);
                },
                () => {
                    console.error('Error: The Geolocation service failed.');
                    setCurrentPosition(defaultCenter); // fallback to default center if geolocation fails
                }
            );
        } else {
            console.error("Error: Your browser doesn't support geolocation.");
            setCurrentPosition(defaultCenter); // fallback to default center if geolocation is not supported
        }
    }, []);

    if (!currentPosition) {
        return <div><strong>Loading...</strong></div>; // show a loading message until the position is fetched
    }

    return (
        <div style={{ marginTop: '' }} className="">
            {/*<div className="avant">
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe title="map" id="gmap_canvas" src="https://maps.google.com/maps?q=casablanca%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style={{height:'1000px'}}></iframe>
                    </div> 
                </div>
    </div>*/}

            <MapContainer center={currentPosition} zoom={13} style={{ height: '1000px', width: '100%' }} zoomControl={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={currentPosition}>
                    <Popup>Location found.</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map