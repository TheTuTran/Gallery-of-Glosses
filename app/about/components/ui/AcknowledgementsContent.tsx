export const AcknowledgementsContent = () => {
  return (
    <main className="min-h-screen  py-6 flex flex-col justify-center">
      <h1 className="text-4xl text-white ml-2 mb-10">Acknowledgements</h1>
      <div className="relative py-3 flex justify-center w-full">
        <div
          className="relative px-4 py-10  min-w-[40%] shadow-lg rounded-md"
          style={{ background: "rgb(212, 229, 232)" }}
        >
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-2">
              At Saint Louis University:
            </h2>
            <h3 className="text-lg font-semibold mb-2">
              Funding Bodies and Research Support
            </h3>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Office of the Vice President for Research</li>
              <li>David Borgmeyer</li>
              <li>Christine Luebbert</li>
              <li>Ann Scales</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Software Development</h3>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Patrick M. Cuba, Research Computing Group</li>
              <li>Bryan J. Haberberger, Research Computing Group</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">
              Digital Humanities Advising
            </h3>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>
                John McEwan, Walter J. Ong SJ Center for Digital Humanities
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Graduate Assistants</h3>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Amanda Berg</li>
              <li>Abner Chacon</li>
              <li>Joseph Grone</li>
              <li>Clayton J. Killion</li>
              <li>Matheis Lorimor</li>
              <li>Mitchell Stevens</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">Website Development</h3>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Tu N. Tran</li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">External Advisors:</h3>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Abigail Firey, University of Kentucky</li>
              <li>Pádraic Moran, University of Galloway</li>
              <li>Jeffrey C. Witt, Loyola University Maryland</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
