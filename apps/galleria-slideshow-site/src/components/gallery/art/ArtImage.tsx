import React, { ImgHTMLAttributes } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@hyunwlee/hook';
import { MediaQuery } from '@/types/mediaQuery';

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  artData: IArtData;
}
const ArtImage: React.FC<IProps> = ({ artData }) => {
  const tabletReached = useMediaQuery(MediaQuery.TABLET);
  const {large: largeSrc, small: smallSrc} = artData.images.hero;
  const {large, small} = artData.sizes.hero;
  return (
      <Image
        src={tabletReached ? largeSrc : smallSrc}
        width={tabletReached ? large.width : small.width}
        height={tabletReached ? large.height : small.height}
        alt={`${artData.name} image`}
    />
  );
};

export { ArtImage };
