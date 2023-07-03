import Sidebar from "./components/Sidebar";
import Box from "@/components/Box";

export default function About() {
  const headerStyling = "font-semibold text-xl py-3";
  const contentStyling = "text-sm";
  return (
    <div className="flex gap-4 p-8">
      <Sidebar />
      <Box className="min-h-screen w-screen rounded-md p-8 overflow-auto">
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
            <h2 className={headerStyling}>What is a Gloss?</h2>
            <p className={contentStyling}>
              A gloss is a note or explanation inserted in the margins or
              between lines of a text to explain, translate, or expand on
              difficult or complex passages. They serve as a valuable insight
              into the scholarly and interpretative practices of the past,
              providing context and interpretations for text that can aid in our
              understanding of medieval theology, philosophy, and law.
            </p>
            <h2 className={headerStyling}>Why Study Glosses?</h2>
            <p className={contentStyling}>
              Glosses provide a unique perspective on the ways medieval scholars
              understood and interpreted canonical texts. By studying these
              annotations, we gain insights into the intellectual landscape of
              the medieval period, and how scholars grappled with the
              complexities of the texts they studied.
            </p>
            <h2 className={headerStyling}>Gallery of Glosses Tools:</h2>
            <ul className="list-disc ml-5">
              <p className="py-2 font-semibold text-lg">
                Our website offers the opportunity to visualize the journey of
                glosses across time.
              </p>
              <li>
                The interactive map illustrates the geographical spread and
                evolution of manuscripts over centuries. Explore the colorful
                pins, each representing a manuscript and color-coded according
                to different decades or quarter-centuries, to trace the paths of
                these influential texts.
              </li>
              <p className="py-2 font-semibold text-lg">
                Delve into the &quot;Explore Glosses&quot; section for a variety
                of browsing options.
              </p>
              <li>
                &quot;Browse by Book&quot;, you&apos;ll find glosses associated
                with authoritative books from the medieval era, shedding light
                on how these texts were perceived and interpreted.
              </li>
              <li>
                &quot;Browse by Theme&quot; brings together collections of
                glosses centered around specific research topics, offering
                insights into the diverse themes that preoccupied scholars and
                scribes of the time.
              </li>
              <li>
                &quot;Browse by Manuscript&quot; allows you to examine all
                glosses derived from a particular manuscript, offering a deeper
                understanding of each unique textual artifact.
              </li>
              <li>
                &quot;Browse by Tag&quot; section brings together glosses linked
                by shared tags, offering another perspective on these
                fascinating historical texts.
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </div>
  );
}
