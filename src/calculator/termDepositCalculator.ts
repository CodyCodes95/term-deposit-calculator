// Exporting type to use on the front end
export type InterestPaidIntervalsType = keyof typeof interestPaidIntervals;

// Paid interest intervals with user friendly key names to use on front end.
// This allows us to get the correct interval without a lot of condition checking.
export const interestPaidIntervals = {
  Monthly: 12,
  Quarterly: 4,
  Annually: 1,
  "At Maturity": 0,
};

// Parameters for the calculateInterest function
type CalculateInterestParameters = {
  startDeposit: number;
  interestRate: number;
  investmentTerm: number;
  interestPaid: InterestPaidIntervalsType;
};

export const calculateInterest = ({
  startDeposit,
  investmentTerm,
  interestRate,
  interestPaid,
}: CalculateInterestParameters) => {
  let totalBalance = startDeposit;
  //   Grab the interval from the interestPaidIntervals object.
  const interestPaidInterval = interestPaidIntervals[interestPaid];
  //   Calculate the total periods the interest will be paid, fallback to one if intervals are 0 (maturity)
  const totalPeriods = investmentTerm * (interestPaidInterval || 1);

  for (let period = 0; period < totalPeriods; period++) {
    // Calculate the interest for the current period and add it to the total deposit, or just add to the start deposit if interval is 0
    const interest =
      ((interestPaidInterval ? totalBalance : startDeposit) * (interestRate / 100)) / (interestPaidInterval || 1);
    totalBalance += interest;
  }

  return totalBalance;
};
