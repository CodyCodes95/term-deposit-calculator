export type InterestPaidIntervalsType = keyof typeof interestPaidIntervals;

export const interestPaidIntervals = {
  Monthly: 12,
  Quarterly: 4,
  Annually: 1,
  "At Maturity": 0,
};

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
  const interestPaidInterval = interestPaidIntervals[interestPaid];
  const totalPeriods = investmentTerm * interestPaidInterval;

  if (interestPaidInterval === 0) {
    totalDeposit *= 1 + interestRate / 100;
  } else {
    for (let period = 0; period < totalPeriods; period++) {
      const interest = (totalDeposit * (interestRate / 100)) / interestPaidInterval;
      totalDeposit += interest;
    }
  }
  return totalDeposit;
};
