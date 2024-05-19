export default function subscriptionPlansData() {
  return [
    {
      type: "Monthly",
      title: "Basic Plan",
      des: "Enjoy an extensive library of movies and shows, featuring a range of content.",
      price: "9.99",
      attributes: [
        { title: " Free Trail: 7 Days" },
        { title: "Ad - Free: No" },
        { title: " Offline Viewing: No" },
      ],
    },
    {
      type: "Monthly",
      title: "Standard Plan",
      des: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      price: "12.99",
      attributes: [
        { title: " Free Trail: 7 Days" },
        { title: "Ad - Free: Yes" },
        { title: " Offline Viewing: for select titles" },
      ],
    },
    {
      type: "Monthly",
      title: "Premium Plan",
      des: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      price: "14.99",
      attributes: [
        { title: " Free Trail: 7 Days" },
        { title: "Ad - Free: Yes" },
        { title: " Offline Viewing: for all titles" },
      ],
    },
    {
      type: "Yearly",
      title: "Basic Plan",
      des: "Enjoy an extensive library of movies and shows, featuring a range of content.",
      price: "59.99",
      attributes: [
        { title: " Free Trail: 7 Days" },
        { title: "Ad - Free: No" },
        { title: " Offline Viewing: No" },
      ],
    },
    {
      type: "Yearly",
      title: "Standard Plan",
      des: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
      price: "79.99",
      attributes: [
        { title: " Free Trail: 7 Days" },
        { title: "Ad - Free: Yes" },
        { title: " Offline Viewing: for select titles" },
      ],
    },
    {
      type: "Yearly",
      title: "Premium Plan",
      des: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      price: "99.99",
      attributes: [
        { title: " Free Trail: 7 Days" },
        { title: "Ad - Free: Yes" },
        { title: " Offline Viewing: for all titles" },
      ],
    },
  ];
}