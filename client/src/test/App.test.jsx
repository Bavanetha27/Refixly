import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('contains navigation elements', () => {
    render(<App />);
    // Check if navigation elements are present
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
