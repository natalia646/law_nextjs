export interface ServiceType {
  id: number;
  title: string;
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
  title:       string;
  description: string;
}
export interface NavigationType {
  path: string;
  link: string;
}
export interface CaseType {
  id:       number;
  title:    string;
  client:   string;
  task:     string;
  decision: string;
  result:   string;
  summary:  string;
}
