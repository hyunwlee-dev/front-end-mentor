import { BaseLayout } from '@/components';
import { getAllArtData, sortMansonryArray } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ artList }: { artList: Art[] }) {
  return (
    <>
      <BaseLayout>
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
      </BaseLayout>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const data = await getAllArtData();
    const artList = sortMansonryArray(data, 4);
    return {
      props: {
        artList,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
