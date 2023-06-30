"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngTuple, icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "@/app/globals.css";
import { useState } from "react";

interface ManuscriptMapProps {
  yearLow: number;
  yearHigh: number;
  manuscripts: any;
  handleMarkerClick: (manuscripts: any[]) => void;
}

interface ChangeViewProps {
  center: LatLngTuple;
}

const ManuscriptMap: React.FC<ManuscriptMapProps> = ({
  yearLow,
  yearHigh,
  manuscripts,
  handleMarkerClick,
}) => {
  const originCoordinates: Record<string, number[]> = {
    "Saint-Amand": [50.4472, 3.4312],
    Laon: [49.5641, 3.6199],
    "Buildwas Abbey": [52.6311, -2.4943],
    Chartres: [48.4468, 1.4983],
    Paris: [48.8566, 2.3522],
    Hereford: [52.0567, -2.7156],
    Clairvaux: [48.1785, 4.7441],
    York: [53.9583, -1.0803],
    "Bury St Edmunds": [52.2429, 0.7143],
    "Saint Gall": [47.4223, 9.3748],
  };

  // initialize the map center to Laon
  const [mapCenter, setMapCenter] = useState<LatLngTuple>(
    originCoordinates["Laon"] as LatLngTuple
  );

  const ICON = icon({
    iconUrl: "/images/marker.png",
    iconSize: [32, 32],
  });

  const ChangeView: React.FC<ChangeViewProps> = ({ center }) => {
    const map = useMap();
    map.flyTo(center);
    return null;
  };

  // take out manuscripts without an origin
  const filteredManuscripts = manuscripts.filter(
    (manuscript: { origin: string }) => manuscript.origin !== ""
  );

  // sort manuscripts by their date
  const sortedManuscripts = filteredManuscripts.sort(
    (a: { date: string }, b: { date: string }) => {
      const dateA = parseInt(a.date);
      const dateB = parseInt(b.date);

      return dateA - dateB;
    }
  );

  const manuscriptsWithCoordinates = sortedManuscripts.map(
    (manuscript: { origin: string; city: string }) => {
      let origin = manuscript.origin;

      if (origin.includes("/")) {
        origin = origin.split("/")[0].trim();
      }
      if (origin.includes("(")) {
        origin = origin.split("(")[0].trim();
      }

      // If origin includes a question mark, use the part before it as the origin
      if (origin.includes("?")) {
        origin = origin.split("?")[0].trim();
      }

      // Look up the coordinates, and if not found, set a default value
      const coordinates = originCoordinates[origin] || [0, 0];

      return { ...manuscript, coordinates };
    }
  );

  const getManuscriptWithOrigin = (origin: string, coordinates: number[]) => {
    origin = origin.split("?")[0].trim();
    handleMarkerClick(
      manuscriptsWithCoordinates.filter((manuscript: { origin: string }) =>
        manuscript.origin.includes(origin)
      )
    );
    // update the map center to the clicked manuscript
    setMapCenter(coordinates as LatLngTuple);
  };

  const getManuscriptsWithSameOrigin = (origin: string) => {
    origin = origin.split("/")[0].trim();
    origin = origin.split("(")[0].trim();
    origin = origin.split("?")[0].trim();

    return manuscriptsWithCoordinates.filter(
      (manuscript: { date: number; origin: string }) =>
        manuscript.origin.includes(origin) &&
        manuscript.date >= yearLow &&
        manuscript.date <= yearHigh
    );
  };

  return (
    <div className="mapContainer">
      <MapContainer
        center={[50, 4]}
        zoom={5}
        style={{ width: "100%", height: "100vh" }}
      >
        <ChangeView center={mapCenter} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> | &copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
          tileSize={512}
          zoomOffset={-1}
        />
        {manuscriptsWithCoordinates.map(
          (manuscript: {
            title: string;
            origin: string;
            date: number;
            identifier: String;
            coordinates: [number, number];
          }) =>
            yearLow <= manuscript.date &&
            yearHigh >= manuscript.date && (
              <Marker
                position={manuscript.coordinates as LatLngTuple}
                icon={ICON}
                eventHandlers={{
                  click: () =>
                    getManuscriptWithOrigin(
                      manuscript.origin,
                      manuscript.coordinates
                    ),
                }}
                key={`${manuscript.title}-${manuscript.identifier}`}
              >
                <Popup>
                  <div>
                    <strong>manuscripts:</strong>
                    <div className="flex gap-1">
                      {getManuscriptsWithSameOrigin(manuscript.origin).map(
                        (sameOriginManuscript: any) => (
                          <div key={sameOriginManuscript.identifier}>
                            {sameOriginManuscript.alternative},
                          </div>
                        )
                      )}
                    </div>
                    <strong>Origin:</strong>{" "}
                    {manuscript.origin.split("?")[0] || ""}
                  </div>
                </Popup>
              </Marker>
            )
        )}
      </MapContainer>
    </div>
  );
};

export default ManuscriptMap;
