import { EntityBuilder } from "@/builder/entityBuilder";
import { entityConfig } from "./config";

export const UserEntity = EntityBuilder.init({
  config: entityConfig,
});
