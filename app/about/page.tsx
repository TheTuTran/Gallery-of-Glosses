import Sidebar from "./components/Sidebar";

export default function About() {
  const headerStyling = "font-semibold text-xl py-3";
  const contentStyling = "text-sm";
  return (
    <div className="flex gap-4 p-8">
      <Sidebar />
      <div className="h-screen w-screen bg-white rounded-md p-8 border-gold border overflow-auto">
        <div>
          <h1 className="text-4xl font-semibold mb-6">
            About Gallery of Glosses
          </h1>
          <div className="space-y-2">
            <h2 className={headerStyling}>Who We Are</h2>
            <p className={contentStyling}>
              The Gallery of Glosses is an open-access digital platform devoted
              to revealing the richness of the medieval era through a meticulous
              study and interpretation of glosses from 12th-century manuscripts.
            </p>

            <h2 className={headerStyling}>Our Mission</h2>
            <p className={contentStyling}>
              Our mission is to bridge the gap between past and present,
              connecting today&apos;s scholars, students, and enthusiasts with
              the scholars of the medieval era whose voices have been &quot;lost
              to the margins for centuries&quot;.
            </p>

            <h2 className={headerStyling}>Our Collection</h2>
            <p className={contentStyling}>
              We curate a broad collection of annotated manuscripts, primarily
              from the Gospel of Matthew, enabling a deeper understanding of the
              thought processes, ideas, and creative doodles of medieval minds.
            </p>

            <h2 className={headerStyling}>For Educators and Students</h2>
            <p className={contentStyling}>
              We provide an immersive experience that allows students to engage
              directly with historical texts, fostering the development of
              translation and transcription skills, and offer educators a wealth
              of source material for their courses.
            </p>

            <h2 className={headerStyling}>Our Legacy</h2>
            <p className={contentStyling}>
              With the Gallery of Glosses, we hope to have created a project
              with longevity, shedding light on medieval scholarship in a way
              that resonates through the centuries and influences future
              interpretations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
