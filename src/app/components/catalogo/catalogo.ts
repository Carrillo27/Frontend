export interface Campo {
  key: string;
  label: string;
  kind: string;
  options: string[];
}
export interface Catalogo {
  title: string;
  subtitle: string;
  panel: string;
  modal: string;
  note: string;
  fields: Campo[];
  rows: Record<string, string>[];
}
