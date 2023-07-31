import React, { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  artData: IArtData;
}
const ArtCompact: React.FC<IProps> = ({ artData }) => {
  return (
    <article className="bg-transparent w-full max-w-3xl absolute bottom-10 left-0">
      <div className="bg-white px-10 py-5 w-3/4 flex flex-col flex-nowrap gap-2">
        <span className="px-5 text-3xl font-bold">{artData.name}</span>
        <span className="px-5 text-dark-gray">{artData.artist.name}</span>
      </div>
    </article>
  );
};

export { ArtCompact };
