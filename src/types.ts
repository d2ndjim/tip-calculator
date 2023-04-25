export type PercentageProps = {
  setTip: (tip: number) => void;
  activeButton: ActiveButton;
  setActiveButton: (activeButton: ActiveButton) => void;
};

export type ActiveButton = 0 | 1 | 2 | 3 | 4 | null;

export type Bill = number | null;

export type People = number | null;

export type AmountsProps = {
  tipAmount: number;
  total: number;
  bill: number;
  tip: number;
  people: number | undefined;
  setTip: (tip: number) => void;
  setBill: (bill: Bill) => void;
  setPeople: (people: People ) => void;
  setTotal: (total: number) => void;
  setTipAmount: (tipAmount: number) => void;
  setActiveButton: (activeButton: ActiveButton) => void;
};

export type InputProps = {
  mode: "bill" | "people";
  label: string;
  classname: string;
  bill?: Bill;
  people?: People;
  setBill?: (bill: Bill) => void;
  setPeople?: (people: People) => void;
};
