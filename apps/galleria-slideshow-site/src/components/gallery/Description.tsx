import React, { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  artData: IArtData;
}

const Description: React.FC<IProps> = ({ className, artData }) => {
  return (
    <section className={`${className} pt-24 large-desktop:pt-36 text-dark-gray relative`}>
      <span className="text-8xl top-8 large-desktop:text-[200px] text-light-gray font-bold absolute tablet:top-10 large-desktop:top-0 right-0 tablet:left-0 -z-10">
        {artData.year}
      </span>
      <p className="text-sm leading-8 font-bold">{artData.description}</p>
      <a className="inline-block text-sm px-5 pt-20 uppercase underline" href={artData.source}>
        go to source
      </a>
    </section>
  );
};

export { Description };
