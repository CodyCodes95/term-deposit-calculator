import { describe, it, expect } from "vitest";
import { calculateInterest } from "../termDepositCalculator";

describe("Term Deposit Interest Calculator", () => {
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

  //   it("calculates interest correctly for annual payments", () => {
  //     const totalBalance = calculateInterest({
  //       startDeposit: 10000,
  //       interestRate: 5,
  //       investmentTerm: 3,
  //       interestPaid: "Monthly",
  //     });
  //     expect(result).toBeCloseTo(16320, 2);
  //   });

  //   it("calculates interest correctly at maturity", () => {
  //     const totalBalance = calculateInterest({
  //       startDeposit: 10000,
  //       interestRate: 5,
  //       investmentTerm: 3,
  //       interestPaid: "Monthly",
  //     });
  //     expect(result).toBeCloseTo(20500, 2);
  //   });

  //   it("handles zero interest rate", () => {
  //     const totalBalance = calculateInterest({
  //       startDeposit: 10000,
  //       interestRate: 5,
  //       investmentTerm: 3,
  //       interestPaid: "Monthly",
  //     });
  //     expect(result).toBeCloseTo(10000, 2);
  //   });

  // Add more tests as needed to cover edge cases and other scenarios
});
