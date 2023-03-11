import App from './src/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import React from 'react';

interface IRenderProps {
  path: string;
}

export const render = ({ path }: IRenderProps) => {
  return renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  );
};
