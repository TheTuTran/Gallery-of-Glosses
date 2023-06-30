import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

const ICON = icon({
  iconUrl: "/images/marker.png",
  iconSize: [32, 32],
});
import "leaflet/dist/leaflet.css";
import "@/app/globals.css";

interface ReactMapProps {}

const ReactMap: React.FC<ReactMapProps> = () => {
  return (
    <div className="mapContainer">
      <MapContainer
        center={[51.253063, -0.324896]}
        zoom={13}
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> | &copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
          tileSize={512}
          zoomOffset={-1}
        />
        <Marker position={[51.253063, -0.324896]} icon={ICON}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ReactMap;
