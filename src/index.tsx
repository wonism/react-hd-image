import React, {
  PureComponent, ReactNode, ImgHTMLAttributes,
} from 'react';

import {
  isRetinaHd, isRetina, isEqualSource, checkImage,
} from './utils';

type Props = {
  src: string | string[];
  skipCheck?: boolean;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>

type State = {
  ratio: 1 | 2 | 3;
};

export default class HDImage extends PureComponent<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      ratio: 1,
    };
  }

  public componentDidMount(): void {
    this.checkDisplayType();
  }

  public async componentDidUpdate(prevProps: Props, prevState: State) {
    if (!isEqualSource(prevProps.src, this.props.src)) {
      this.checkDisplayType();
    } else if (prevState.ratio !== this.state.ratio) {
      const loaded = await checkImage(this.source);

      if (!loaded) {
        this.setState({ ratio: 1 });
      }
    }
  }

  private get source(): string {
    const { ratio } = this.state;
    const { src } = this.props;

    if (Array.isArray(src)) {
      return src[ratio - 1] ?? src[ratio - 2] ?? src[0];
    }

    if (ratio === 1) {
      return src;
    }

    const suffix = `@${ratio}x`;
    const matched = src.match(/(.+)(\.[^.]+)$/);

    if (matched == null) {
      return src + suffix;
    }

    const [, filename, extname] = matched;

    return filename + suffix + extname;
  }

  private checkDisplayType(): void {
    if (this.props.skipCheck) {
      return;
    }

    if (isRetinaHd()) {
      this.setState({ ratio: 3 });
    } else if (isRetina()) {
      this.setState({ ratio: 2 });
    }
  }

  public render(): ReactNode {
    const { src, ...props } = this.props;

    return (
      <img src={this.source} {...props} />
    );
  }
}
