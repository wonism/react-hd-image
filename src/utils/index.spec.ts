import mediaQuery from 'css-mediaquery';
import jsdom from 'jsdom';

import { RETINA_HD_RESOLUTION, RETINA_HD_RATIO, RETINA_RESOLUTION, RETINA_RATIO } from '../constants';

import {
  isRetinaHd,
  isRetina,
  checkImage,
  isEqualSource,
} from '.';

describe('isRetinaHd', () => {
  const defaultQuery = {
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };

  beforeEach(() => {
    global.window = new jsdom.JSDOM().window;
    global.document = window.document;
  });

  afterEach(() => {
    global.devicePixelRatio = 1;
  });

  it('It returns false if matchMedia is not supported.', () => {
    delete window.matchMedia;
    expect(isRetinaHd()).toBe(false);
  });

  it('It returns true if device resolution is higher than 192dpi.', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      ...defaultQuery,
      matches: query === RETINA_HD_RESOLUTION,
      media: query,
    }));

    expect(isRetinaHd()).toBe(true);

    window.matchMedia.mockRestore();
  });

  it('It returns true if device pixel ratio is higher than 2.', () => {
    {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        ...defaultQuery,
        matches: query === RETINA_HD_RATIO,
        media: query,
      }));

      expect(isRetinaHd()).toBe(true);

      window.matchMedia.mockRestore();
    }

    {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        ...defaultQuery,
        matches: false,
        media: query,
      }));

      window.devicePixelRatio = 2;

      expect(isRetinaHd()).toBe(true);

      window.matchMedia.mockRestore();
    }
  });

  it('It returns false if device is not retina hd.', () => {
    {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        ...defaultQuery,
        matches: false,
        media: query,
      }));

      window.devicePixelRatio = null;

      expect(isRetinaHd()).toBe(false);

      window.matchMedia.mockRestore();
    }
  });
});

describe('isRetina', () => {
  const defaultQuery = {
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };

  beforeEach(() => {
    global.window = new jsdom.JSDOM().window;
    global.document = window.document;
  });

  afterEach(() => {
    global.devicePixelRatio = 1;
  });

  it('It returns false if matchMedia is not supported.', () => {
    delete window.matchMedia;

    expect(isRetina()).toBe(false);
  });

  it('It returns true if device resolution is higher than 124dpi.', () => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
      ...defaultQuery,
      matches: query === RETINA_RESOLUTION,
      media: query,
    }));

    expect(isRetina()).toBe(true);

    window.matchMedia.mockRestore();
  });

  it('It returns true if device pixel ratio is higher than 1.3.', () => {
    {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        ...defaultQuery,
        matches: query === RETINA_RATIO,
        media: query,
      }));

      expect(isRetina()).toBe(true);

      window.matchMedia.mockRestore();
    }

    {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        ...defaultQuery,
        matches: false,
        media: query,
      }));

      window.devicePixelRatio = 2;

      expect(isRetina()).toBe(true);

      window.matchMedia.mockRestore();
    }
  });

  it('It returns false if device is not retina.', () => {
    {
      window.matchMedia = jest.fn().mockImplementation(query => ({
        ...defaultQuery,
        matches: false,
        media: query,
      }));

      window.devicePixelRatio = null;

      expect(isRetina()).toBe(false);

      window.matchMedia.mockRestore();
    }
  });
});

describe('checkImage', () => {
  beforeAll(() => {
    Object.defineProperty(global.Image.prototype, 'src', {
      set(src) {
        if (src === 'some-wrong-image-path') {
          this.onerror();
        } else {
          this.onload();
        }
      },
    });
  });

  it('Image loaded successfully.', () => {
    const p1 = checkImage('some-image-path');

    p1.then((loaded) => {
      expect(loaded).toBe(true);
    });

    const p2 = checkImage('some-image-path');

    p2.then((loaded) => {
      expect(loaded).toBe(true);
    });
  });

  it('Image failed to be loaded.', () => {
    const p1 = checkImage('some-wrong-image-path');

    p1.then((data) => {
      expect(data).toBe(false);
    });
  });
});

describe('isEqualSource', () => {
  it('Check two variable are equal or not', () => {
    expect(isEqualSource('some-path', 'some-path')).toBe(true);
    expect(isEqualSource('some-path', 'some-other-path')).toBe(false);
    expect(isEqualSource('some-path', ['some-path'])).toBe(false);
    expect(isEqualSource(['some-path'], ['some-path'])).toBe(true);
    expect(isEqualSource(['some-path'], ['some-other-path'])).toBe(false);
  });
});
