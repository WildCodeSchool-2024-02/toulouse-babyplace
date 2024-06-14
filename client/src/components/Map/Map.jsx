import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import markers from "../../services/tools/markerCoordinates.json";

function Map() {
  const icon = new Icon({
    iconUrl: "./src/public/images/iconMarker.png",
    iconSize: [38, 38],
  });

  return (
    <div>
      <MapContainer
        center={[43.605856, 1.443761]}
        zoom={14}
        style={{ height: "100dvh" }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png" />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.geocode} icon={icon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
