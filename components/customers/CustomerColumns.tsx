"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CustomerType>[] = [
  {
    accessorKey: "clerkId",
    header: "ID do Usuário",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
