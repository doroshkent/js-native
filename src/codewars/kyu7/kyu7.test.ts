import { nbYear } from "./GrowthOfAPopulation";
import { divisors } from "./divisors";

test("how many years", () => {
  const p0 = 1500000 ;
  const percent = 0;
  const aug = 10000;
  const p = 2000000;

  const result = nbYear(p0, percent, aug, p);

  expect(result).toBe(51)
})

test("divisors number", () => {
  const n = 4;

  const result = divisors(n)

  expect(result).toBe(3)
})
