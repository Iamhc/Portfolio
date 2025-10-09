import Contact from "./Contact";
let Summary = () => {
  return (
    <div className="px-4 md:px-20 py-10 bg-gray-50 ">
      <div id="summary" className="text-gray-800 text-lg md:text-xl ">
        <ul className="list-disc list-inside space-y-2">
          <li>
            a mern stack developer with a keen interest in
            Next.js,Typescript,React js,Three.js.
          </li>
          <li>my other interests are AI agents, autonomous systems.</li>
        </ul>
        <div>Let's Connect:</div> <Contact />
      </div>
    </div>
  );
};

export default Summary;
