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
                paint: { "background-color": "#f7f7f7" },
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

        const geocoder = new MaplibreGeocoder(geocoderApi, {
          maplibregl,
        });
        map.addControl(geocoder);

        geocoder.on("result", (e) => {
          const location = e.result.place_name;
          emit("update:geocode", location);
        });

        const geocoderInput = document.querySelector(".maplibregl-geocoder");
        if (geocoderInput) {
          geocoderInput.style.position = "absolute";
          geocoderInput.style.top = "10px";
          geocoderInput.style.left = "50%";
          geocoderInput.style.transform = "translateX(-50%)";
          geocoderInput.style.zIndex = "1";
          geocoderInput.style.width = "280px";
        }
      }
    });
  },
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px; /* Adjusted for a smaller size */
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#map {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .map-container {
    height: 300px; /* Further adjustment for smaller screens */
  }
}
</style>
