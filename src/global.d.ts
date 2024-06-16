export interface ServiceFetshType {
  lang: string;
  data: ServiceType[];
}
export interface ServiceType {
  id: number;
  title: string;
  offer: ServiceOfferType[];
  result: ServiceOfferType[];
  receives: string[];
}
export interface ServiceOfferType {
  bolt: string;
  desc: string | string[];
}

export interface MemberType {
  id: number;
  name: string;
  image: string;
  position: string;
  description: string;
  networks: NetworsType[];
  whatsapp: string;
  certificates: string[];
}
export interface NetworsType {
  link: string;
  icon: string;
}

export interface BloksType {
  title: string;
  description: string;
}
export interface NavigationType {
  path: string;
  link: string;
}
export interface QAType {
  q: string;
  a: string;
}

export interface CaseType {
  id: number;
  title: string;
  img: string;
  client: string;
  task: string;
  decision: string;
  result: string;
  summary: string;
}

export interface NewsType {
  id: number;
  title: string;
  img: string;
  news: NewsDescType[];
}

export interface NewsDescType {
  bolt: string;
  desc: string;
}

export interface FetchCaseType {
  lang: string;
  data: CaseType[];
}
export interface FetchNewsType {
  lang: string;
  data: NewsType[];
}
