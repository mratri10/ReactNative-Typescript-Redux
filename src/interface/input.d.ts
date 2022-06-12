type VInput = {
  control: Control<TFieldValues>;
  defaultValue: string;
  name: string;
  title: string;
  isTitle?: boolean;
  type?: TypeInput;
  register?: UseFormRegister<FieldValues>;
  chList?: DataCH[];
};

type DataCH = {
  id: number;
  value: string;
};

type UriData = {
  title: string;
  uri: string;
};
