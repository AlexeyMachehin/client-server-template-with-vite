import AuthGuard from '@/features/authGuard/AuthGuard';
import Chat from '@/features/forumPage/components/chat/Chat';
import UnAuthGuard from '@/features/unAuthGuard/UnAuthGuard';
import ForumPage from '@/pages/forumPage/ForumPage';
import GamePage from '@/pages/GamePage/GamePage';
import Login from '@/pages/Login/Login';
import Signup from '@/pages/Signup/Signup';
import StartPage from '@/pages/startPage/StartPage';
import LeaderBoard from '../../pages/leaderBoardPage/LeaderBoardPage';
import {
  BrowserRouter,
  MemoryRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AppRoutes } from '@/App';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import '@testing-library/jest-dom';

// export const renderWithRouter = (component: any, initialRoute = '/') => {
//   return (
//     <MemoryRouter initialEntries={[initialRoute]}>
//       <Provider store={store}>
//         <AppRoutes />
//       </Provider>
//     </MemoryRouter>
//   );
// };

// test('redirect to page', async () => {
//   render(renderWithRouter(<Login />, ''));
// //   expect(screen.findByTitle(content => content === 'dgdfgfdg')).toBeTruthy()
// });

// describe('Routes rendering', () => {
//   test('renders Login component when on /login route', () => {
//     render(
//       <MemoryRouter initialEntries={['/login']}>
//         <Provider store={store}>
//           <Routes>
//             <Route path="/login" element={<Signup />} />
//           </Routes>
//         </Provider>
//       </MemoryRouter>
//     );

//     // const loginElement = screen.getByRole('heading', { name: 'Login' });
//     // expect(loginElement).toBeInTheDocument();
//   });

//   test('renders Signup component when on /signup route', () => {
//     render(
//       <MemoryRouter initialEntries={['/signup']}>
//         <Provider store={store}>
//           <Routes>
//             <Route path="/signup" element={<Signup />} />
//           </Routes>
//         </Provider>
//       </MemoryRouter>
//     );

//     const signupElement = screen.getByRole('heading', { name: 'Signup' });
//     expect(signupElement).toBeInTheDocument();
//   });

test('renders StartPage component when on / route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<StartPage />} />
        </Routes>
      </Provider>
    </MemoryRouter>
  );

  const startPageElement = screen.getByRole('heading', {
    name: 'BOMBERMAN',
  });
  expect(startPageElement).toBeInTheDocument();
});

//   test('renders GamePage component when on /game route', () => {
//     render(
//       <MemoryRouter initialEntries={['/game']}>
//         <Routes>
//           <Route path="/game" element={<GamePage />} />
//         </Routes>
//       </MemoryRouter>
//     );

//     const gamePageElement = screen.getByRole('heading', {
//       name: 'Welcome to the Game',
//     });
//     expect(gamePageElement).toBeInTheDocument();
//   });

//   test('renders ForumPage component when on /forum route', () => {
//     render(
//       <MemoryRouter initialEntries={['/forum']}>
//         <Routes>
//           <Route path="/forum" element={<ForumPage />} />
//         </Routes>
//       </MemoryRouter>
//     );

//     const forumPageElement = screen.getByRole('heading', {
//       name: 'Welcome to the Forum',
//     });
//     expect(forumPageElement).toBeInTheDocument();
//   });

//   test('renders Chat component when on /forum/:mainTopic route', () => {
//     render(
//       <MemoryRouter initialEntries={['/forum/topic1']}>
//         <Routes>
//           <Route path="/forum" element={<ForumPage />} />
//           <Route path="/forum/:mainTopic" element={<Chat />} />
//         </Routes>
//       </MemoryRouter>
//     );

//     const chatElement = screen.getByRole('heading', { name: 'Chat' });
//     expect(chatElement).toBeInTheDocument();
//   });

//   test('renders Chat component when on /forum/:mainTopic/:id route', () => {
//     render(
//       <MemoryRouter initialEntries={['/forum/topic1/1']}>
//         <Routes>
//           <Route path="/forum" element={<ForumPage />} />
//           <Route path="/forum/:mainTopic" element={<Chat />} />
//           <Route path="/forum/:mainTopic/:
