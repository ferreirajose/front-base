type InventoryStatus = {
  label: string;
  value: string;
}
export type Product = {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: InventoryStatus | any;
  category?: string;
  image?: string;
  rating?: number;
}
