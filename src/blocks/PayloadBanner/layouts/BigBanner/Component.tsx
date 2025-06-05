import React from "react";

interface NewArrivalBannerProps {
  backgroundImage: string;
  headingText: string;
  subText: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const NewArrivalBanner: React.FC<NewArrivalBannerProps> = ({
  backgroundImage,
  headingText,
  subText,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-serif font-semibold mb-4">
          {headingText}
        </h1>
        <p className="text-md md:text-lg mb-6">{subText}</p>
        <button
          onClick={onButtonClick}
          className="bg-white text-black px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default NewArrivalBanner;
