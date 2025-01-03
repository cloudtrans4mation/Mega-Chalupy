<template>
    <div class="map-container">
      <div id="map"></div>
    </div>
  </template>
  
  <script>
  import { onMounted, defineEmits } from "vue";
  
  export default {
    name: "GeocodeMap",
    emits: ["update:geocode"], // Define the event to emit geocode value
    setup(_, { emit }) {
      onMounted(() => {
        // Load Maplibre and Geocoder styles
        const loadStyles = (href) => {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = href;
          document.head.appendChild(link);
        };
  
        loadStyles("https://unpkg.com/maplibre-gl@5.0.0/dist/maplibre-gl.css");
        loadStyles(
          "https://unpkg.com/@maplibre/maplibre-gl-geocoder@1.5.0/dist/maplibre-gl-geocoder.css"
        );
  
        const maplibreScript = document.createElement("script");
        maplibreScript.src = "https://unpkg.com/maplibre-gl@5.0.0/dist/maplibre-gl.js";
        maplibreScript.onload = () => {
          const geocoderScript = document.createElement("script");
          geocoderScript.src =
            "https://unpkg.com/@maplibre/maplibre-gl-geocoder@1.5.0/dist/maplibre-gl-geocoder.min.js";
          geocoderScript.onload = () => {
            initializeMap();
          };
          document.head.appendChild(geocoderScript);
        };
        document.head.appendChild(maplibreScript);
  
        function initializeMap() {
          // Initialize the map
          const map = new maplibregl.Map({
            container: "map",
            style: {
              version: 8,
              sources: {
                "raster-tiles": {
                  type: "raster",
                  tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
                  tileSize: 256,
                  minzoom: 0,
                  maxzoom: 19,
                },
              },
              layers: [
                {
                  id: "background",
                  type: "background",
                  paint: { "background-color": "#e0dfdf" },
                },
                {
                  id: "simple-tiles",
                  type: "raster",
                  source: "raster-tiles",
                },
              ],
            },
            center: [0, 0],
            zoom: 2,
          });
  
          // Geocoder API configuration
          const geocoderApi = {
            forwardGeocode: async (config) => {
              const features = [];
              try {
                const response = await fetch(
                  `https://nominatim.openstreetmap.org/search?q=${config.query}&format=geojson&polygon_geojson=1&addressdetails=1`
                );
                const geojson = await response.json();
                geojson.features.forEach((feature) => {
                  const center = [
                    feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
                    feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2,
                  ];
                  features.push({
                    type: "Feature",
                    geometry: { type: "Point", coordinates: center },
                    place_name: feature.properties.display_name,
                    properties: feature.properties,
                    text: feature.properties.display_name,
                    place_type: ["place"],
                    center,
                  });
                });
              } catch (error) {
                console.error("Geocoding failed:", error);
              }
              return { features };
            },
          };
  
          // Add geocoder control to the map
          const geocoder = new MaplibreGeocoder(geocoderApi, {
            maplibregl,
          });
          map.addControl(geocoder);
  
          // Emit geocode value when the user selects a result
          geocoder.on("result", (e) => {
            const location = e.result.place_name;
            emit("update:geocode", location);
          });
  
          // Style the geocoder input field to center it
          const geocoderInput = document.querySelector(".maplibregl-geocoder");
          if (geocoderInput) {
            geocoderInput.style.position = "absolute";
            geocoderInput.style.top = "20px";
            geocoderInput.style.left = "50%";
            geocoderInput.style.transform = "translateX(-50%)";
            geocoderInput.style.zIndex = "1";
            geocoderInput.style.width = "300px";
          }
        }
      });
    },
  };
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  
  #map {
    width: 100%;
    height: 100%;
  }
  </style>
  