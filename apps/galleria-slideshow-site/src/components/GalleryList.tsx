import React, { HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";

interface IProps extends HTMLAttributes<HTMLUListElement> {
  artList: Art[];
}
const GalleryList: React.FC<IProps> = ({artList}) => {
  return (
    <ul className="p-10 desktop:pt-10 desktop:p-0 columns-1 mobile:columns-2 tablet:columns-3 desktop:columns-4 cursor-pointer">
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
  )
}

export {GalleryList};
