export interface User {
  id: number;
  name: string;
  role: string;
  image: string;
  email: string;
  phone: string;
  status: string;
  address: string;
  createdAt: string;
}

export interface UserStatus {
  id: number;
  title: string;
  value: string;
}

export interface UserPayload {
  name: string;
  role: string;
  image: string;
  email: string;
  phone: string;
  status: string;
  address: string;
}
