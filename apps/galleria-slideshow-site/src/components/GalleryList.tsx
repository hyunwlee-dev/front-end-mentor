import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

const variants = {
  inital: { opacity: 0, y: 2 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      type: 'tween',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface IProps extends HTMLAttributes<HTMLUListElement> {
  artList: Art[];
}
const GalleryList: React.FC<IProps> = ({ artList }) => {
  return (
    <motion.section variants={variants} initial="inital" animate="animate" exit="exit">
      <ul className="columns-1 mobile:columns-2 tablet:columns-3 desktop:columns-4 cursor-pointer">
        {artList?.map(art => (
          <Link href={`/gallery/${art.id}`} key={art.id}>
            <li className={'relative mb-3'}>
              <Image
                src={art.images.thumbnail}
                width={art.sizes.thumbnail.width}
                height={art.sizes.thumbnail.height}
                alt={art.description}
              />
              <h2 className={'absolute text-white bottom-12 left-6'}>{art.name}</h2>
              <p className={'absolute text-xs text-med-gray bottom-8 left-6'}>{art.artist.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </motion.section>
  );
};

export { GalleryList };
