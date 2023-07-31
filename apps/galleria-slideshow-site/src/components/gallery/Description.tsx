import React, { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  artData: IArtData;
}

const Description: React.FC<IProps> = ({ artData }) => {
  return (
    <section className="text-dark-gray mt-32 px-10 py-20 relative">
      <span className="text-9xl text-light-gray font-bold absolute top-0 right-10 -z-10">{artData.year}</span>
      <p className="text-xl leading-9 font-bold">{artData.description}</p>
      <a className="inline-block text-sm px-5 pt-20 uppercase underline" href={artData.source}>
        go to source
      </a>
    </section>
  );
};

export { Description };
