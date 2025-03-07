export interface IFaq {
  question: string
  answer: string
}

export const faqsData = [
  {
    header: 'Usage',
    data: [
      {
        question: 'Who can use Street Ninja?',
        answer:
          'Anyone with a phone can use it. You don’t need a smartphone, internet, or an account—just send a text message to get started.',
      },
      {
        question: 'Does Street Ninja cost anything?',
        answer:
          'The service is free, but standard text message rates may apply depending on your phone plan.',
      },
      {
        question: "Do I have to remember all the keywords like 'food' and 'shelter' in order to use it?",
        answer:
          "Kind of. Although each keyword has multiple fall-back words that are also acceptable. For example, 'breakfast' or 'meal' will wwork in place of 'food'. You can also just type 'help' to get information on which keywords you can search for."
      },
    ],
  },
  {
    header: 'Data collection',
    data: [
      {
        question: 'How accurate is the information?',
        answer:
          'We update resource listings regularly, but availability can change quickly. If something is outdated, we encourage users to report it.',
      },
      {
        question: 'Where does the data come from?',
        answer:
          'Currently all data comes from the City of Vancouver OpenData API. We are looking to expand to other data sources, as we believe the more information we can get and the more resources we can connect people with, the more powerful Street Ninja will become.',
      },
      {
        question: 'Can I report incorrect or missing information?',
        answer:
          "Yes, please do! If you notice incorrect details, let us know in the 'Contact' page so we can improve the accuracy of our data for everyone.",
      },
    ],
  },

  {
    header: 'Expansion',
    data: [
      {
        question: 'How can I help improve Street Ninja?',
        answer:
          'We need funding, more data sources, and outreach support. Also further testing of the app (hello developers!). If you can help in any of these areas, please reach out.',
      },
      {
        question: 'Will this service expand to more cities?',
        answer:
          "That depends on funding and data availability. If you're interested in bringing Street Ninja to your city, please get in touch.",
      },
      {
        question: 'Can organizations list their services on Street Ninja?',
        answer:
          'Yes! If you run a shelter, food program, or another essential service, we’d love to add your resource to our system.',
      },
    ],
  },
]
