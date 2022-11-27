import { Icon, LatLngTuple } from 'leaflet';
import { useEffect } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import iconUrl from '/assets/icon-location.svg';

interface MapProps {
    center: LatLngTuple;
    zoom: number;
}

function MyComponent({center, zoom}: MapProps) {
    const map = useMap();
  
    useEffect(() => {
      map.setView(center);
    }, center);
  
    useEffect(() => {
      map.setZoom(zoom);
    }, [zoom]);

    return null;
  }


export default function Map({center, zoom}: MapProps) {
    const newIcon = new Icon({
        iconUrl
    });

    return (
        <div className='absolute left-0 top-[35%] z-10'>
            <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{ width: "100vw", height: "100vh" }}>
                <MyComponent center={center} zoom={zoom} />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                <Marker position={center} icon={newIcon} />
            </MapContainer>
        </div>
    )
}