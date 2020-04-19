export class Resource {
  name: string;
  icon?: string;
  craft?: ResStock[];
}

export class ResStock {
  res: Resource;
  amount: number;
}

export class ResEntry {
  name: string;
  icon?: string;
  craft?: ResStockEntry[];
}

export class ResStockEntry {
  res: string;
  amount: number;
}
