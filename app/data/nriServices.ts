// app/data/nriServices.ts

export interface NriSection {
  title: string;
  content: string[];
}

export const nriServicesData: NriSection[] = [
  {
    title: 'INVESTMENT AVENUES:',
    content: [
      'The following investment avenues are available for the Non-Resident Indians in India:',
      'NRIs are permitted to invest in Government securities through primary dealers.',
      'NRIs are permitted to purchase non-convertible debentures of Indian Companies, on Fixed Deposits with Public Limited Companies and in master-shares issued by mutual funds approved by the Reserve Bank of India (RBI).',
      'NRIs are permitted to invest in mutual funds both on repatriable as well as non repatriable basis. There is no limit for investment in domestic mutual funds.',
      'NRIs are allowed to purchase shares and convertible debentures of Indian Companies both on repatriation and non repatriation basis. This is provided the company is not involved in plantation, real estate or agricultural business. NRIs can make investments both in the primary as well as secondary market.',
      'General permission is available to NRIs to purchase, sell, transfer, rent out or inherit immovable property in India, provided funds are from outside India or through NRIs\' FCNR accounts. NRIs / PIOs can freely rent out their immovable properties, without seeking any permissions from RBI.',
      'NRIs are also granted general permission to invest in bearer securities like Indira Vikas Patra/Kisan Vikas Patra, National Savings Certificates, Public Provident Fund, RBI Bonds, certain Citizen Savings Scheme 2004. Investment already made, if any, shall persist.',
    ]
  },
  {
    title: 'Extent Of Tax Liability:',
    content: [
      'Based on the residential status of a tax payer and the place where the income is earned, the income that is included in the total income is as under:',
      'Resident: All incomes whether earned in India or outside India.'
    ]
  }
];