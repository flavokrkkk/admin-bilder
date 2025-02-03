import { createModule } from "tiny-invert";
import { EntityBuilderContainer } from "./_container";
import { EntityPageProvider } from "./_entityPage";

export type { BuilderFields, EntityConfig } from "./_types";

const EntryProvider = EntityBuilderContainer.provider(
  (ctx) => ({
    EntityPage: ctx.innerDeps.EntityPage,
  }),
  {
    EntityPage: EntityPageProvider,
  }
);

export const EntityBuilder = createModule(EntryProvider);
