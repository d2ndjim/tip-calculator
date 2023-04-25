// import dollar from '../assets/images/icon-dollar.svg'
import { useState, useEffect } from "react";
import Amounts from "./Amounts";
import Input from "./Input";
import Percentage from "./TipPercentage";
import { ActiveButton } from "../types";

const Calculator = () => {
  const [bill, setBill] = useState<number | undefined>(0);
  const [tip, setTip] = useState<number | undefined>(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [people, setPeople] = useState<number | undefined>(0);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState<number | undefined>(undefined);
  const [activeButton, setActiveButton] = useState<ActiveButton>(null);

  console.log(bill);
  console.log(tip);
  console.log(people);
  console.log(tipAmount);
  console.log(total);

  useEffect(() => {
    if (
      bill !== undefined &&
      bill > 0 &&
      tip !== undefined &&
      tip > 0 &&
      people !== undefined &&
      people > 0
    ) {
      const tipAmount = (bill * tip) / 100 / people;
      const totalAmount = bill / people + tipAmount;
      setTipAmount(parseFloat(tipAmount.toFixed(2)));
      setTotal(parseFloat(totalAmount.toFixed(2)));
    }
  }, [bill, tip, people]);

  return (
    <div className="md:h-96 h-full md:w-2/3 rounded-2xl border border-solid border-white bg-White px-6 py-6 shadow">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex w-full flex-col gap-9 md:gap-6">
          <Input
            setValue={setValue}
            value={value === bill ? bill : undefined}
            label="Bill"
            classname="bill-container"
            setBill={setBill}
          />
          <Percentage
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            setTip={setTip}
          />
          <Input
            setValue={setValue}
            value={value === people ? people : undefined}
            label="Number of People"
            classname="people-container"
            setPeople={setPeople}
          />
        </div>
        <Amounts
          // setValue={setValue}
          setActiveButton={setActiveButton}
          setTotal={setTotal}
          setTipAmount={setTipAmount}
          setPeople={setPeople}
          setTip={setTip}
          setBill={setBill}
          bill={bill}
          tip={tip}
          people={people}
          tipAmount={tipAmount}
          total={total}
        />
      </div>
    </div>
  );
};

export default Calculator;
