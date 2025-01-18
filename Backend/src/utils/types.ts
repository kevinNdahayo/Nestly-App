
// Define the newUserTypes type
export type RegisterUserTypes = {
  username: string;
  email: string;
  password: string;
  email_verified: boolean;
};

export type UserDataProfile = {
  id: string;
  username: string;
  email: string;
  password: string;
  auth_provider: string;
  email_verified: boolean;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  password: string;
  auth_provider: string
  email_verified: boolean;
}

export type loginDataType = {
  email: string;
  password: string;
}

export type resetPasswordDataType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export interface NoDataResponse {
  message: string,
  status: number
}

export interface DataResponse {
  message: string,
  status: number,
  data: any
}

export interface profileDataTypes {
  userId: number,
  first_name: string,
  last_name: string,
  phone_number: string,
  date_of_birth: string,
  profilePicture: string,
  preferred_language: string,
  preferred_currency: string
}

export interface updateProfileDataTypes {
  profile_id: string
  first_name: string,
  last_name: string,
  phone_number: string,
  date_of_birth: string,
  avatar_url: string,
  preferred_language: string,
  preferred_currency: string
}

export interface existingUserTypes {
  userId: string | null,
  profileId: string | null,
  email: string | null
}

export type paymentOptions = "Visa" | "MasterCard" | "Momo" | "Irembo";

export interface HotelMediaTypes {
  hotel_id: string;
  media_type: 'photo' | 'video';
  media_category: 'landscape' | 'portrait' | 'profile' | 'room' | 'gallery' | 'sponsored' | 'virtualTours';
  url: string;
}

// Types for Hotel Operations
export type CreateHotelType = {
  name: string;
  short_description?: string;
  long_description?: string;
  star_rating: number;
  property_type: string;
  built_year?: number;
  last_renovation_year?: number;
  category?: string;
  street_address: string;
  city: string;
  state: string;
  province?: string;
  country: string;
  postal_code?: string;
  latitude?: any;
  longitude?: any;
  map_url?: string;
  check_in_time: string;
  check_out_time: string;
  cancellation_policy?: string;
  payment_options?: PaymentOptions[];
  menu_download_url?: string;
  sponsored?: boolean;
  status?: "active" | "inactive";
};

export interface RoomTypes {
  hotel_id: string;
  type: 'single' | 'double' | 'king';
  description?: string;
  max_occupancy: number;
  num_beds: number;
  room_size?: any;
  floor_level?: number;
  total_rooms: number;
}

export interface RoomPricingTypes {
  room_type_id: string;
  base_price: any;
  currency: string;
  tax_percentage: any;
  child_policy?: string;
}

export interface RoomAvailabilityTypes {
  room_type_id: string;
  available_rooms: number;
  date: string;
}

export interface PriceModifierTypes {
  room_type_id: string;
  modifier_type: string;
  percentage: any;
  start_date: string;
  end_date: string;
}

export interface HotelReviewTypes {
  hotel_id: string;
  user_name: string;
  profile_picture?: string;
  content: string;
  rating?: any;
}
