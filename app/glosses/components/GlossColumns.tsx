"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/DataTableColumnHeader";
import { Gloss } from "@/lib/Gloss";

export const GlossColumns: ColumnDef<Gloss>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Incipit" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "targetChapter",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Target Chapter" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[1px] truncate font-medium">
          {row.getValue("targetChapter")}
        </span>
      );
    },
  },
  {
    accessorKey: "targetVerse",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Target Verse" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[1px] truncate font-medium">
          {row.getValue("targetVerse")}
        </span>
      );
    },
  },
  {
    accessorKey: "targetedText",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Target Text" />
    ),
    cell: ({ row }) => {
      return <span>{row.getValue("targetedText")}</span>;
    },
  },
  {
    accessorKey: "transcribedGloss",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gloss Text" />
    ),
    cell: ({ row }) => {
      return <span>{row.getValue("transcribedGloss")}</span>;
    },
  },
];
