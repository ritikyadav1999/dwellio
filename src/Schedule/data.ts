export type ScheduleProperty = {
  title: string;
  location: string;
  price: string;
  image: string;
  verified: boolean;
};

export type Advisor = {
  name: string;
  title: string;
  quote: string;
  avatar: string;
};

export type CalendarDay = {
  label: string;
  muted?: boolean;
  selected?: boolean;
};

export type TimeSlot = {
  label: string;
  selected?: boolean;
};

export type LifestyleFocus = {
  label: string;
  selected?: boolean;
};

export const scheduleProperty: ScheduleProperty = {
  title: "Lavelle Road Penthouse",
  location: "Bengaluru, KA",
  price: "INR 1,85,000",
  verified: true,
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBUOH8kHrVc7xb5Snetk9LGbRzAzmgrPtweRaBSEXaZatLBYd77whM31-PwyxzT65ZeSIXSEPeWAKW5TwbS0zhzxAe1GB2gzlmYINDheCsNe-XYKuEU_07mZz3saKXntJIaVdi7wOjsy6vWsENQw1yM8o76r9RQ8YWgoYTN4kCTOgVE4o-LXjV_jakh1WMcqpvdwpctxc-sQvcQtsAY7p-KoB6byWGMT5TrQl_tkGhvCjDFYHGEWC5DkpVmNxn96VRAhQUh2_jAlqs",
};

export const scheduleAdvisor: Advisor = {
  name: "Rajesh V.",
  title: "Senior Portfolio Advisor",
  quote:
    "I'll be your point of contact for this residency. My goal is to ensure this transition is as seamless as the living experience itself.",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBlhIbMs4QkFx43n2XbLYPzPBm1DiMRquTJ3PLluUhYIaqapvl0NlAA8UiacGCYCGpmkPHXBG6uGzzi4aSkefBjOZ3gRc9aRNJZjIr28YD39_vx0EMtqIBNwnVU5E6AyXfFD4CJPrcjA2UB2H32fDszXWYXzXsPrPbxKGGUpQiwkqunbmt1kJMm3LOv_suhpScOtPM8Vr95q6h8nQoNzuTbPEAQVhDv4k4tAGyIlQvzp4v-j--7ZNd_U77untIuexeI6Q7vHhlXBnc",
};

export const calendarDays: CalendarDay[] = [
  { label: "28", muted: true },
  { label: "29", muted: true },
  { label: "30", muted: true },
  { label: "31", muted: true },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6", selected: true },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "10" },
];

export const timeSlots: TimeSlot[] = [
  { label: "10:00 AM", selected: true },
  { label: "11:30 AM" },
  { label: "02:00 PM" },
  { label: "04:30 PM" },
];

export const lifestyleFocus: LifestyleFocus[] = [
  { label: "Remote Worker" },
  { label: "Pet Friendly", selected: true },
  { label: "Health & Wellness" },
  { label: "Family Oriented" },
];

export const moveInTimelines = [
  "Immediately",
  "Within 30 Days",
  "Next 2-3 Months",
  "Just Browsing",
];
