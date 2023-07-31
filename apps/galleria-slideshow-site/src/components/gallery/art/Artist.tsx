import React, { HTMLAttributes } from 'react';
import Image from 'next/image';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  artData: IArtData;
}
const Artist: React.FC<IProps> = ({ artData }) => {
  return (
    <article className="absolute -bottom-32">
      <Image
        src={artData.artist.image}
        width={artData.sizes.artist.width}
        height={artData.sizes.artist.height}
        alt={`${artData.name} image`}
      />
    </article>
  );
};

export { Artist };
