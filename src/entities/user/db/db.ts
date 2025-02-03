import { EntitySchemaBuilder } from "@/builder/entitySchemaBuilder";
import { entityConfig } from "../config";

export const UserSchemaEntity = EntitySchemaBuilder.init({
  config: entityConfig,
});
