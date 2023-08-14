export const HistoryContent = () => {
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center ">
      <h1 className="text-4xl text-white ml-2 mb-10">
        {" "}
        History of the Project
      </h1>
      <div className="relative py-3 justify-center flex">
        <div
          className="relative max-w-[90%] px-4 py-10 shadow-lg rounded-md"
          style={{ background: "rgb(212, 229, 232)" }}
        >
          <div className=" mx-[2rem]">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="mb-4">
              This project has benefited from two internal grants from Saint
              Louis University (SLU) and one external grant from the American
              Philosophical Society (APS). It began with an intention to create
              an analogue edition of early twelfth-century glosses on the gospel
              of Matthew, prior to the formation c.1200 of the Glossa ordinaria
              on the Bible.
            </p>
            <h2 className="text-xl font-semibold mb-2">
              Initial Funding and Research (2019)
            </h2>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>
                Grants Received:
                <ul className="list-disc list-inside pl-4">
                  <li>Franklin Research Grant from the APS: $4,000</li>
                  <li>
                    Summer Research Award in the Humanities from SLU: $6,390
                  </li>
                </ul>
              </li>
              <li>
                Objective: Acquire more digital manuscript copies of glossed
                Matthews and work on transcribing glosses.
              </li>
              <li>
                Outcome: Larson and Cuba decided to expand the project&apo;s
                scope, envisioning a digital humanities infrastructure for
                multiple medieval authoritative texts.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">
              President&apos;s Research Fund Award (2020)
            </h2>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Grant Amount: $21,000 (13-month grant)</li>
              <li>
                Achievements:
                <ul className="list-disc list-inside pl-4">
                  <li>Purchase of more manuscript copies.</li>
                  <li>
                    Employment of two graduate student summer workers for
                    transcription.
                  </li>
                  <li>
                    Development of digital humanities tools and platforms by
                    Cuba and Haberberger.
                  </li>
                  <li>Refinement of the transcription software TPEN.</li>
                  <li>
                    Development of a data-management tool titled “Glossing
                    Matthew”.
                  </li>
                  <li>Plans for a public-facing web application.</li>
                </ul>
              </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Research Outcomes</h2>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>
                Complete transcription of glosses on Matthew 5 from sixteen
                twelfth-century manuscripts.
              </li>
              <li>Organization of data on the Glossing Matthew GitHub site.</li>
              <li>
                A paper by Patrick Cuba and Bryan Haberberger titled
                &quot;Building a IIIF-Aware Ecosystem&quot; presented at the
                IIIF Annual Conference on June 23, 2021.
              </li>
              <li>
                A draft research article by Atria A. Larson submitted to the
                journal Quaderni di storia religiosa medievale.
              </li>
              <li>
                A poster titled &quot;Digital Humanities Tools for Capturing
                Glosses on Authoritative Texts&quot; accepted for the 16th
                International Congress of Medieval Canon Law in July 2022.
              </li>
            </ul>
            <h2 className="text-xl font-semibold mb-2">Future Directions</h2>
            <p className="mb-4">
              The next iteration, moving from “Glossing Matthew” to the “Gallery
              of Glosses,” will involve:
            </p>
            <ul className="list-disc list-inside mb-4 pl-4">
              <li>Broader use of manuscripts.</li>
              <li>Refinement of transcription processes.</li>
              <li>
                Utilization of manuscripts of Matthew for continued
                transcription.
              </li>
              <li>
                Collaboration with Saint Louis University’s Vatican Film Library
                (VFL) for research in medieval canon law.
              </li>
              <li>
                Partnership with the Walter J. Ong Center for Digital Humanities
                for ongoing projects.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
