<template>
    <div ref="mapContainer" style="width: 100%; height: 500px; position: relative;">
      <!-- Geocoder Container -->
      <div id="geocoder" class="geocoder-container"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import "maplibre-gl/dist/maplibre-gl.css";
  import maplibregl from "maplibre-gl";
  import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
  import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";
  
  // Ref for the map container
  const mapContainer = ref<HTMLDivElement | null>(null);
  
  // State to store selected location
  const selectedLocation = ref<{ lat: number; lng: number } | null>(null);
  
  // Function to save the selected location to the database
  const saveLocationToDB = async (location: { lat: number; lng: number }) => {
    console.log("Saving location to DB:", location);
    // Replace this with your API call to save the location
  };
  
  onMounted(() => {
    // Initialize the map
    const map = new maplibregl.Map({
      container: mapContainer.value as HTMLDivElement,
      style: {
        version: 8,
        name: "Minimalist",
        sources: {
          "raster-tiles": {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
          },
        },
        layers: [
          {
            id: "base-layer",
            type: "raster",
            source: "raster-tiles",
          },
        ],
      },
      center: [0, 51],
      zoom: 4,
    });
  
    // Geocoder API
    const geocoderApi = {
      forwardGeocode: async (config: { query: string }) => {
        const features = [];
        try {
          const request = `https://api.opencagedata.com/geosearch?q=${config.query}`;
          const response = await fetch(request, {
            headers: {
              "OpenCage-Geosearch-Key": "oc_gs_codependemo74gzf48ew7fdvs91nba",
            },
          });
          const json = await response.json();
          for (const feature of json.results) {
            const point = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [feature.geometry.lng, feature.geometry.lat],
              },
              place_name: feature.formatted,
              properties: feature.properties,
              text: feature.formatted,
              place_type: ["place"],
            };
            features.push(point);
          }
        } catch (error) {
          console.error("Error fetching geocoder results:", error);
        }
        return { features };
      },
    };
  
    // Create the Maplibre Geocoder and attach to custom container
    const geocoder = new MaplibreGeocoder(geocoderApi, {
      maplibregl: maplibregl,
      debounceSearch: 300,
      showResultsWhileTyping: true,
    });
  
    geocoder.on("result", (event) => {
      const { geometry } = event.result;
      selectedLocation.value = {
        lat: geometry.coordinates[1],
        lng: geometry.coordinates[0],
      };
      console.log("Selected Location:", selectedLocation.value);
      saveLocationToDB(selectedLocation.value!);
    });
  
    // Attach geocoder to the custom container
    document.getElementById("geocoder")!.appendChild(geocoder.onAdd(map));
  });
  </script>
  
  <style scoped>
  /* Center the geocoder input in the middle of the map */
  .geocoder-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 90%;
    max-width: 400px;
  }
  
  #geocoder input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    background-color: white;
    color: black;
  }
  
  /* Adjust for mobile devices */
  @media (max-width: 768px) {
    .geocoder-container {
      width: 95%;
    }
  
    #geocoder input {
      font-size: 12px;
      padding: 8px;
    }
  }
  </style>
  