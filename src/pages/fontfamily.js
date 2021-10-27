import React from "react"

function fontfamily() {
  return (
    <div>
      <ul
        className="container mx-auto leading-none divide-y divide-gray-400 divide-dotted"
        style={{ fontFamily: "Raleway" }}
      >
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 font-sans text-5xl font-light align-middle">
              Font Sans
            </div>
            <p className="font-sans leading-tight text-md">
              Rex is the Mayor of Binaryville and a well-loved personality in
              town. He rose to robotdom from a microprocessor plant on the south
              side of town, where many famous and influential robots before him
              were conceived.
            </p>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-family</span>: ui-sans-serif,
              system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color
              Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-sans
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 font-serif text-5xl font-light align-middle">
              Font Serif
            </div>
            <p className="font-serif leading-tight text-md">
              Dolores robot is a computational genius who performs calculations
              for various Binaryville businesses and organizations. In her spare
              time, Dolores has been noodling on the creation of the perfect web
              browser that will make all other browsers obsolete. We're rooting
              for you, Dolores!
            </p>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-family</span>: ui-serif, Georgia,
              Cambria, "Times New Roman", Times, serif;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-serif
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 font-mono text-5xl font-light align-middle">
              Font Mono
            </div>
            <p className="font-mono leading-tight text-md">
              Bubble Gum robot, or “Bubbles” for short, is from a family of
              track-footed robots that ¬originated from an experiment melding
              candy vending machines with robotics in the early 1980s. Bubbles
              is a favorite of Binaryville, not just because she generously
              dispenses candy, but also because she has one of the more "bubbly"
              personalities of the villagers.
            </p>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-family</span>: ui-monospace,
              SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
              "Courier New", monospace;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-mono
          </div>
        </li>
      </ul>
      <hr />
      <h2 className="text-5xl">Font Size</h2>
      <ul
        className="container mx-auto leading-none divide-y divide-gray-400 divide-dotted"
        style={{ fontFamily: "Raleway" }}
      >
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-xs align-middle">Rex</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 0.75rem;{" "}
              <span className="font-bold">line-height:</span>: 1rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-xs
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-sm align-middle">Dolores</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 0.875rem;{" "}
              <span className="font-bold">line-height:</span>: 1.25rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-sm
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-base align-middle">Bubbles</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 1rem;{" "}
              <span className="font-bold">line-height:</span>: 1.5rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-base
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-lg align-middle">Fred</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 1.125rem;{" "}
              <span className="font-bold">line-height:</span>: 1.75rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-lg
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-xl align-middle">Rivet</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 1.25rem;{" "}
              <span className="font-bold">line-height:</span>: 1.75rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-medium text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-xl
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-2xl align-middle">Eileen</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 1.5rem;{" "}
              <span className="font-bold">line-height:</span>: 2rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-2xl
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-3xl align-middle">Belle</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 1.875rem;{" "}
              <span className="font-bold">line-height:</span>: 2.25rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-3xl
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-4xl align-middle">Cosmo</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 2.25rem;{" "}
              <span className="font-bold">line-height:</span>: 2.5rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-4xl
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-5xl align-middle">Dolly</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 3rem;{" "}
              <span className="font-bold">line-height:</span>: 1;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-5xl
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-6xl align-middle">Sergeant</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 3.75rem;{" "}
              <span className="font-bold">line-height:</span>: 1rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-6xl
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 align-middle text-7xl">Oscar</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 4.5rem;{" "}
              <span className="font-bold">line-height:</span>: 1rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-7xl
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 align-middle text-8xl">Levi</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 6rem;{" "}
              <span className="font-bold">line-height:</span>: 1rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-8xl
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 align-middle text-9xl">Elton</div>
            <div className="font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-size:</span>: 8rem;{" "}
              <span className="font-bold">line-height:</span>: 1rem;
            </div>
          </div>
          <div className="px-2 py-1 ml-5 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            text-9xl
          </div>
        </li>
      </ul>
      <h2
        className="text-5xl"
        style={{
          fontFamily: "Playfair Display",
        }}
      >
        Font Weight
      </h2>
      <ul
        className="container mx-auto leading-none divide-y divide-gray-400 divide-dotted"
        style={{ fontFamily: "Raleway" }}
      >
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-5xl font-thin align-middle">Rex</div>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-weight</span>: 100
            </div>
          </div>
          <div className="px-2 py-1 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-thin
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-5xl align-middle font-extralight">
              Dolores
            </div>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-weight</span>: 200
            </div>
          </div>
          <div className="px-2 py-1 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-extralight
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-5xl font-light align-middle">Bubbles</div>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-weight</span>: 300
            </div>
          </div>
          <div className="px-2 py-1 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-light
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-5xl font-normal align-middle">Fred</div>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-weight</span>: 400
            </div>
          </div>
          <div className="px-2 py-1 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-normal
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-5xl font-medium align-middle">Rivet</div>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-weight</span>: 500
            </div>
          </div>
          <div className="px-2 py-1 font-mono text-xs font-medium text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-medium
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-5xl font-semibold align-middle">
              Eileen
            </div>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-weight</span>: 600
            </div>
          </div>
          <div className="px-2 py-1 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-semibold
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-5xl font-bold align-middle">Belle</div>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-weight</span>: 700
            </div>
          </div>
          <div className="px-2 py-1 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-bold
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-5xl font-extrabold align-middle">
              Cosmo
            </div>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-weight</span>: 800
            </div>
          </div>
          <div className="px-2 py-1 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-extrabold
          </div>
        </li>
        <li className="flex items-center justify-between px-4 py-2">
          <div>
            <div className="mb-2 text-5xl font-black align-middle">Dolly</div>
            <div className="mt-2 font-mono text-xs font-light leading-tight text-gray-500">
              <span className="font-bold">font-weight</span>: 900
            </div>
          </div>
          <div className="px-2 py-1 font-mono text-xs font-semibold text-white bg-pink-500 rounded whitespace-nowrap rounded-2">
            font-black
          </div>
        </li>
      </ul>
    </div>
  )
}

export default fontfamily
