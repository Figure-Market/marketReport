const ads = [
    {
      id: 1,
      title: "Boost Ecommerce Growth Today",
      subtitle: "One Platform, Infinite Possibilities",
      image: "/data/ten.jpg",
      template: "TemplateOneCard", // Maps to the component
    },
    {
      id: 2,
      title: "Drive Sales with AI Ads",
      subtitle: "Automate & Optimize",
      image: "/data/one.jpg",
      template: "TemplateTwoCard", // Maps to the component
    },
    {
      id: 3,
      title: "Brand Awareness Campaign",
      subtitle: "Reach Your Audience Effectively",
      image: "/data/fourteen.jpg",
      template: "TemplateOneCard"
    },
    {
      id: 4,
      title: "Holiday Sale Specials",
      subtitle: "Exclusive Discounts & Offers",
      image: "/data/twelve.jpg",
      template: "TemplateTwoCard"
    },
    {
      id: 5,
      title: "Fashion Collection 2025",
      subtitle: "Unveil the Newest Trends",
      image: "/data/fifteen.jpg",
      template: "TemplateOneCard"
    },
    {
      id: 6,
      title: "Fitness Revolution",
      subtitle: "Gear Up for Better Health",
      image: "/data/five.jpg",
      template: "TemplateTwoCard"
    },
    {
      id: 7,
      title: "Luxury Watches",
      subtitle: "Timeless Elegance",
      image: "/data/eleven.jpg",
      template: "TemplateOneCard"
    },
    {
      id: 8,
      title: "Tech Innovations",
      subtitle: "Next-Level Gadgets",
      image: "/data/sixteen.jpg",
      template: "TemplateTwoCard"
    },
    {
      id: 9,
      title: "Beauty Essentials",
      subtitle: "Radiate Confidence",
      image: "/data/sixteen.jpg",
      template: "TemplateOneCard"
    },
    {
      id: 10,
      title: "Travel Experience",
      subtitle: "Explore the World",
      image: "/data/ninteen.jpg",
      template: "TemplateTwoCard"
    },
  ];

  export type Ad = {
    id: number;
    template: string;
    image: string;
    title: string;
    subtitle: string;
  };
  
  export default ads;
  