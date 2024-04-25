export interface ServiceType {
  id: number;
  title: string;
}

export interface MemberType {
  id: number;
  name: string;
  position: string;
  description: string;
}
export interface CommonInMembersType {
  id:           number;
  image:        string;
  network:      NetworkOfMember;
  certificates: string[];
}

export interface NetworkOfMember {
  linkedin: string;
  github:   string;
}
