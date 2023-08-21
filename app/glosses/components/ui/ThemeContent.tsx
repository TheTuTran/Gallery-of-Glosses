import React, { useEffect, useState } from "react";
import { GlossColumns } from "../GlossColumns";
import { DataTable } from "@/components/DataTable";
import { Gloss } from "@/lib/Gloss";

type ThemeContentProps = {
  setIsLoading: (loading: boolean) => void;
};

const ThemeContent: React.FC<ThemeContentProps> = ({ setIsLoading }) => {
  const [theme, setTheme] = useState(""); // Added state to manage theme selection
  const [glosses, setGlosses] = useState<Gloss[]>([]);

  // Fetch objects by theme
  const fetchObjectsByTheme = async (theme: string) => {
    // TODO: ONCE THEME IS IMPLEMENTED
  };

  const handleBrowseClick = () => {
    setIsLoading(true); // Set loading state to true when button is clicked
    fetchObjectsByTheme(theme); // Fetch glosses for the selected theme
  };

  // disables scrolling
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <main>
      <DataTable columns={GlossColumns} data={glosses} />
    </main>
  );
};

export default ThemeContent;
