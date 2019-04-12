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

  // constructor(fruit?: Fruit) {
  //   this.fruit = fruit;
  //   if (fruit) {
  //     this.reward = RewardType.TYPE_1;
  //     this.price = fruit.maxPrice;
  //   } else {
  //     this.reward = null;
  //     this.price = 0;
  //   }
  //   this.youHave = 0;
  //   this.youSell = 0;
  //   this.resources = 0;
  // }
}
