import React from "react"

function liststyles() {
  return (
    <div>
      <ul
        className="container mx-auto divide-y divide-gray-400 divide-dotted"
        style={{ fontFamily: "Raleway" }}
      >
        <li className="flex items-center justify-between px-4 py-2">
          <div className="antialiased">
            <div className="mb-2 text-3xl font-light align-middle">
              Favorite Rivets
            </div>
            <ul className="list-none">
              <li>Buck rivets</li>
              <li>Olympic rivets</li>
              <li>Pop rivets</li>
            </ul>
            <div className="mt-2 font-mono text-xs font-light text-gray-500">
              <span className="font-bold">list-style-type</span>: none;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            list-none
          </div>
        </li>

        <li className="flex items-center justify-between px-4 py-2">
          <div className="antialiased">
            <div className="mb-2 text-3xl font-light align-middle">
              Favorite Rivets
            </div>
            <ul className="list-disc">
              <li>Buck rivets</li>
              <li>Olympic rivets</li>
              <li>Pop rivets</li>
            </ul>
            <div className="mt-2 font-mono text-xs font-light text-gray-500">
              <span className="font-bold">list-style-type</span>: disc;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            list-disc
          </div>
        </li>

        <li className="flex items-center justify-between px-4 py-2">
          <div className="antialiased">
            <div className="mb-2 text-3xl font-light align-middle">
              Favorite Rivets
            </div>
            <ul className="list-decimal">
              <li>Buck rivets</li>
              <li>Olympic rivets</li>
              <li>Pop rivets</li>
            </ul>
            <div className="mt-2 font-mono text-xs font-light text-gray-500">
              <span className="font-bold">list-style-type</span>: decimal;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            list-decimal
          </div>
        </li>
      </ul>
    </div>
  )
}

export default liststyles
