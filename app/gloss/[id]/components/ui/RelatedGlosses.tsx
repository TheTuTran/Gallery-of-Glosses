import { Gloss } from "@/lib/Gloss";

interface RelatedGlossesProps {
  relatedGlosses: Array<Gloss>; // Array of related glosses to display
  loading: boolean; // Boolean to indicate if the data is still loading
  onGlossClicked: (gloss: Gloss) => void; // Function to execute when a gloss is clicked
}

// The RelatedGlosses component displays a list of related glosses
export const RelatedGlosses: React.FC<RelatedGlossesProps> = ({
  relatedGlosses,
  loading,
  onGlossClicked,
}) => {
  return (
    <main>
      <h2 className="text-2xl mb-4">Related Glosses</h2>
      <section className="grid grid-cols-2 gap-4 pb-2">
        {loading ? (
          /* Display loading text if data is still loading */
          <p>Loading...</p>
        ) : (
          /* Map through the array of related glosses and create a div for each */
          relatedGlosses.map((gloss: Gloss, index: number) => (
            <section
              /* Use the index of the gloss in the array as the key */
              key={index}
              /* Assign the 'related-gloss' class to each gloss div */
              className="related-gloss"
              /* Call the onGlossClicked function when a gloss div is clicked */
              onClick={() => onGlossClicked(gloss)}
            >
              <p className="text-lg font-semibold">
                {/* Display the title of the gloss */}
                {gloss.title}
              </p>
            </section>
          ))
        )}
      </section>
    </main>
  );
};
