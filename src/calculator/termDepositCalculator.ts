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
  // Validate the input
  validateCalculatorInput({ startDeposit, investmentTerm, interestRate, interestPaid });
  let totalBalance = startDeposit;
  //   Grab the interval from the interestPaidIntervals object.
  const interestPaidInterval = interestPaidIntervals[interestPaid];
  //   Calculate the total periods the interest will be paid, fallback to one if intervals are 0 (maturity)
  const totalPeriods = investmentTerm * (interestPaidInterval || 1);

  for (let period = 0; period < totalPeriods; period++) {
    // Calculate the interest for the current period and add it to the total deposit, or just add to the start deposit if interval is 0
    // This isn't very clear, would like to make this more explicit.
    const interest =
      ((interestPaidInterval ? totalBalance : startDeposit) * (interestRate / 100)) / (interestPaidInterval || 1);
    totalBalance += interest;
  }

  return totalBalance;
};

// Used to validate the calculator input at runtime
const validateCalculatorInput = (input: CalculateInterestParameters) => {
  // Start deposit validation
  if (typeof input.startDeposit !== "number") {
    throw new Error("Start deposit must be a number");
  }
  if (input.startDeposit <= 0) {
    throw new Error("Start deposit must be greater than 0");
  }
  // Interest rate validation
  if (typeof input.interestRate !== "number") {
    throw new Error("Interest rate must be a number");
  }
  if (input.interestRate <= 0) {
    throw new Error("Interest rate must be greater than 0");
  }
  // Investment term validation
  if (typeof input.investmentTerm !== "number") {
    throw new Error("Investment term must be a number");
  }
  if (input.investmentTerm <= 0) {
    throw new Error("Investment term must be greater than 0");
  }
  // Interest paid validation
  const interestPaidInterval = interestPaidIntervals[input.interestPaid];
  if (interestPaidInterval === undefined) {
    throw new Error("Invalid interest paid interval");
  }
};
