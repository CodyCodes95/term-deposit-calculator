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
  let totalDeposit = startDeposit;
  //   Grab the interval from the interestPaidIntervals object.
  const interestPaidInterval = interestPaidIntervals[interestPaid];
  //   Calculate the total periods the interest will be paid.
  const totalPeriods = investmentTerm * interestPaidInterval;

  // If the interest is paid at maturity, we can just calculate the interest once.
  if (interestPaidInterval === 0) {
    totalDeposit *= 1 + interestRate / 100;
  } else {
    // Otherwise, we calculate the interest for each period.
    for (let period = 0; period < totalPeriods; period++) {
      // Calculate the interest for the current period and add it to the total deposit.
      const interest = (totalDeposit * (interestRate / 100)) / interestPaidInterval;
      totalDeposit += interest;
    }
  }
  return totalDeposit;
};
