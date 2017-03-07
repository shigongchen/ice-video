import React from 'react';

const SVG = () => (
  <svg display="none" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <symbol id="video_play" viewBox="0 0 36 36">
      <path d="M25.8 18c0 .6-.3 1.1-.8 1.3L12.5 27c-.2.1-.5.2-.8.2-.8 0-1.5-.6-1.5-1.5V10c0-.8.7-1.5 1.5-1.5.3 0 .5.1.8.2l12.7 7.9c.4.5.6.9.6 1.4z" />
    </symbol>
    <symbol id="video_pause" viewBox="0 0 36 36">
      <path d="M23.5 28c-.8 0-1.5-.7-1.5-1.5v-17c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5zm-11 0c-.8 0-1.5-.7-1.5-1.5v-17c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5z" />
    </symbol>
    <symbol id="video_setting" viewBox="0 0 24 24">
      <path d="M21 11v2l-2 1v-.3c-.2.7-.5 1.5-.9 2.1l.2-.2.7 2.1-1.4 1.4-2.1-.7.2-.2c-.7.4-1.4.7-2.1.9h.4l-1 2h-2l-1-2h.3c-.7-.2-1.5-.5-2.1-.9l.2.2-2.1.7-1.4-1.4.7-2.1.2.2c-.4-.7-.7-1.4-.9-2.1v.3l-2-1v-2l2-1v.4c.2-.8.5-1.6 1-2.3l-.3.4-.7-2.2 1.4-1.4 2.1.7-.3.4c.7-.5 1.5-.8 2.3-1H10l1-2h2l1 2h-.4c.8.2 1.6.5 2.3.9l-.3-.3 2.1-.7 1.4 1.4-.7 2.1-.3-.3c.4.7.7 1.4.9 2.2V10l2 1zm-9-4c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
    </symbol>
    <symbol id="video_volume" viewBox="0 0 24 24">
      <path d="M22 12c0 2.2-.8 4.1-2 5.7v.2c0 .5-.4.9-.9 1l-1.3-1.8C19.1 15.8 20 14 20 12c0-2-.8-3.8-2.2-5-.3-.2-.5-.5-.5-.9 0-.6.4-1 1-1 .3 0 .5.1.7.3 1.9 1.6 3 4 3 6.6zm-5.3 3.3c-.1.1-.1.2-.2.2-.2.1-.3.2-.6.2-.6 0-1-.4-1-1 0-.3.2-.6.4-.8.4-.5.6-1.1.6-1.8s-.2-1.3-.6-1.8l.1-.1c-.2-.3-.4-.6-.4-.9 0-.6.4-1 1-1 .4 0 .8.3.9.6.7.8 1.1 1.9 1.1 3 0 1.4-.5 2.5-1.3 3.4zM13 3zm-.3 17.7c-.2.2-.4.3-.7.3-.3 0-.6-.1-.8-.4L5.8 17H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h2.8l5.4-3.6c.2-.3.5-.4.8-.4.2 0 .5.1.7.3.2.2.3.4.3.7v16c0 .3-.1.5-.3.7zM11 5.8L6.8 8.6c-.2.3-.5.4-.8.4H4v6h2c.3 0 .6.1.8.4l4.2 2.9V5.8z" />
    </symbol>
    <symbol id="video_volume_damping" viewBox="0 0 24 24">
      <path d="M16.7 15.3c-.1.1-.1.2-.2.2-.2.1-.3.2-.6.2-.6 0-1-.4-1-1 0-.3.2-.6.4-.8.4-.5.6-1.1.6-1.8s-.2-1.3-.6-1.8l.1-.1c-.2-.3-.4-.6-.4-.9 0-.6.4-1 1-1 .4 0 .8.3.9.6.7.8 1.1 1.9 1.1 3 0 1.4-.5 2.5-1.3 3.4zm-4 5.4c-.2.2-.4.3-.7.3s-.6-.1-.8-.4L5.8 17H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h2.8l5.4-3.6c.2-.3.5-.4.8-.4.2 0 .5.1.7.3s.3.4.3.7v16c0 .3-.1.5-.3.7zM11 5.8L6.8 8.6c-.2.3-.5.4-.8.4H4v6h2c.3 0 .6.1.8.4l4.2 2.9V5.8z" />
    </symbol>
    <symbol id="video_volume_mute" viewBox="0 0 24 24">
      <path d="M20.2 17.4L18.8 16c.8-1.1 1.2-2.5 1.2-3.9 0-2-.8-3.8-2.2-5-.3-.2-.5-.5-.5-.9 0-.6.4-1 1-1 .3 0 .5.1.7.3 1.8 1.6 3 4 3 6.7 0 1.8-.7 3.7-1.8 5.2zm-2.9-2.9L15.8 13c.1-.3.2-.6.2-1 0-.7-.2-1.3-.6-1.8l.1-.1c-.3-.2-.5-.5-.5-.8 0-.6.4-1 1-1 .4 0 .8.3.9.6.7.8 1.1 1.9 1.1 3 0 1-.3 1.9-.7 2.6zM13 3zm-2 2.8l-1.4 1-1.4-1.4 3-2c.2-.3.5-.4.8-.4.2 0 .5.1.7.3.2.2.3.4.3.7v6.2l-2-2V5.8zm9.7 14.9c-.4.4-1 .4-1.4 0l-16-16c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l16 16c.4.4.4 1 0 1.4zM4.2 7l2 2H4v6h2c.3 0 .6.1.8.4l4.2 2.8v-4.4l2 2V20c0 .2-.1.5-.3.7-.2.2-.4.3-.7.3-.3 0-.6-.1-.8-.4L5.8 17H3c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h1.2z" />
    </symbol>
    <symbol id="video_fullscreen" viewBox="0 0 24 24">
      <path d="M19.7 19.7c-.2.2-.5.3-.7.3h-4c-.6 0-1-.4-1-1s.4-1 1-1h1.6l-3.3-3.3c-.4-.4-.3-1.1.1-1.4.4-.4 1-.4 1.4 0l3.3 3.3V15c0-.6.4-1 1-1s1 .4 1 1v4c-.1.2-.2.5-.4.7zM19 10c-.6 0-1-.4-1-1V7.4l-3.3 3.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L16.6 6H15c-.6 0-1-.4-1-1s.4-1 1-1h4c.3 0 .5.1.7.3.2.2.3.5.3.7v4c0 .6-.4 1-1 1zM7.4 18H9c.6 0 1 .4 1 1s-.4 1-1 1H5c-.3 0-.5-.1-.7-.3-.2-.2-.3-.5-.3-.7v-4c0-.6.4-1 1-1s1 .4 1 1v1.6l3.3-3.3c.4-.4 1.1-.3 1.4.1.4.4.4 1 0 1.4L7.4 18zm1.9-7.3L6 7.4V9c0 .6-.4 1-1 1s-1-.4-1-1V5c0-.3.1-.5.3-.7.2-.2.5-.3.7-.3h4c.6 0 1 .4 1 1s-.4 1-1 1H7.4l3.3 3.3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0z" />
    </symbol>
    <symbol id="video_fullscreen_true" viewBox="0 0 24 24">
      <path d="M16.4 9H18c.6 0 1 .4 1 1s-.4 1-1 1h-4c-.3 0-.5-.1-.7-.3-.2-.2-.3-.5-.3-.7V6c0-.6.4-1 1-1s1 .4 1 1v1.6l3.3-3.3c.4-.4 1.1-.3 1.4.1.4.4.4 1 0 1.4L16.4 9zM10 19c-.6 0-1-.4-1-1v-1.6l-3.3 3.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L7.6 15H6c-.6 0-1-.4-1-1s.4-1 1-1h4c.3 0 .5.1.7.3.2.2.3.5.3.7v4c0 .5-.4 1-1 1zm0-8H6c-.6 0-1-.4-1-1s.4-1 1-1h1.6L4.3 5.7c-.4-.4-.4-1 .1-1.4.4-.4 1-.4 1.4 0L9 7.6V6c0-.6.4-1 1-1s1 .4 1 1v4c0 .3-.1.5-.3.7-.2.2-.5.3-.7.3zm4 2h4c.6 0 1 .4 1 1s-.4 1-1 1h-1.6l3.3 3.3c.4.4.4 1 0 1.4s-1 .4-1.4 0L15 16.4V18c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.3.1-.5.3-.7.2-.2.5-.3.7-.3z" />
    </symbol>
    <symbol id="play_icon" viewBox="0 0 100 100">
      <path d="M 18.56 10.20 Q 12.5,6.599 12.5,13.70 L 12.5 86.30 Q 12.5,94.301 18.56,89.80 L 81.44 53.50 Q 87.5,50 81.44,46.50 Z" transform="scale(1)" fill="white" />
    </symbol>
    <symbol id="video_repeat_true" viewBox="0 0 36 36">
      <path d="M5.5 10.5L0.1 15.5L3.5 15.5L3.5 18.5Q3.5 30.5, 13.5 30.5L26 30.5L24.5 29Q23 27.5, 21.5 27.5L17 27.5Q7.5 27.5, 7.5 18L7.5 15.5L10.9 15.5 Z" />
      <path d="M30.5 25.5L35.9 20.5L32.5 20.5L32.5 15.5Q32.5 5.5, 22 5.5L10 5.5L11.5 7Q13 8.5, 14.5 8.5L19 8.5Q28.5 8.5, 28.5 18L28.5 20.5L25.1 20.5 Z" />
    </symbol>
    <symbol id="video_repeat_false" viewBox="0 0 36 36">
      <path d="M5.5 10.5L0.1 15.5L3.5 15.5L3.5 18.5Q3.5 30.5, 13.5 30.5L26 30.5L24.5 29Q23 27.5, 21.5 27.5L17 27.5Q7.5 27.5, 7.5 18L7.5 15.5L10.9 15.5 Z" />
      <path d="M30.5 25.5L35.9 20.5L32.5 20.5L32.5 15.5Q32.5 5.5, 22 5.5L10 5.5L11.5 7Q13 8.5, 14.5 8.5L19 8.5Q28.5 8.5, 28.5 18L28.5 20.5L25.1 20.5 Z" />
      <path d="M5.5 7.7L30.5 31.2L30.5 28.3L5.5 4.2Z" />
    </symbol>
    <symbol id="video_loading" viewBox="0 0 44 44">
      <g fill="none" fillRule="evenodd" strokeWidth="2">
        <circle cx="22" cy="22" r="1">
          <animate
            attributeName="r"
            begin="0s" dur="1.8s"
            values="1; 20"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.165, 0.84, 0.44, 1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            begin="0s" dur="1.8s"
            values="1; 0"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.3, 0.61, 0.355, 1"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="22" cy="22" r="1">
          <animate
            attributeName="r"
            begin="-0.9s" dur="1.8s"
            values="1; 20"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.165, 0.84, 0.44, 1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-opacity"
            begin="-0.9s" dur="1.8s"
            values="1; 0"
            calcMode="spline"
            keyTimes="0; 1"
            keySplines="0.3, 0.61, 0.355, 1"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </symbol>
    <symbol id="loading_start" viewBox="0 0 135 140" width="135" height="140">
      <rect y="10" width="15" height="120" rx="6">
        <animate
          attributeName="height" begin="0.5s" dur="1s"
          values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"
        />
        <animate
          attributeName="y" begin="0.5s" dur="1s"
          values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"
        />
      </rect>
      <rect x="30" y="10" width="15" height="120" rx="6">
        <animate
          attributeName="height" begin="0.25s" dur="1s"
          values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"
        />
        <animate
          attributeName="y" begin="0.25s" dur="1s"
          values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"
        />
      </rect>
      <rect x="60" width="15" height="140" rx="6">
        <animate
          attributeName="height" begin="0s" dur="1s"
          values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"
        />
        <animate
          attributeName="y" begin="0s" dur="1s"
          values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"
        />
      </rect>
      <rect x="90" y="10" width="15" height="120" rx="6">
        <animate
          attributeName="height" begin="0.25s" dur="1s"
          values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"
        />
        <animate
          attributeName="y"begin="0.25s" dur="1s"
          values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"
        />
      </rect>
      <rect x="120" y="10" width="15" height="120" rx="6">
        <animate
          attributeName="height" begin="0.5s" dur="1s"
          values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"
        />
        <animate
          attributeName="y" begin="0.5s" dur="1s"
          values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"
        />
      </rect>
    </symbol>
  </svg>
);

SVG.displayName = 'IcePlayerSVG';

export default SVG;
