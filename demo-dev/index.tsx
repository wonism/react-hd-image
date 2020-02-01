import React, { useState, useMemo, useEffect } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import HDImage from '../src';
import { isRetinaHd, isRetina } from '../src/utils';

const appRoot = document.getElementById('root');

const displayTypeMap: Record<number, string> = {
  [-1]: 'being checked...',
  [1]: 'Normal Display',
  [2]: 'Retina Display',
  [3]: 'HD Display',
};

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background-color: #100317;
    font-family: Sans-serif;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
  }

  main {
    margin: auto;
    max-width: 720px;
  }

  img {
    width: 720px;
    max-width: 100%;
  }

  hr {
    margin: 2em 0;
  }

  figure {
    margin: 0;
  }

  figcaption {
    margin: 1.6em 0;
    font-size: 1.5em;
  }

  pre {
    display: block;
    position: relative;
    padding: 20px 0px 0px;
    background: rgb(38, 50, 56);
    border-radius: 5px;

    &::before {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 20px;
      width: 10px;
      height: 10px;
      background-color: #ff5f56;
      content: "";
      border-radius: 50%;
    }

    &::after {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 40px;
      width: 10px;
      height: 10px;
      background-color: #ffdb2e;
      border-radius: 50%;
      content: "";
    }
  }

  code {
    display: inline-block;
    padding: 1.6em;
    color: #dcdcdc;
    background: none;
    border: 0;
    font-family: Inconsolata, monospace;
    overflow-wrap: normal;

    &::before {
      display: inline-block;
      position: absolute;
      top: 15px;
      left: 60px;
      width: 10px;
      height: 10px;
      background-color: #27c93f;
      content: "";
      border-radius: 50%;
    }
  }
`;

const App = () => {
  const [ratio, setRatio] = useState<number>(-1);
  const displayType = useMemo(() => displayTypeMap[ratio], [ratio]);

  useEffect(() => {
    if (isRetinaHd()) {
      setRatio(3);
    } else if (isRetina()) {
      setRatio(2);
    } else {
      setRatio(1);
    }
  }, []);

  return (
    <>
      <GlobalStyle />

      <h1>
        {`React HD Image example page. (Your display type is ${displayType})`}
      </h1>

      <div>
        <figure>
          <HDImage
            src="./ironman.jpg"
            alt="Iron Man"
          />

          <figcaption>
            {ratio > 1 ? 'High resolution image will be loaded' : 'Medium resolution image will be loaded'}
          </figcaption>
        </figure>
        <pre>
          <code>
            {
`<HDImage
  src="./ironman.jpg"
  alt="Iron Man"
/>`
            }
          </code>
        </pre>
      </div>

      <hr />

      <div>
        <figure>
          <HDImage
            src={[
              './winterscape.jpg',
              './winterscape-retina-version.jpg',
              './winterscape-hd-version.jpg',
            ]}
            alt="House"
          />

          <figcaption>
            If the suffix of diffent resolution images is not predictable,
            You can pass an array of several resolution images.
            (You can omit the third one.)
          </figcaption>
        </figure>
        <pre>
          <code>
            {
`<HDImage
  src={[
    './winterscape.jpg',
    './winterscape-retina-version.jpg',
    './winterscape-hd-version.jpg',
  ]}
  alt="House"
/>`
            }
          </code>
        </pre>
      </div>

      <hr />

      <div>
        <figure>
          <HDImage
            src="./moon.jpg"
            alt="Moon"
          />

          <figcaption>
            This image does not have high resolution version.
          </figcaption>
        </figure>
        <pre>
          <code>
            {
`<HDImage
  src="./moon.jpg"
  alt="Moon"
/>`
            }
          </code>
        </pre>
      </div>

      <hr />

      <div>
        <figure>
          <HDImage
            src="./ironman.jpg"
            alt="Iron Man"
            skipCheck
          />

          <figcaption>
            If you set skipCheck to true, high resolution image won't be rendered.
          </figcaption>
        </figure>
        <pre>
          <code>
            {
`<HDImage
  src="./ironman.jpg"
  alt="Iron Man"
  skipCheck
/>`
            }
          </code>
        </pre>
      </div>
    </>
  );
};

render(<App />, appRoot);
