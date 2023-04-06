import { render, fireEvent, getByTestId } from '@testing-library/react';
import Counter from "../components/Counter";

let count, inc, dec, header;
beforeEach(() => {
  const { getByTestId } = render(<Counter />);
  count = getByTestId('count');
  inc = getByTestId('inc');
  dec = getByTestId('dec');
  header = getByTestId('header');
});

test('renders counter message', () => {
  expect(header.textContent).toBe('Counter');
});

test('should render initial count with value of 0', () => {
  expect(count.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  fireEvent.click(inc);
  expect(count.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  fireEvent.click(dec);
  expect(count.textContent).toBe('-1');
});
