export interface Order {
  id: number;
  invoiceId: string;
  createAt: string;
  deliveredAt: string;
  customer: {
    id: number;
    name: string;
    email: string;
    phone: string;
  };
  billing: string;
  shipping: string;
  status: string;
  payment: {
    id: number;
    paymentMethod: string;
    cardNumber: string;
  };
  items: Item[];
  subTotalAmount: number;
  totalAmount: number;
  taxAmount: number;
  discountAmount: number;
  shippingChargeAmount: number;
}

export interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface OrderStatus {
  id: number;
  title: string;
  value: string;
}

export interface PaymentMethods {
  id: number;
  value: string;
  title: string;
}
