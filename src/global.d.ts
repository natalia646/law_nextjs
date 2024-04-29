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
  whatsApp: string;
  certificates: string[];
}
export interface NetworsType {
  link: string;
  icon: string;
}
