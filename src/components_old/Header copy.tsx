const ResponsiveHeader = () => {
  return (
    <div className="min-h-[1024px] bg-white">
      <div className="min-h-full">
        <nav x-data="{ open: false }" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between border-b border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=violet&amp;shade=500"
                    alt="Your Company"
                  />
                </div>

                <div class="hidden lg:ml-10 lg:block">
                    
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveHeader;
