import { createModule } from "tiny-invert";
import { EntitySchemaProvider } from "./_entitySchema";

export type { BuilderFields, EntityConfig } from "./_types";

export const EntitySchemaBuilder = createModule(EntitySchemaProvider);
