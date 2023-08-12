import React, { useEffect, useState } from "react";
import { GlossColumns } from "../components/GlossColumns";
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
    <>
      <DataTable columns={GlossColumns} data={glosses} />
    </>
  );
};

export default AllContent;
