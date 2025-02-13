import { useState } from "react";
import { gallery } from "../../data/aboutData";
import { Selector } from "./Selector";

export const ImageSelection = () => {
  const [selectedPicture, setSelectedPicture] = useState(gallery[0]);

  const handlePictureChange = (picture) => {
    if (picture.id !== selectedPicture.id) {
      setSelectedPicture(picture);
    }
  };
  return (
    <>
      <img
        src={selectedPicture.image}
        alt={selectedPicture.alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />

      <div className="absolute bottom-5 left-0 right-0 z-50 mx-auto w-fit transform transition-all group-hover:opacity-100 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0">
        <Selector
          currentItem={selectedPicture}
          onSelectedItem={handlePictureChange}
        />
      </div>
    </>
  );
};
