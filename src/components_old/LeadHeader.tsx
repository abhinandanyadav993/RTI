const LeadHeader = () => {
    return(
        <nav x-data="{ open: false }" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-auto" src="/real_travel.jpeg" alt="Your Company" />
              </div>
  
              {/* <!-- Links section --> */}
              <div className="hidden lg:ml-10 lg:block">
                <div className="flex space-x-4">
                  
                    <a href="#" className="bg-gray-100 px-3 py-2 rounded-md text-sm font-medium text-gray-900" aria-current="page" x-state:on="Current" x-state:off="Default" x-state-description="Current: &quot;bg-gray-100&quot;, Default: &quot;hover:text-gray-700&quot;">Dashboard</a>
                  
                    <a href="#" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900" x-state-description="undefined: &quot;bg-gray-100&quot;, undefined: &quot;hover:text-gray-700&quot;">Jobs</a>
                  
                    <a href="#" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900" x-state-description="undefined: &quot;bg-gray-100&quot;, undefined: &quot;hover:text-gray-700&quot;">Applicants</a>
                  
                    <a href="#" className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900" x-state-description="undefined: &quot;bg-gray-100&quot;, undefined: &quot;hover:text-gray-700&quot;">Company</a>
                  
                </div>
              </div>
            </div>
  
            <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
              {/* <!-- Search section --> */}
              <div className="w-full max-w-lg lg:max-w-xs">
                <label for="search" className="sr-only">Search</label>
                <div className="relative text-gray-400 focus-within:text-gray-500">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="h-5 w-5" x-description="Heroicon name: mini/magnifying-glass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path>
  </svg>
                  </div>
                  <input id="search" className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm" placeholder="Search" type="search" name="search" />
                </div>
              </div>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50" aria-controls="mobile-menu">
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
  
            {/* <!-- Actions section --> */}
            <div className="hidden lg:ml-4 lg:block">
              <div className="flex items-center">
                <button type="button" className="flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
  </svg>
                </button>
  
                {/* <!-- Profile dropdown --> */}
                <div x-data="Components.menu({ open: false })" x-init="init()"  className="relative ml-3 flex-shrink-0">
                  <div>
                    <button type="button" className="flex rounded-full bg-gray-50 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50" id="user-menu-button" x-ref="button"  aria-expanded="false" aria-haspopup="true" x-bind:aria-expanded="open.toString()" >
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                    </button>
                  </div>
                  
                    {/* <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" x-ref="menu-items" x-description="Dropdown menu, show/hide based on menu state." x-bind:aria-activedescendant="activeDescendant" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" @keydown.arrow-up.prevent="onArrowUp()" @keydown.arrow-down.prevent="onArrowDown()" @keydown.tab="open = false" @keydown.enter.prevent="open = false; focusButton()" @keyup.space.prevent="open = false; focusButton()">
                      
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700" x-state:on="Active" x-state:off="Not Active"  role="menuitem" tabIndex={-1} id="user-menu-item-0" >Your Profile</a>
                      
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1" >Settings</a>
                      
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700"  role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                      
                    </div> */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div x-description="Mobile menu, show/hide based on menu state." className="border-b border-gray-200 bg-gray-50 lg:hidden" id="mobile-menu" x-show="open">
          <div className="space-y-1 px-2 pt-2 pb-3">
            
              <a href="#" className="bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900" aria-current="page" x-state:on="Current" x-state:off="Default" x-state-description="Current: &quot;bg-gray-100&quot;, Default: &quot;hover:bg-gray-100&quot;">Dashboard</a>
            
              <a href="#" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900" x-state-description="undefined: &quot;bg-gray-100&quot;, undefined: &quot;hover:bg-gray-100&quot;">Jobs</a>
            
              <a href="#" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900" x-state-description="undefined: &quot;bg-gray-100&quot;, undefined: &quot;hover:bg-gray-100&quot;">Applicants</a>
            
              <a href="#" className="hover:bg-gray-100 block px-3 py-2 rounded-md font-medium text-gray-900" x-state-description="undefined: &quot;bg-gray-100&quot;, undefined: &quot;hover:bg-gray-100&quot;">Company</a>
            
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Whitney Francis</div>
                <div className="text-sm font-medium text-gray-500">whitney.francis@example.com</div>
              </div>
              <button type="button" className="ml-auto flex-shrink-0 rounded-full bg-gray-50 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" x-description="Heroicon name: outline/bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
  </svg>
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              
                <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">Your Profile</a>
              
                <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">Settings</a>
              
                <a href="#" className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100">Sign out</a>
              
            </div>
          </div>
        </div>
      </nav>
    )
}
export default LeadHeader;