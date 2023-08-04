import React, { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  artData: IArtData;
}
const ArtCompact: React.FC<IProps> = ({ artData }) => {
  return (
    <article className="bg-white px-6 py-4 absolute bottom-16 left-0 right-24 tablet:right-auto tablet:bottom-auto tablet:left-1/3 tablet:px-10 tablet:py-5 tablet:top-0 large-desktop:left-1/2 flex flex-col">
      <span className="text-2xl font-bold tablet:text-6xl">{artData.name}</span>
      <span className="text-dark-gray pt-2 tablet:py-5">{artData.artist.name}</span>
    </article>
  );
};

export { ArtCompact };
