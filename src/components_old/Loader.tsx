const Loader = () => {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen dark:bg-gray-900">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="relative flex justify-center items-center">
          {/* Dotted animated circular border */}
          <div className="absolute h-20 w-20 rounded-full border-4 border-dotted border-emerald-500 animate-spin"></div>
          {/* Centered SVG */}
          <img
            src="https://tailwindflex.com/images/logo.svg"
            className="rounded-full h-14 w-14 animate-pulse"
          />
        </div>
        <span className="text-2xl text-emerald-500 animate-bounce">TIT...</span>
      </div>
    </div>
  );
};

export default Loader;
