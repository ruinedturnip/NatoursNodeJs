/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic29ub3JhbnN0dWRpb3MiLCJhIjoiY2xoZTJmMTd1MHNvYzNrbGszczY3ZXd6OSJ9.CpfUpuYNfGHk_Y5Lk8Zaxw';

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/sonoranstudios/clhe3267y025o01qm9fm46fqj',
    scrollZoom: false,
    //   center: [-74.5, 40],
    //   //   center: [-74.5, 40], // starting position [lng, lat]
    //   zoom: 9,
    //   interative: false, // style URL
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';
    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 50,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //   Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });

  console.log('hello world!');
};
