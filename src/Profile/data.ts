export type AccountDetail = {
  label: string;
  value: string;
};

export type PreferenceOption = {
  label: string;
  active?: boolean;
};

export type ProfileData = {
  name: string;
  summary: string[];
  email: string;
  phone: string;
  city: string;
  moveInTimeline: string;
  avatar: string;
  heroImage: string;
};

export const profileData: ProfileData = {
  name: "Ritik Yadav",
  summary: ["Remote Worker", "Quiet Living"],
  email: "ritik.yadav@example.com",
  phone: "+91 98765 43210",
  city: "Bengaluru",
  moveInTimeline: "Within 30 Days",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA47v3SpXglNcJmqK_NSwpH7iXoeK6CJ4VLjQNOe_B4_5gnBnSkZIXnnMX5QQU6KqVkMgX38Fi2l_gPtlNZ7kyPfbRljogAZ7mxY5UHVlvrwQ78JBbAsK5V36ysatCUI-1DB8IC163prYNF5n4Dl2dJmUs4X5Vl5NDBUV0DUYWQywDg2XkgTYAqZAxfQJ9-Je6uEVCAp8mZJbsrhEiLy7xDnpY9ZwE53w_zXGZep19qVWnvVHi7XEPgRJ5QHLwzUXZrobTyZ-zTXSw",
  heroImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDqYF4woyKn616EnRLRUqic-PPpvD64n9pH1qG6h2KOJGWmBt9Jlkajd-mvPibHsHXq5Q8qXVLARB0hlcMbNjB8gsI4AyWEFIwdcgKPCR9Qss_e2L30zYdUoJ7B5-Js2qP5eB9XGvaFR20PE90VgLYxwK2-NEnzDQvTqAHR_jQZDAWmHgIrU0n4uRBYIWngLWbS1P3hgsjPZOp_Eovos1QR6aewcpUTTsKKGXCyp53kF_M7LB7VqJiebVdeEScAm1QEvirCaKdOn_A",
};

export const lifestylePreferences: PreferenceOption[] = [
  { label: "Remote Worker", active: true },
  { label: "Quiet Living", active: true },
  { label: "Pet Friendly" },
  { label: "Wellness Focused", active: true },
  { label: "Family Friendly" },
  { label: "Luxury Residences Only" },
  { label: "Furnished Homes", active: true },
  { label: "Walkable Neighborhoods" },
];

export const accountDetails: AccountDetail[] = [
  { label: "Email", value: profileData.email },
  { label: "Phone", value: profileData.phone },
  { label: "Primary City", value: profileData.city },
  { label: "Move-In Timeline", value: profileData.moveInTimeline },
];

export const discoveryPreferences = {
  rentRange: "INR 45,000 - INR 1,20,000+",
  furnishing: ["Fully Furnished", "Semi", "Unfurnished"],
  furnishingValue: "Fully Furnished",
  propertyTypes: ["Apartment", "Villa", "Penthouse"],
  propertyTypeValue: "Apartment",
};

export const availabilityOptions: PreferenceOption[] = [
  { label: "Weekends (Sat - Sun)", active: true },
  { label: "Weekdays (Morning)" },
  { label: "Weekdays (Evening)", active: true },
];

export const tourTypes = [
  {
    label: "Virtual First",
    description: "Video walkthrough before an in-person visit",
    active: true,
  },
  {
    label: "In-Person Only",
    description: "Schedule direct physical visits",
  },
];
