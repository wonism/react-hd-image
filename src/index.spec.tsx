import React from 'react';
import { shallow, mount } from 'enzyme';

import HDImage from '.';
import * as utils from './utils';

describe('<HDImage />', () => {
  beforeEach(() => {
    global.document.body.innerHTML = '';
  });

  it('should render successfully.', () => {
    const wrapper = shallow(<HDImage />);
    expect(wrapper.length).toBe(1);
  });

  it('should render img.', () => {
    const wrapper = shallow(<HDImage />);
    expect(wrapper.find('img').length).toBe(1);
  });

  it('`src` of img is string', () => {
    {
      const wrapper = shallow(<HDImage src={['some-path']} />);
      expect(typeof wrapper.find('img').props().src).toBe('string');
    }

    {
      const wrapper = shallow(<HDImage src="some-path" skipCheck />);
      expect(typeof wrapper.find('img').props().src).toBe('string');
    }
  });

  it('fallback image will be rendered if array of image sources is too short to render high resolution.', () => {
    jest.spyOn(utils, 'isRetinaHd').mockImplementation(jest.fn().mockReturnValue(true));

    const spy = jest.spyOn(HDImage.prototype, 'componentDidUpdate');
    const wrapper = shallow(<HDImage src={['some-path']} />);

    wrapper.instance().componentDidUpdate({ src: ['some-path'] }, { ratio: 2 });

    expect(wrapper.find('img').props().src).toBe('some-path');
    expect(wrapper.find('img').props().src).not.toBe('some-path@2x');

    utils.isRetinaHd.mockRestore();
  });

  it('if component did mount, `checkDisplayType` will be fired.', () => {
    const spy = jest.spyOn(HDImage.prototype, 'componentDidMount');
    const wrapper = shallow(<HDImage src="some-path" />);

    wrapper.instance().checkDisplayType = jest.fn();
    expect(wrapper.instance().checkDisplayType).toBeCalledTimes(0);

    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().checkDisplayType).toBeCalledTimes(1);
  });

  it('if `src` is changed, `checkDisplayType` will be fired.', () => {
    const spy = jest.spyOn(HDImage.prototype, 'componentDidUpdate');
    const wrapper = shallow(<HDImage src="some-path" />);

    wrapper.instance().checkDisplayType = jest.fn();
    expect(wrapper.instance().checkDisplayType).toBeCalledTimes(0);

    wrapper.instance().componentDidUpdate({ src: 'some-other-path' });
    expect(spy).toHaveBeenCalled();
    expect(wrapper.instance().checkDisplayType).toBeCalledTimes(1);
  });

  it('`ratio` is changed, `checkImage` will be fired.', () => {
    const spy = jest.spyOn(HDImage.prototype, 'componentDidUpdate');
    const wrapper = shallow(<HDImage src="some-path" />);

    jest.spyOn(utils, 'checkImage').mockImplementation(() => Promise.resolve(true));

    expect(utils.checkImage).toBeCalledTimes(0);

    wrapper.instance().componentDidUpdate({ src: 'some-path' }, { ratio: 3 });

    expect(utils.checkImage).toBeCalledTimes(1);

    utils.checkImage.mockRestore();
  });

  it('if ratio is 2 or 3, src will have suffix.', () => {
    {
      const src = 'some-path';

      jest.spyOn(utils, 'isRetinaHd').mockImplementation(jest.fn().mockReturnValue(true));

      const spy = jest.spyOn(HDImage.prototype, 'componentDidMount');
      const wrapper = shallow(<HDImage src={src} />);

      wrapper.instance().componentDidMount();

      expect(wrapper.find('img').props().src).toBe(src + '@3x');

      utils.isRetinaHd.mockRestore();
    }

    {
      const src = 'some-path.png';

      jest.spyOn(utils, 'isRetina').mockImplementation(jest.fn().mockReturnValue(true));

      const spy = jest.spyOn(HDImage.prototype, 'componentDidMount');
      const wrapper = shallow(<HDImage src={src} />);

      wrapper.instance().componentDidMount();

      expect(wrapper.find('img').props().src).toBe(src.split('.').join('@2x.'));

      utils.isRetina.mockRestore();
    }
  });

  it('`ratio` is changed, `checkImage` will be fired.', () => {
    const spy = jest.spyOn(HDImage.prototype, 'componentDidUpdate');
    const wrapper = shallow(<HDImage src="some-path" />);

    jest.spyOn(utils, 'checkImage').mockImplementation(() => Promise.resolve(false));

    expect(utils.checkImage).toBeCalledTimes(0);

    wrapper.instance().componentDidUpdate({ src: 'some-path' }, { ratio: 3 });

    expect(utils.checkImage).toBeCalledTimes(1);

    utils.checkImage.mockRestore();
  });

  it('component did update excepts `ratio` and `src`, nothing happened.', () => {
    const spy = jest.spyOn(HDImage.prototype, 'componentDidUpdate');
    const wrapper = shallow(<HDImage src="some-path" />);

    wrapper.instance().checkDisplayType = jest.fn();
    jest.spyOn(utils, 'checkImage').mockImplementation(() => Promise.resolve(false));

    expect(wrapper.instance().checkDisplayType).toBeCalledTimes(0);
    expect(utils.checkImage).toBeCalledTimes(0);

    wrapper.instance().componentDidUpdate({ src: 'some-path', alt: 'Some image' }, { ratio: 1 });

    expect(wrapper.instance().checkDisplayType).toBeCalledTimes(0);
    expect(utils.checkImage).toBeCalledTimes(0);

    utils.checkImage.mockRestore();
  });
});
