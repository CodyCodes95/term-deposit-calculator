import { useEffect, useState } from "react";
import {
  InterestPaidIntervalsType,
  calculateInterest,
  interestPaidIntervals,
} from "./calculator/termDepositCalculator";

const App = () => {
  // Initialise state with example default values

  const [initialDeposit, setInitialDeposit] = useState(10000);
  const [interestRate, setInterestRate] = useState(1.1);
  const [investmentTerm, setInvestmentTerm] = useState(3);
  const [interestInterval, setInterestInterval] = useState<InterestPaidIntervalsType>("Monthly");
  const [finalBalance, setFinalBalance] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    try {
      setFinalBalance(
        calculateInterest({
          startDeposit: initialDeposit,
          interestRate,
          investmentTerm,
          interestPaid: interestInterval,
        })
      );
      setErrorMessage("");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  }, [initialDeposit, interestRate, investmentTerm, interestInterval]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col gap-4">
        <h1 className="text-4xl">Term Deposit Calculator</h1>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="deposit">Starting deposit</label>
            <input
              type="text"
              name="deposit"
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rate">Interest rate</label>
            <input
              type="number"
              name="rate"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="deposit">Investment term (years)</label>
            <input
              type="number"
              name="deposit"
              value={investmentTerm}
              onChange={(e) => setInvestmentTerm(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="paymentInterval">Interest Paid</label>
            <select
              value={interestInterval}
              onChange={(e) => setInterestInterval(e.target.value as InterestPaidIntervalsType)}
              name="paymentInterval"
            >
              {Object.keys(interestPaidIntervals).map((interval) => (
                <option key={interval} value={interval}>
                  {interval}
                </option>
              ))}
            </select>
          </div>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="flex flex-col gap-2">
          <p className="font-bold">
            Final balace:{" "}
            {finalBalance.toLocaleString("en-AU", {
              style: "currency",
              currency: "AUD",
              maximumFractionDigits: 0,
            })}
          </p>
          <p>
            Total interest earned:{" "}
            {(finalBalance - initialDeposit).toLocaleString("en-AU", {
              style: "currency",
              currency: "AUD",
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
      </main>
      <footer className="flex w-full justify-center mt-auto">
        <a href="https://github.com/CodyCodes95/term-deposit-calculator">Github</a>
      </footer>
    </div>
  );
};

export default App;
