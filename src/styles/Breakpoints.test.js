import { BreakAt, BreakpointSizes } from "./Breakpoints";

test.each([
  [BreakpointSizes.sm],
  [BreakpointSizes.md],
  [BreakpointSizes.lg],
  [BreakpointSizes.xl],
])("break at %ipx", (size) => {
  expect(BreakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});
