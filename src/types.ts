export type PercentageProps = {
  setTip: (tip: number) => void;
  activeButton: ActiveButton;
  setActiveButton: (activeButton: ActiveButton) => void;
};

export type ActiveButton = 0 | 1 | 2 | 3 | 4 | null;

// export type Value = number | undefined;

export type AmountsProps = {
  tipAmount: number;
  total: number;
  bill: number | undefined;
  tip: number | undefined;
  people: number | undefined;
  setTip: (tip: number | undefined) => void;
  setBill: (bill: number | undefined) => void;
  setPeople: (people: number | undefined) => void;
  setTotal: (total: number) => void;
  setTipAmount: (tipAmount: number) => void;
  setActiveButton: (activeButton: ActiveButton) => void;
  // setValue: (value: number | undefined) => void;
};

export type InputProps = {
  label: string;
  classname: string;
  bill?: number;
  people?: number;
  value: number | undefined;
  setValue: (value: number | undefined) => void;
  setBill?: (bill: number) => void;
  setPeople?: (people: number) => void;
};
