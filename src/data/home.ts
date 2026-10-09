// Dummy content for the Pairly home page. Replace with real copy, photos
// and CMS/API data later. Square-bracket text is intentional placeholder copy.

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "How it works", href: "#how" },
  { label: "Who we are", href: "#about" },
  { label: "Stories", href: "#stories" },
  { label: "Pricing", href: "/pricing" },
];

export type Step = {
  id: string;
  icon: "user" | "heart" | "chat";
  title: string;
  body: string;
};

export const steps: Step[] = [
  {
    id: "profile",
    icon: "user",
    title: "Create your profile",
    body: "Share your photos, your interests and what you are looking for. It takes a few minutes.",
  },
  {
    id: "matches",
    icon: "heart",
    title: "Meet your matches",
    body: "Browse people who share your values and your pace, and let them know you are interested.",
  },
  {
    id: "chat",
    icon: "chat",
    title: "Start the conversation",
    body: "Chat in private, take your time, and meet when it feels right.",
  },
];

export type Trust = { id: string; lead: string; body: string };

export const trustPoints: Trust[] = [
  { id: "verified", lead: "Verified profiles.", body: "Real people, reviewed before they appear." },
  { id: "private", lead: "Private by default.", body: "You decide who sees your details." },
  { id: "report", lead: "Easy reporting.", body: "One tap to block or report anyone." },
];

export type Story = { id: string; label: string; gradient: string };

export const stories: Story[] = [
  { id: "s1", label: "[PHOTO 1]", gradient: "linear-gradient(150deg, #F6A8B8, #E5446D)" },
  { id: "s2", label: "[PHOTO 2]", gradient: "linear-gradient(150deg, #FFB8A8, #F58C7B)" },
  { id: "s3", label: "[PHOTO 3]", gradient: "linear-gradient(150deg, #8A1B3C, #3B1030)" },
  { id: "s4", label: "[PHOTO 4]", gradient: "linear-gradient(150deg, #FFD3C7, #F6A8B8)" },
  { id: "s5", label: "[PHOTO 5]", gradient: "linear-gradient(150deg, #E5446D, #8A1B3C)" },
  { id: "s6", label: "[PHOTO 6]", gradient: "linear-gradient(150deg, #F58C7B, #E5446D)" },
];

export const featuredProfile = {
  name: "[First name]",
  age: "[Age]",
  city: "[City]",
  interest: "[Short interest]",
};

export const footerLinks: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Safety", href: "/safety" },
];
