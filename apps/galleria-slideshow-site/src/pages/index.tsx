import { Header } from '@/components/Header';
import { Logo } from '@/components/Logo';
import { getAllArtData, sortMansonryArray } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ artList }: { artList: Art[] }) {
  return (
    <>
      <Header className="border border-solid border-med-gray">
        <Logo className="p-4 flex flex-row, flex-nowrap justify-between" />
      </Header>
      <main>
        <ul className="p-4 columns-1 mobile:columns-2 tablet:columns-3 desktop:columns-4 cursor-pointer">
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
      </main>
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
