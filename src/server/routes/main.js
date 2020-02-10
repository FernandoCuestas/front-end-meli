import React from 'react';
import { renderToString } from 'react-dom/server';
import render from '../render';
import App from '../../frontend/routes/App';

const main = (req, res, next) => {
  try {
    const html = renderToString(<App page={1} />);
    res.send(render(html));
  } catch (err) {
    next(err);
  }
};
const results = (req, res, next) => {
  try {
    // const query = req.query.num;
    const html = renderToString(<App page={2} />);
    res.send(render(html));
  } catch (err) {
    next(err);
  }
};
const detail = (req, res, next) => {
  try {
    // const query = req.query.num;
    const html = renderToString(<App page={3} />);
    res.send(render(html));
  } catch (err) {
    next(err);
  }
};

export { main, results, detail };
