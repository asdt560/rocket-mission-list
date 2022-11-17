import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';
import renderWithProviders from '../utils/utils-for-tests';

describe("'My Profile' page ", () => {
  test('renders reserved rockets', async () => {
    renderWithProviders(<App />);
    const rocketsPage = screen.getByText(/Rockets/i);
    fireEvent.click(rocketsPage);
    const rocketsList = await screen.findAllByText(/Reserve Rocket/i);
    fireEvent.click(rocketsList[0]);

    const myprofilePage = screen.getByText(/My Profile/i);
    fireEvent.click(myprofilePage);

    const activeRockets = await screen.findAllByText(/Cancel Reservation/i);
    expect(activeRockets).toHaveLength(1);
  });

  test('renders joined missions', async () => {
    renderWithProviders(<App />);

    const missionsPage = screen.getAllByText(/Missions/i);
    fireEvent.click(missionsPage[0]);
    const missionsList = await screen.findAllByText(/Join Mission/i);
    fireEvent.click(missionsList[0]);

    const myprofilePage = screen.getByText(/My Profile/i);
    fireEvent.click(myprofilePage);

    const activeMissions = await screen.findAllByText(/Leave Mission/i);
    expect(activeMissions).toHaveLength(1);
  });
});
