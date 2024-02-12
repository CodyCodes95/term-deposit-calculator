import { describe, it, expect } from "vitest";
import { calculateInterest } from "../termDepositCalculator";

describe("Term Deposit Interest Calculator", () => {
  // calculates values correctly
  it("calculates interest correctly for monthly payments", () => {
    const totalBalance = calculateInterest({
      startDeposit: 10000,
      interestRate: 5,
      investmentTerm: 3,
      interestPaid: "Monthly",
    }).toFixed();
    expect(totalBalance).toBe("11615");
  });

  it("calculates interest correctly for quarterly payments", () => {
    const totalBalance = calculateInterest({
      startDeposit: 10000,
      interestRate: 5,
      investmentTerm: 3,
      interestPaid: "Quarterly",
    }).toFixed();
    expect(totalBalance).toBe("11608");
  });

  it("calculates interest correctly for annual payments", () => {
    const totalBalance = calculateInterest({
      startDeposit: 10000,
      interestRate: 5,
      investmentTerm: 3,
      interestPaid: "Annually",
    }).toFixed();
    expect(totalBalance).toBe("11576");
  });

  it("calculates interest correctly at maturity", () => {
    const totalBalance = calculateInterest({
      startDeposit: 10000,
      interestRate: 5,
      investmentTerm: 3,
      interestPaid: "At Maturity",
    }).toFixed();
    expect(totalBalance).toBe("11500");
  });

  // Validates user input

  it("throws an error if the interest rate is negative", () => {
    expect(() =>
      calculateInterest({
        startDeposit: 10000,
        interestRate: -5,
        investmentTerm: 3,
        interestPaid: "Monthly",
      })
    ).toThrow("Interest rate must be greater than 0");
  });

  it("throws an error if the start deposit is negative", () => {
    expect(() =>
      calculateInterest({
        startDeposit: -10000,
        interestRate: 5,
        investmentTerm: 3,
        interestPaid: "Monthly",
      })
    ).toThrow("Start deposit must be greater than 0");
  });

  it("throws an error if the investment term is negative", () => {
    expect(() =>
      calculateInterest({
        startDeposit: 10000,
        interestRate: 5,
        investmentTerm: -3,
        interestPaid: "Monthly",
      })
    ).toThrow("Investment term must be greater than 0");
  });
});
