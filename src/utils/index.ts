import {
  RETINA_HD_RESOLUTION, RETINA_HD_RATIO, RETINA_RESOLUTION, RETINA_RATIO,
} from '../constants';

export const isRetinaHd = (): boolean => {
  if (window.matchMedia == null) {
    return false;
  }

  return window.matchMedia(RETINA_HD_RESOLUTION).matches
    || window.matchMedia(RETINA_HD_RATIO).matches
    || (window.devicePixelRatio ?? 0) >= 2;
};

export const isRetina = (): boolean => {
  if (window.matchMedia == null) {
    return false;
  }

  return window.matchMedia(RETINA_RESOLUTION).matches
    || window.matchMedia(RETINA_RATIO).matches
    || (window.devicePixelRatio ?? 0) > 1.3;
};

type ImageMap = Record<string, boolean>;
const imageMap: ImageMap = {};

export const checkImage = (src: string) => new Promise<boolean>((resolve) => {
  if (src in imageMap) {
    resolve(imageMap[src]);

    return;
  }

  const img = new Image();

  img.onload = (): void => {
    imageMap[src] = true;
    resolve(true);
  };

  img.onerror = (): void => {
    imageMap[src] = false;
    resolve(false);
  };

  img.src = src;
});

export const isEqualSource = <T = string | string[]>(prevSource: T, nextSource: T): boolean => {
  if (Array.isArray(prevSource) && Array.isArray(nextSource)) {
    return prevSource.join() === nextSource.join();
  }

  return prevSource === nextSource;
};
