import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markers from "../../services/tools/markerCoordinates.json";
import iconMarker from "../../public/images/iconMarker.png";

function Map() {
  const icon = new Icon({
    iconUrl: iconMarker,
    iconSize: [38, 38],
  });

  const [userLocation, setUserLocation] = useState(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting user location: ", error);
        },
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 0 }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <MapContainer
        center={[43.605856, 1.443761]}
        zoom={14}
        style={{ height: "50dvh", width: "90dvw" }}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png" />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.geocode} icon={icon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
        {userLocation && (
          <Marker
            position={[userLocation.latitude, userLocation.longitude]}
            icon={icon}
          >
            <Popup>User location</Popup>
          </Marker>
        )}
      </MapContainer>
      <button type="button" onClick={getUserLocation}>
        Get user location
      </button>
    </div>
  );
}

export default Map;
