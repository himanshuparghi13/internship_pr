import React from "react"

interface propps {
  backgroundImage: string
  title: string
  subtitle: string
  buttonText: string
}

const BigBanner: React.FC<propps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center px-4">
        <h1 className="w-full min-w-[90%] mx-auto font-serif mb-6 text-center leading-[1.1] break-words text-[4.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]">
          {title}
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-light mb-6 max-w-[600px] mx-auto">
          {subtitle}
        </p>

        <button className="border border-white px-6 py-2 hover:bg-white hover:text-black transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default BigBanner
