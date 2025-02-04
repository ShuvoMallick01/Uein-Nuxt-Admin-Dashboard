export interface InvoiceItem {
  title: string;
  price: number | null;
  total: number | null;
  discount: number | null;
  quantity: number | null;
}
