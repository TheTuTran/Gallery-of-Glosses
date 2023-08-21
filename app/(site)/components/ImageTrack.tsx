import { homeImages } from "@/data/constants";
import Image from "next/image";

// This ImageTrack component displays a collection of images in a
// track-like arrangement. Additionally, it overlays the title "Gallery of Glosses"
export const ImageTrack = () => (
  <main className="image-track relative pt-10">
    {homeImages.map((url, index) => (
      // The 'draggable' attribute is set to false to disable dragging the images
      <Image
        key={index}
        src={url}
        className={`image image-${index}`}
        width={500}
        height={300}
        draggable="false"
        alt={""}
      />
    ))}
    <p className="absolute top-[40%] text-white solid text-8xl">
      Gallery of Glosses
    </p>
  </main>
);
