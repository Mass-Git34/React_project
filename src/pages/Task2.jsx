import React from "react";
import {
  HomeIcon,
  DocumentIcon,
  ViewGridIcon,
  TableIcon,
  CollectionIcon,
  CameraIcon,
} from "@heroicons/react/outline"; // Import Heroicons

const Task2 = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md border-b">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Left Side: Logo and Navigation */}
          <div className="flex items-center space-x-4">
            <img
              src="logo-tabler.png" // Replace with the actual path to your logo image
              alt="Tabler Logo"
              className="h-8 w-auto" // Adjust height as per your needs
            />
            <div className="text-blue-600 font-bold text-xl">
              <a href="#">tabler</a>
            </div>
          </div>

          {/* Right Side: Search and Profile */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Button
            </button>

            {/* Profile Info */}
            <div className="flex items-center space-x-2">
              <img
                src="logo192.png"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-gray-700 text-sm">
                <span>Jane Pearson</span>
                <span className="block text-xs text-gray-500">
                  Administrator
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-gray-100 min-h-screen">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 space-x-6">
            {/* Nav Items */}
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors"
            >
              <HomeIcon className="w-5 text-blue-700 h-5" />
              <span style={{ color: "blue" }}>Home</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors"
            >
              <ViewGridIcon className="w-5 h-5" />
              <span>Interface</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors"
            >
              <TableIcon className="w-5 h-5" />
              <span>Components</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors"
            >
              <CollectionIcon className="w-5 h-5" />
              <span>Pages</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors"
            >
              <DocumentIcon className="w-5 h-5" />
              <span>Forms</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors"
            >
              <CameraIcon className="w-5 h-5" />
              <span>Gallery</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors"
            >
              <DocumentIcon className="w-5 h-5" />
              <span>Documentation</span>
            </a>
          </div>
        </nav>
        <div className="grid grid-cols-6 gap-4 p-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-green-500">+6%</span>
              <span className="text-2xl font-bold">43</span>
              <span className="text-gray-600">New Tickets</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-red-500">-3%</span>
              <span className="text-2xl font-bold">17</span>
              <span className="text-gray-600">Closed Today</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-green-500">+9%</span>
              <span className="text-2xl font-bold">7</span>
              <span className="text-gray-600">New Replies</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-green-500">+3%</span>
              <span className="text-2xl font-bold">27.3k</span>
              <span className="text-gray-600">Followers</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-red-500">-2%</span>
              <span className="text-2xl font-bold">$95</span>
              <span className="text-gray-600">Daily earnings</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-red-500">-1%</span>
              <span className="text-2xl font-bold">621</span>
              <span className="text-gray-600">Products</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div class="bg-gray-100 p-6 min-h-screen basis-1/2">
            {/* <!-- Development Activity Container --> */}
            <div class="bg-white shadow-md rounded-lg p-6">
              {/* <!-- Section Title --> */}
              <h2 class="text-lg font-semibold text-gray-700 mb-4">
                Development Activity
              </h2>

              {/* <!-- Placeholder for Graph --> */}
              <div class="bg-blue-100 h-40 rounded-md flex items-center justify-center mb-6">
                <span class="text-blue-500 font-semibold">
                  Graph Placeholder
                </span>
              </div>

              {/* <!-- Activity Table --> */}
              <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                  <thead>
                    <tr>
                      <th class="text-left text-gray-500 font-medium py-2 px-4">
                        User
                      </th>
                      <th class="text-left text-gray-500 font-medium py-2 px-4">
                        Commit
                      </th>
                      <th class="text-left text-gray-500 font-medium py-2 px-4">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-t bg-gray-50">
                      <td class="py-2 px-4 text-gray-600">Ronald Bradley</td>
                      <td class="py-2 px-4 text-gray-600">Initial commit</td>
                      <td class="py-2 px-4 text-gray-600">May 6, 2018</td>
                    </tr>
                    <tr class="border-t bg-white">
                      <td class="py-2 px-4 text-gray-600">Russell Gibson</td>
                      <td class="py-2 px-4 text-gray-600">Main structure</td>
                      <td class="py-2 px-4 text-gray-600">April 22, 2018</td>
                    </tr>
                    <tr class="border-t bg-gray-50">
                      <td class="py-2 px-4 text-gray-600">Beverly Armstrong</td>
                      <td class="py-2 px-4 text-gray-600">
                        Left sidebar adjustments
                      </td>
                      <td class="py-2 px-4 text-gray-600">April 15, 2018</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task2;
