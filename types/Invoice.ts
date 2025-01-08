interface Product {
  id: number;
  title: string;
  price: number;
  total: number;
  quantity: number;
  discount?: number;
}

interface Customer {
  id: number;
  name: string;
  image: string;
}

interface Payment {
  paymentMethod: string;
  cardHolder: string;
  cardNo: string;
  cardCVC: string;
}

interface BillingAddress {
  email: string;
  phone: string;
  address: string;
}

export interface Invoice {
  id: string;
  dueDate: string;
  issueDate: string;
  status: string;
  totalAmount: number;
  billingAddress?: BillingAddress;
  payment: Payment;
  customer: Customer;
  products: Product[];
  shippingCharge?: number;
  tax?: number;
}

export interface InvoicePayload {
  id: string;
  status: string;
  dueDate: string;
  products: Product[];
  payment: Payment;
  billingAddress?: BillingAddress;
  shippingCharge?: number;
  tax?: number;
}
