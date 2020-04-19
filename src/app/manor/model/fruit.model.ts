export interface Reward {
  name: string;
  price: number;
}

export interface Fruit {
  name: string;
  maxPrice: number;
  reward1: Reward;
  reward2: Reward;
}

type RewardType = 'TYPE_1' | 'TYPE_2';

export class FruitManor {
  fruit: Fruit;
  reward: RewardType;
  price: number;
  youHave: number;
  youSell: number;
  resources: number;
}
