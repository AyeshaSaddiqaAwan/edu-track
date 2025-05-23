"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/DataTableColumnHeaderProps";
import { Checkbox } from "@/components/ui/checkbox"
import { role } from "@/lib/data";
import { DeleteDialog } from "@/components/ui/delete-dialog";

export type Announcements = {
    id: number;
    title: string;
    class: string;
    date: string;
};

export const columns: ColumnDef<Announcements>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
  {
    accessorKey: "title",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
  },
  {
    accessorKey: "class",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Class" />
      ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Date" />
      ),
  },
  {
      id: "action",
      header: () => <div className="text-center">Action</div>,
      cell: ({ row }) => {
        return role === "admin" ? (
          <div className="flex items-center justify-center space-x-2">
            <Button variant="ghost" size="icon">
              <Edit />
            </Button>
            <DeleteDialog
              trigger={
                <Button variant="ghost" size="icon">
                  <Trash className="text-destructive" />
                </Button>
              }
              title="Delete Announcement"
              description="This action cannot be undone. This will permanently delete the announcement and remove their data from our servers."
              onDelete={() => {
                // Add your delete logic here
                console.log("Deleting announcement:", row.original);
              }}
            />
          </div>
        ) : "not authorized";
      },
    },
];
