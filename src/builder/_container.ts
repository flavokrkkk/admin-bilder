import { createContainer } from "tiny-invert";
import { EntityConfig } from "./_types";

export const EntityBuilderContainer = createContainer<{
  config: EntityConfig;
}>();
