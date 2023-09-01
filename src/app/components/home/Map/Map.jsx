"use client"

// React
import { useCallback, useEffect, useRef, useState } from "react";
// Google maps
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 50.443185,
    lng: 10.440979
};

const markers = [
    {
        id: 1,
        name: "Döner Center Mieste",
        position: { lat: 50.443185, lng: 10.440979 }
    }
]

export default function MapSection() {

    return (
        <section className={"w-full"}>
            <div className={"flex flex-col gap-8 text-center py-28 px-6 sm:px-10"}>
                <div className={"flex flex-col gap-5"}>
                    <div className={"font-detail text-xl text-primary"}>Standort</div>
                    <h2 className={"text-4xl"}>Erkunde unseren Standort</h2>
                    <i className="fa-light fa-location-dot text-xl text-primary"></i>
                    <p className={"md:w-1/2 mx-auto text-neutral-600"}>Finde unser Restaurant und genieße eine Vielzahl von Geschmacksrichtungen an einem Ort. Unsere Karte wird dich zu uns führen, wo du köstliche Optionen genießen kannst.</p>
                </div>
                <div className={"flex flex-col gap-5 text-lg"}>
                    <div className={"font-detail text-xl text-primary"}>Öffnungszeiten</div>
                    <div className={"flex flex-col"}>
                        <div><span className={"font-semibold"}>Montag-Samstag</span> 10:00 - 21:00 Uhr</div>
                        <div><span className={"font-semibold"}>Sonntag</span> 11:00 - 21:00 Uhr</div>
                    </div>
                </div>
            </div>
            <Map />
        </section>
    )
}

function Map() {

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
            onClick={() => setActiveMarker(1)}
        >
            {markers.map(({ id, name, position }) => (
                <Marker
                    key={id}
                    position={position}
                >
                    {activeMarker === id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                            <div>{name}</div>
                        </InfoWindow>
                    ) : null}
                </Marker>
            ))}
            <></>
        </GoogleMap>
    ) : <></>
}