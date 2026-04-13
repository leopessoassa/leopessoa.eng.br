import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
}

describe('Footer', () => {
  it('renders 3 columns with correct titles', () => {
    renderFooter();
    expect(screen.getByText('INGENIOUS')).toBeInTheDocument();
    expect(screen.getByText('LATEST POSTS')).toBeInTheDocument();
    expect(screen.getByText('OUR CONTACTS')).toBeInTheDocument();
  });

  it('renders about column text content', () => {
    renderFooter();
    expect(screen.getByText(/Etiam id scelerisque est/i)).toBeInTheDocument();
  });

  it('renders latest posts column with a post', () => {
    renderFooter();
    expect(screen.getByText('Magna arcu')).toBeInTheDocument();
    expect(screen.getByText('Alarm')).toBeInTheDocument();
  });

  it('renders contact email and phone', () => {
    renderFooter();
    expect(screen.getByText('Ingenious@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('(+123) 456 - 7890')).toBeInTheDocument();
  });

  it('renders social media links with aria-labels', () => {
    renderFooter();
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });

  it('renders social media icons with correct FontAwesome classes', () => {
    const { container } = renderFooter();
    expect(container.querySelector('.fa-facebook-f')).toBeInTheDocument();
    expect(container.querySelector('.fa-twitter')).toBeInTheDocument();
    expect(container.querySelector('.fa-instagram')).toBeInTheDocument();
    expect(container.querySelector('.fa-linkedin-in')).toBeInTheDocument();
  });

  it('renders copyright bar with correct text', () => {
    renderFooter();
    expect(screen.getByText(/Smart Home Automation WordPress Theme/i)).toBeInTheDocument();
    expect(screen.getByText('Ingenious')).toBeInTheDocument();
  });

  it('renders footer-bottom element', () => {
    const { container } = renderFooter();
    expect(container.querySelector('.footer-bottom')).toBeInTheDocument();
  });

  it('renders post thumbnail image with alt text', () => {
    const { container } = renderFooter();
    const img = container.querySelector('.thumb img') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('alt')).not.toBe('');
  });
});
