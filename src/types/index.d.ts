declare module "@/types" {
  export interface Schedule {
    id: string;
    guide: User;
    tour?: Tour;
    product?: Product;
    startTime: Date;
    endTime: Date;
  }

  export interface User {
    id: string;
    email: string;
    password: string;
    role: "user" | "guide";
    name?: string;
    profileDescription?: string | null;
    contactInfo?: string | null;
    rating: number;
    images?: Array<any>;
    products?: Array<any>;
    schedules?: Array<any>;
    tours?: Array<any>;
    favorites?: Array<any>;
    carts?: Array<any>;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface Tour {
    id: number;
    name: string;
    description: string;
    price: number;
    date: Date;
    maxParticipants: number;
    organizer?: User;
    routePoints?: RoutePoint[];
    mediaUrls?: string[];
    locations?: Location[];
    difficulty: number;
    highlights?: string;
    importantInfo?: string;
    startTime?: string;
    included?: string;
    excluded?: string;
    schedules?: Schedule[];
  }

  export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
  }

  export interface RoutePoint {
    id: number;
    name: string;
    description: string;
    order: number;
    latitude: number;
    longitude: number;
    tour: Tour;
  }

  export interface Location {
    id: number;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
    tours?: Tour[];
  }

  export interface ApiResponse<T> {
    data: T;
    message?: string;
  }
  export interface RoutePoint {
    id: number;
    latitude: number;
    longitude: number;
    description?: string;
    tour: Tour;
  }
  export enum RescueRequestStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
  }

  export interface RescueRequest {
    id: string;
    requestData: string;
    status: RescueRequestStatus;
    guide: User;
    pdfDocument: string;
    createdAt: Date;
    updatedAt: Date;
  }
  export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    guide: User;
    cartItems?: CartItem[];
  }
  export interface CartItem {
    id: string;
    product: Product;
    quantity: number;
  }

  export interface Location {
    id: number;
    name: string;
    description?: string;
    latitude: number;
    longitude: number;
    images: Image[];
    tours: Tour[];
  }

  export interface Image {
    id: string;
    url: string;
    entityType: string;
    entityId: string;
    description?: string;
  }

  export interface Favorite {
    id: number;
    userId: number;
    tourId: number;
    user: User;
    tour: Tour;
  }
  export interface Comment {
    id: string;
    content: string;
    author: User;
    tour: Tour;
    createdAt: Date;
  }

  export interface CartItem {
    id: number;
    cart: Cart;
    tour?: Tour;
    product?: Product;
    quantity: number;
    bookingTime?: Date;
  }

  export interface Cart {
    id: number;
    user: User;
    items: CartItem[];
  }
}
