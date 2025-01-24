export interface ISubtopic {
  id: number;
  name: string;
  description: string | null;
  topicId: number;
  imageUrl: string | null;
  artStyles: number[];
}
