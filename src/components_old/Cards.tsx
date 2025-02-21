const Cards = () => {
  return (
    <div className="bg-gray-100 p-5">
      <div className="max-w-7xl mx-auto">
        {/* <!-- Header Section --> */}
        <h1 className="text-2xl font-bold text-gray-800 mb-5 text-center">
          Responsive Listing Cards
        </h1>

        {/* <!-- Cards Container --> */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* <!-- Card 1 --> */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722165/AbhirajK/Abhirajk.webp"
              alt="Card Image 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Card Title 1
              </h2>
              <p className="text-gray-600 mt-2">
                This is a sample description for card 1. Tailored for responsive
                designs using Tailwind CSS.
              </p>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp"
              alt="Card Image 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Card Title 2
              </h2>
              <p className="text-gray-600 mt-2">
                This is a sample description for card 2. The card adjusts well
                across different screen sizes.
              </p>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp"
              alt="Card Image 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Card Title 3
              </h2>
              <p className="text-gray-600 mt-2">
                This is a sample description for card 3. Styled using Tailwind
                CSS for an elegant look.
              </p>
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp"
              alt="Card Image 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Card Title 4
              </h2>
              <p className="text-gray-600 mt-2">
                This is a sample description for card 4. Flexbox ensures the
                layout remains clean and organized.
              </p>
            </div>
          </div>

          {/* <!-- Card 5 --> */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722160/AbhirajK/Abhirajk4.webp"
              alt="Card Image 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Card Title 5
              </h2>
              <p className="text-gray-600 mt-2">
                This is a sample description for card 5. Mobile-first design
                approach for better responsiveness.
              </p>
            </div>
          </div>

          {/* <!-- Card 6 --> */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm flex flex-col">
            <img
              src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722159/AbhirajK/Abhirajk5.webp"
              alt="Card Image 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Card Title 6
              </h2>
              <p className="text-gray-600 mt-2">
                This is a sample description for card 6. Built with hardcoded
                HTML and Tailwind CSS classNamees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
