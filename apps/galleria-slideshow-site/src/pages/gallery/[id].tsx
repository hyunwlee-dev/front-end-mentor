import Image from 'next/image';
import { getAllArtIds, getArt } from '@/utils';
import { BaseLayout } from '@/components';
import { Button, Container } from '@hyunwlee/ui';

const Gallery = ({ artData }: { artData: Art }) => {
  return (
    <>
      <BaseLayout>
        <section className="p-10 relative">
          <Image
            className="desktop:hidden"
            src={artData.images.hero.small}
            width={artData.sizes.hero.small.width}
            height={artData.sizes.hero.small.height}
            alt={`${artData.name} image`}
          />
          <Image
            className="hidden desktop:block"
            src={artData.images.hero.large}
            width={artData.sizes.hero.large.width}
            height={artData.sizes.hero.large.height}
            alt={`${artData.name} image`}
          />
          <Button className="px-7 py-4 flex flex-nowrap justify-between items-center gap-5 bg-black absolute top-20 tablet:top-auto tablet:bottom-20 left-20 hover:opacity-70 hover:bg-dark-gray">
            <Image src="/shared/icon-view-image.svg" width={16} height={16} alt="view-image" />
            <span className="text-white font-sans text-xs font-bold tracking-widest uppercase">view image</span>
          </Button>
          <article className="bg-transparent w-full max-w-3xl absolute bottom-10 left-0">
            <div className="bg-white px-10 py-5 w-3/4 flex flex-col flex-nowrap gap-2">
              <span className="px-5 text-3xl font-bold">{artData.name}</span>
              <span className="px-5 text-dark-gray">{artData.artist.name}</span>
            </div>
          </article>
          <article className="absolute -bottom-32">
            <Image
              src={artData.artist.image}
              width={artData.sizes.artist.width}
              height={artData.sizes.artist.height}
              alt={`${artData.name} image`}
            />
          </article>
        </section>
        <section className="text-dark-gray mt-32 px-10 py-20 relative">
          <span className="text-9xl text-light-gray font-bold absolute top-0 right-10 -z-10">{artData.year}</span>
          <p className="text-xl leading-9 font-bold">{artData.description}</p>
          <a className="inline-block text-sm px-5 py-20 uppercase underline" href={artData.source}>
            go to source
          </a>
        </section>
        <footer></footer>
      </BaseLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllArtIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: Art }) => {
  const { id } = params;
  const artData = await getArt(id);
  return {
    props: {
      artData,
    },
  };
};

export default Gallery;
