import { render, cleanup } from '@testing-library/react';
import * as fc from 'fast-check';
import SectionTitle from './SectionTitle';

afterEach(cleanup);

// Feature: react-site-conversion, Property 1: SectionTitle renderiza com props corretas
// Validates: Requirements 2.3
describe('SectionTitle', () => {
  it('Property 1 — renderiza com props corretas', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        fc.option(fc.string()),
        fc.boolean(),
        (title, subtitle, light) => {
          const { container } = render(
            <SectionTitle title={title} subtitle={subtitle ?? undefined} light={light} />
          );
          // Title must be rendered inside the component
          const heading = container.querySelector('h2');
          expect(heading).toBeInTheDocument();
          expect(heading?.textContent).toBe(title);
          // When light=true, data-light attribute is set (CSS Modules hash class names in tests)
          if (light) {
            expect(container.firstChild).toHaveAttribute('data-light', 'true');
          } else {
            expect(container.firstChild).not.toHaveAttribute('data-light');
          }
          cleanup();
        }
      ),
      { numRuns: 100 }
    );
  });
});
