import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';
import renderWithProviders from '../utils/utils-for-tests';

describe('Missions page ', () => {
  test('renders missions', async () => {
    renderWithProviders(<App />);

    const missionsPage = screen.getByText(/Missions/i);
    fireEvent.click(missionsPage);

    const missionsList = await screen.findAllByText(/Join Mission/i);
    expect(missionsList).toHaveLength(10);
  });

  test('join to a mission', async () => {
    renderWithProviders(<App />);

    const missionsList = await screen.findAllByText(/Join Mission/i);
    fireEvent.click(missionsList[0]);

    const reservedRockets = await screen.findAllByText(/Leave Mission/i);
    expect(reservedRockets).toHaveLength(1);
  });

  test("display 'Active member' badge when user joined to a mission", async () => {
    renderWithProviders(<App />);

    const missionsList = await screen.findAllByText(/Join Mission/i);
    fireEvent.click(missionsList[0]);

    const joinedBadge = await screen.findAllByText(/Active member/i);
    expect(joinedBadge).toHaveLength(1);
  });
});
