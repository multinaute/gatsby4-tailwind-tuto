import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function about() {
  return (
    <div>
      <div className="container mx-auto text-center">
        <h1 className="">About Binaryville</h1>
        <StaticImage
          src="../images/powship.svg"
          alt="POW Ship"
          className="w-32 mx-auto"
        />
        <p className="px-6 mx-auto mt-4 text-xl text-gray-500">
          On the edge of the world stands the progressive town of Binaryville,
          where technology is a way of life.The robots who live, work, and play
          in Binaryville learn from an early age that magic is made simply by
          combining 0 's and 1' s.For the Binaryville robots, every waking
          thought and every sleeping dream is consumed with unique permutations…
          and endless possibilities.
        </p>
        <div className="inline-block p-2 mt-2 mb-4 border-4 border-gray-500 rounded-md cursor-pointer active:bg-gray-500 hover:bg-gray-500 hover:text-white">
          more info
        </div>
      </div>
    </div>
  )
}

export default about
