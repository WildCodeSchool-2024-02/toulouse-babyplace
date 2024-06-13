import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markers from "../../services/tools/markerCoordinates.json";

function Map() {
  return (
    <div>
      <MapContainer
        center={[43.605856, 1.443761]}
        zoom={14}
        style={{ height: "100dvh" }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png" />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.geocode}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
