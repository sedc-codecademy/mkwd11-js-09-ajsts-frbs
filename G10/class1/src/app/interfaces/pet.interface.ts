export enum PetType {
  dog = 'dog',
  cat = 'cat',
}

export interface IPet {
  id: number;
  name: string;
  color: string;
  age: number;
  type: PetType; // 'dog' | 'cat';
  hasOwner: boolean;
}
