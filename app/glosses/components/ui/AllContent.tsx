import React, { useEffect } from "react";
import { GlossColumns } from "../GlossColumns";
import { DataTable } from "@/components/DataTable";
import { useFetchedGlosses } from "@/hooks/useFetchedGlosses";

type AllContentProps = {
  setIsLoading: (loading: boolean) => void;
};

const AllContent: React.FC<AllContentProps> = ({ setIsLoading }) => {
  const { glosses, isLoading } = useFetchedGlosses(
    "Glossing-Matthew-Named-Glosses"
  );

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading, setIsLoading]);

  return (
    <main>
      <DataTable columns={GlossColumns} data={glosses} />
    </main>
  );
};

export default AllContent;
