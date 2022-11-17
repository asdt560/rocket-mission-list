import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';
import { renderWithProviders } from '../utils/utils-for-tests';

describe('Rockets page ', () => {
  test('renders rockets', async () => {
    renderWithProviders(<App />);

    const rocketsPage = screen.getByText(/Rockets/i);
    fireEvent.click(rocketsPage);

    const rocketsList = await screen.findAllByText(/Reserve Rocket/i);
    expect(rocketsList).toHaveLength(4);
  });

  test('reserve a rocket', async () => {
    renderWithProviders(<App />);

    const rocketsList = await screen.findAllByText(/Reserve Rocket/i);
    fireEvent.click(rocketsList[0]);

    const reservedRockets = await screen.findAllByText(/Cancel Reservation/i);
    expect(reservedRockets).toHaveLength(1);
  });

  test("display a 'reserved' badge when a rocket is reserved", async () => {
    renderWithProviders(<App />);

    const rocketsList = await screen.findAllByText(/Reserve Rocket/i);
    fireEvent.click(rocketsList[0]);

    const reservedBadge = await screen.findAllByText(/reserved/i);
    expect(reservedBadge).toHaveLength(1);
  });
});
