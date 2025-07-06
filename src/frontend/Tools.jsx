
const Tools = () => {
  return (
      <div className="">
          <div className="my-6">
          <h2 className="head font-bold text-4xl capitalize text-center ">Skills and Tools</h2>
              <div className="tech ">
                  <p className="text-center my-2">These're the technologies that gear my Full stack development and Smart contract integration</p>
              <div className="flex gap-x-16 mx-10 mt-20 ">
              <div className="px-2 py-4 bg-gray-600 rounded w-lg ">
                          <h3 className="head font-semi-bold text-xl my-2 capitalize  text-amber-400 ">
                              Frontend</h3>
                  <ul className="list-none">
                  <li>Javascript (React.js)</li>
                  <li>CSS</li>
                  <li>Tailwindcss</li>
                  <li>Shadcn</li>
                      </ul>
              </div>

              <div className="px-2 py-4  bg-gray-600 rounded w-lg">
                  <h3 className="head font-semi-bold text-xl my-2 capitalize text-amber-400 ">Backend </h3>
                  <ul className="list-none">
                     <li>Node.Js (Express.Js)</li>
                     <li>PostgreSQL</li>
                  </ul>
              </div>

              <div className="px-2 py-4 bg-gray-600 rounded w-lg">
                  <h3 className="head font-semi-bold text-xl my-2 capitalize  text-amber-400">Blockchain</h3>
                  <ul className="list-none">
                      <li>Solidity</li>
                        <li>Javascript (Ethers.Js)</li>
                        <li>Chainlink</li>
                        <li>OpenZeppelin</li>
                  </ul>
              </div>

              </div>
              </div>
              </div>
    </div>
  )
}

export default Tools
