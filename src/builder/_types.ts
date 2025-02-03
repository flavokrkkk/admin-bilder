type Options = {
  label: string;
  value: string;
};

type TextField = {
  type: "text";
  name: string;
  title: string;
};

type SelectField = {
  type: "select";
  name: string;
  title: string;
  options: Array<Options>;
};

export type BuilderFields = SelectField | TextField;

export type EntityConfig = {
  name: string;
  title: string;
  fields: Array<BuilderFields>;
};
