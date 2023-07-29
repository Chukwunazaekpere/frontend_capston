import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders booking-form header text", () => {
  // render App component
  render(<BookingForm />)

  // get booking-form
  const bookingFormHeadText = screen.getByText('Book Now')

  // test assumption
  expect(bookingFormHeadText).toBeInTheDocument()
})