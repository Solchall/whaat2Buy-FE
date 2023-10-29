interface ISelectedItem extends SelectedItemState {
  actions: SelectedItemActions;
}

interface SelectedItemState {
  selectedItem: string;
}

interface SelectedItemActions {
  setSelectedItem: (input: string) => void;
  resetSelectedItem: () => void;
}
interface IItem {
  no: string;
  name: string;
  brand: string;
  price: string;
  img: string;
  url: string;
}

export type { IItem, ISelectedItem };
