import 'babel-polyfill';
import path from 'path';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import IceVideo from '../src/index';

import '../src/assets/sass/video.scss';
import './example.scss';

const render = (Component) => {
  const settings = {
    // width: 800,
    // height: 600,
    loop: true,
    autoPlay: true,
    preload: 'auto',
    poster: '',
    volume: 0,
    // getDanmukuUrl: 'http://127.0.0.1:3001/danmuku',
    // sendDanmukuUrl: 'http://127.0.0.1:3001/senddanmu',
    getDanmukuUrl: 'https://api.coolecho.net/dmk/danmuku',
    sendDanmukuUrl: 'https://api.coolecho.net/dmk/senddanmu',
    controls: true,
    scale: '16:9',
    src: './video.mp4',
    duration: 6000,
  };
  ReactDOM.render(
    <AppContainer>
      <div>
        <section className="jumbotron-header text-center mb-3 jumbotron">
          <div className="container">
            <h1 className="title">Ice-Video</h1>
            <p className="lead">The web danmuku video player built from the ground up for an HTML5 world using React library.</p>
          </div>
        </section>
        <div className="palyer-container">
          <Component {...settings} />
        </div>
      </div>
    </AppContainer>,
    document.querySelector('#root')
  );
};

render(IceVideo);

if (module.hot) {
  module.hot.accept('../src/IceVideo', () => {
    const newApp = require('../src/IceVideo').default;
    render(newApp);
  });
}
