// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MetaGrid title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MetaGrid/i);
    expect(titleElement).toBeInTheDocument();
});
