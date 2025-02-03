import { EntityConfig } from "@/builder/_types";

export const entityConfig: EntityConfig = {
  name: "users",
  title: "Users",
  fields: [
    {
      type: "text",
      name: "name",
      title: "Name",
    },
    {
      type: "select",
      name: "role",
      title: "Role",
      options: [
        { value: "admin", label: "Admin" },
        { value: "user", label: "User" },
      ],
    },
  ],
};
