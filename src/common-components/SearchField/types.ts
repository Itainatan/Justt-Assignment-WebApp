type Props = {
  placeholder: string;
  onSubmit: (search: string) => void 
};

type FormValues = {
  search: string;
};

export type { Props, FormValues };
