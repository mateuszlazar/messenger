type UserId = string;

export interface IRoom {
  id: string;
  name: string;
  slug: string;
  createdAt: number;
  createdBy: UserId | null;
}
