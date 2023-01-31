import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StartPage from './StartPage';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

// test('BOMBERMAN header: exists in the DOM', () => {
//   render(<StartPage />);
//   expect(screen.getByText<HTMLHeadingElement>('BOMBERMAN')).toBeInTheDocument();
// });

describe('Start page', () => {
  it('BOMBERMAN header: exists in the DOM', () => {
    render(<StartPage />);
    expect(
      screen.getByText<HTMLHeadingElement>('BOMBERMAN')
    ).toBeInTheDocument();
  });
});
