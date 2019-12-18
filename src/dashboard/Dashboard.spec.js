// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

// what i want the testing to do 
// make sure the display is showing / working
// make sure the controls are there / working

test('dashboard renders w/o crashing', () => {
    render(<Dashboard />)
})