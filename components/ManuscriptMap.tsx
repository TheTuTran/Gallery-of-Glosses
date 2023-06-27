"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from "react-simple-maps";

interface ManuscriptMapProps {
  yearLow: number;
  yearHigh: number;
  manuscripts: any;
  handleMarkerClick: (manuscripts: any[]) => void;
}

const ManuscriptMap: React.FC<ManuscriptMapProps> = ({
  yearLow,
  yearHigh,
  manuscripts,
  handleMarkerClick,
}) => {
  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/europe.json";

  const originCoordinates: Record<string, number[]> = {
    "Saint-Amand": [3.4312, 50.4472],
    Laon: [3.6199, 49.5641],
    "Buildwas Abbey": [-2.4943, 52.6311],
    Chartres: [1.4983, 48.4468],
    Paris: [2.3522, 48.8566],
    Hereford: [-2.7156, 52.0567],
    Clairvaux: [4.7441, 48.1785],
    York: [-1.0803, 53.9583],
    "Bury St Edmunds": [0.7143, 52.2429],
    "Saint Gall": [9.3748, 47.4223],
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

      // If origin includes a question mark, use the part before it as the origin
      if (origin.includes("?")) {
        origin = origin.split("?")[0].trim();
      }

      // Look up the coordinates, and if not found, set a default value
      const coordinates = originCoordinates[origin] || [0, 0];

      return { ...manuscript, coordinates };
    }
  );

  const getManuscriptWithOrigin = (origin: string) => {
    origin = origin.split("?")[0].trim();
    handleMarkerClick(
      manuscriptsWithCoordinates.filter((manuscript: { origin: string }) =>
        manuscript.origin.includes(origin)
      )
    );
  };

  return (
    <div className="border-2 border-black">
      <ComposableMap
        width={800}
        height={600}
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-8.0, -47.0, 0],
          scale: 1800,
        }}
      >
        <Graticule stroke="#EAEAEC" />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="gray"
                stroke="#EAEAEC"
              />
            ))
          }
        </Geographies>
        {manuscriptsWithCoordinates.map(
          (manuscript: {
            title: string;
            origin: string;
            date: number;
            identifier: String;
            coordinates: [number, number];
          }) =>
            (manuscript.date == 0 ||
              (yearLow <= manuscript.date && yearHigh >= manuscript.date)) && (
              <Marker
                className="cursor-pointer"
                key={`${manuscript.title}-${manuscript.identifier}`}
                coordinates={manuscript.coordinates}
                onClick={() => getManuscriptWithOrigin(manuscript.origin)}
              >
                <g
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
              </Marker>
            )
        )}
      </ComposableMap>
    </div>
  );
};

export default ManuscriptMap;
