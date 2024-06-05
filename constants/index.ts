export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Request a donation",
    route: "/announcements/create",
  },
  {
    label: "Funds",
    route: "/announcements",
  },
  {
    label: "Community",
    route: "/community",
  },
  {
    label: "My Profile",
    route: "/Profil",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  amountNeeded: "",
};
