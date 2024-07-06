export type CheckBoxInteractionsItem = {
  id: number;
  title: string;
  checked: boolean;
};

export interface CheckBoxInteractionsProps {
  DATA: Array<CheckBoxInteractionsItem>;
  onItemPressed: (value: boolean, index: number) => void;
}
