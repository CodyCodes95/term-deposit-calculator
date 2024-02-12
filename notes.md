# Term Depsoit Calculator Notes

## Requirements

Build a very simple term deposit calculator that takes as inputs:
- Start deposit amount (e.g. $10,000)
- Interest rate (e.g. 1.10%)
- Investment term (e.g. 3 years)
- Interest paid (Monthly, Quarterly, Annually, At Maturity)
  
And produces as output:
- Final balance (e.g. $10,330 on the above inputs, interest paid At Maturity)

## Notes

#### Maintainability

What requirements could change that I should consider?

- Different intervals that interest can be paid in
- Option to view total without reinvesting proceeds
- Allowing extra deposits to be entered
- What outputs are displayed to the end user (final balance, total interest earned etc.)
- Displaying a historic analysis of interest earned across the duration of the investment

Considerations:

- Strict type safety is vital
- Unit tests to ensure current functionality is unaffected.

#### Feedback

What feedback do I need to provide back to the user, including errors?

- Final output, how should it be displayed? Looking at examples, rounding up probably makes the most sense, however this should probably only be done on the front end. The function should return the exact number in case that level of specificity needs to be used somewhere else not user facing.
- Feedback given when incorrect inputs are provided should be considered. Although options like investment periods can be controlled on the front end through a dropdown, error handling is still important incase these functions may be used elsewhere in the codebase, or via API.