import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portal Heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Steele Sports Portal/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders result table', () => {
  render(<App />)
  const linkElement = screen.getByText('Latest Match Results');
  expect(linkElement).toBeInTheDocument();
})

test('renders timetable table', () => {
  render(<App />)
  const linkElement = screen.getByText('QEO');
  expect(linkElement).toBeInTheDocument();
})

test('renders location map', () => {
  render(<App />)
  const linkElement = screen.getByTitle('mapembeded');
  expect(linkElement).toBeInTheDocument();
})

test('renders weather forecast', () => {
  render(<App />)
  expect(screen.getByText('In Bendigo')).toBeInTheDocument();
})

test('renders contact Form', () => {
  render(<App />)
  expect(screen.getByText('Share your thoughts with us')).toBeInTheDocument();
})

test('renders nav', () => {
  render(<App />)
  expect(screen.getByText(/Sports we follow/)).toBeInTheDocument();
})

test('renders footer', () => {
  render(<App />)
  expect(screen.getByText(/&copy; Steele Sports Portal 2022/)).toBeInTheDocument();
})



