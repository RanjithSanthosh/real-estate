// app/data/faqs.ts

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    question: 'How to choose the right property?',
    answer: 'One should buy property in an area which has adequate basic amenities such as power, water, sewerage, etc. It is important to do your checks and balances while deciding on a project. Infrastructure in the area, connectivity, builders goodwill and price of the property are key components a buyer needs to take into consideration. A buyer should also carefully check the builders experience, number of projects completed and delivered, banking institutions involved and present buy options available to suit your requirements. It is better you conduct a field survey before identifying a suitable property meeting your budget and location preference'
  },
  {
    question: 'Should one invest in small cities?',
    answer: 'In small cities, the appreciation is usually less but so is the initial investment compared to the metros. However, with major infrastructure developments, cities like Indore, Coimbatore, Bhubaneshwar and a few others are witnessing growth in prices as well as returns. Always choose a city that has good economic drivers such as IT, ITeS or manufacturing hubs. This ensures continued user interest for re-sale when you want to exit an investment or for rental returns while you hold the property till it is well leveraged and gives good returns.'
  },
  {
    question: 'What are the advantages of choosing a reputed developer?',
    answer: 'It is always advisable to go for a reputed agent and developer, especially for property which is under construction because it covers a great part of the risk. For built-up property, a bigger area in a reasonably good complex with a builder having a market standing you can be assured of the title and delivery.'
  },
  {
    question: 'What makes more sense – rent or buy?',
    answer: 'Renting offers flexibility and lower upfront costs, ideal for those who may relocate. Buying builds equity and offers stability, making it a long-term investment. The right choice depends on your financial situation, long-term plans, and the local real estate market.'
  }
];