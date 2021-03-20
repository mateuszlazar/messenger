type UserId = string;

export interface IRoom {
  name: string;
  slug: string;
  createdAt: number;
  createdBy: UserId | null;
}
