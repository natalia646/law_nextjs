'use client'
import { useEffect } from 'react';
import Script from 'next/script';

const GoogleMap = () => {
  useEffect(() => {
    const initMap = async () => {
      // The location of Uluru
      const position = { lat: -25.344, lng: 131.031 };

      // @ts-ignore
      const { Map } = await google.maps.importLibrary('maps');
      const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

      // The map, centered at Uluru
      const map = new Map(
        document.getElementById('map'),
        {
          zoom: 4,
          center: position,
          mapId: 'DEMO_MAP_ID',
        }
      );

      // The marker, positioned at Uluru
      new AdvancedMarkerElement({
        map: map,
        position: position,
        title: 'Uluru'
      });
    };

    if (window.google && window.google.maps) {
      initMap();
    } else {
      window.initMap = initMap;
    }
  }, []);

  return (
    <>
      <h3>My Google Maps Demo</h3>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>

      <Script
        id="google-maps-loader"
        strategy="afterInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBBqKJDRYsN0FFAdJhGSdLxX3rI9Cl84_8&callback=initMap&v=weekly`}
      />
    </>
  );
};

export default GoogleMap;
