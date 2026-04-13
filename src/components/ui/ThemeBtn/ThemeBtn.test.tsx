import { render, cleanup } from '@testing-library/react';
import * as fc from 'fast-check';
import ThemeBtn from './ThemeBtn';

afterEach(cleanup);

// Feature: react-site-conversion, Property 2: ThemeBtn aplica a variante correta
// Validates: Requirements 2.4
describe('ThemeBtn', () => {
  it('Property 2 — aplica a variante correta', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('btn-style-one', 'btn-style-two', 'btn-style-three') as fc.Arbitrary<
          'btn-style-one' | 'btn-style-two' | 'btn-style-three'
        >,
        (variant) => {
          const { container } = render(<ThemeBtn variant={variant}>Click</ThemeBtn>);
          // The variant string is applied directly as a class alongside CSS module classes
          expect(container.firstChild).toHaveClass(variant);
          cleanup();
        }
      ),
      { numRuns: 100 }
    );
  });
});
