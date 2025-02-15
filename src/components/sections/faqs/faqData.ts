
export interface IFaq {
    question: string
    answer: string
} 

export const faqsData = [
    // Column 1: Using the Service
    [
      {
        question: "Who can use Street Ninja?",
        answer: "Anyone with a phone can use it. You don’t need a smartphone, internet, or an account—just send a text message to get started.",
      },
      {
        question: "Does Street Ninja cost anything?",
        answer: "The service is free, but standard text message rates may apply depending on your phone plan.",
      },
      {
        question: "Where does your data come from?",
        answer: "Currently it is mostly pulled from the City of Vancouver's OpenData API. We also use GraphHopper and WiGLE APIs to help with direction routing and WiFi network mapping.",
      },
    ],
  
    // Column 2: Accuracy & Reliability
    [
      {
        question: "How accurate is the information?",
        answer: "We update resource listings regularly, but availability can change quickly. If something is outdated, we encourage users to report it.",
      },
      {
        question: "Where does the data come from?",
        answer: "We gather data from city databases, nonprofits, and direct input from organizations that provide food, shelter, and other services.",
      },
      {
        question: "Can I report incorrect or missing information?",
        answer: "Yes! If you notice incorrect details, let us know so we can improve the accuracy of our data for everyone.",
      },
    ],
  
    // Column 3: Supporting & Expanding the Service
    [
      {
        question: "How can I help improve Street Ninja?",
        answer: "We need funding, better data sources, and outreach support. Also further testing of the app (hello developers!). If you can help in any of these areas, please reach out.",
      },
      {
        question: "Will this service expand to more cities?",
        answer: "That depends on funding and data availability. If you're interested in bringing Street Ninja to your city, please get in touch.",
      },
      {
        question: "Can organizations list their services on Street Ninja?",
        answer: "Yes! If you run a shelter, food program, or another essential service, we’d love to add your resource to our system.",
      },
    ],
  ];
  