import { Gloss } from "@/lib/Gloss";

interface SelectionListProps {
  selectedRows: { rows: Gloss[] };
}

export const SelectionList: React.FC<SelectionListProps> = ({
  selectedRows,
}) => (
  <main className="overflow-auto max-h-[400px] border border-neutral-600 h-[400px] shadow-md p-4 my-4">
    <p className="font-semibold mb-4">Currently Selected</p>
    {(selectedRows as any)?.rows?.map((gloss: any) => (
      <section
        className="border border-neutral-600 shadow-md p-2 mb-2"
        key={gloss.id}
      >
        {gloss.original.title}{" "}
      </section>
    ))}
  </main>
);
