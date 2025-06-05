import React from "react";
import img1 from "../../../../../public/images/66e10db5f2a621df65d957c2_8sik1FvspOgcNwzDz5Fo9KQqoVM (1).avif" 
import img2 from "../../../../../public/images/66e12298a378d84545025784_d.avif" 
import img3 from "../../../../../public/images/66e1267ff4bdb5e574e45946_1.avif" 

const EveCollection = () => {
  const products = [
    {
      name: "Earrings",
      price: "$ 49.99 USD",
      image: "https://cdn.prod.website-files.com/66e1053e28584d60caa1ac5b/66e10db5f2a621df65d957c2_8sik1FvspOgcNwzDz5Fo9KQqoVM%20(1).avif",
    },
    {
      name: "Ring",
      price: "$ 79.99 USD",
      image: "https://cdn.prod.website-files.com/66e1053e28584d60caa1ac5b/66e1267ff4bdb5e574e45946_1.avif",

    },
    {
      name: "Watch",
      price: "$ 159.99 USD",
      image: "https://cdn.prod.website-files.com/66e1053e28584d60caa1ac5b/66e12ed178cb12bac545a8fd_4.webp",
    },
    {
      name: "Bracelet",
      price: "$ 89.99 USD",
      image: "https://cdn.prod.website-files.com/66e1053e28584d60caa1ac5b/66e12298a378d84545025784_d.avif",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image with Button */}
        <div className="relative">
          <img
            src="https://cdn.prod.website-files.com/66d5c8a0f16078270af4fa77/66d5c8b8b23068f514514613_Image-38.jpg"
            alt="Eve Collection Model"
            className="w-full rounded-lg"
          />
          <button className="absolute bottom-6 left-6 bg-black text-white px-6 py-2 text-sm font-semibold tracking-widest">
            LIMITED STOCK
          </button>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            EVE Collection <span className="text-gray-400 italic text-lg">by Rolliage.</span>
          </h2>
          <p className="text-gray-600 mb-10">
            Embrace the enchanting allure of the Eve Collection, a limited edition jewelry line
            that intertwines the graceful symbolism of the divine angels with a mythical essence.
          </p>

          {/* Product Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div key={index} className="text-center">
                <img src={item.image} alt={item.name} className="w-full h-auto mx-auto mb-3" />
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveCollection;