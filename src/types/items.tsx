interface ISelectedItem extends SelectedItemState {
  actions: SelectedItemActions;
}

interface SelectedItemState {
  selectedItem: IItem | undefined;
}

interface SelectedItemActions {
  setSelectedItem: (input: IItem) => void;
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
