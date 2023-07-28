import Image from 'next/image';
import { getAllArtIds, getArt } from '@/utils';
import { BaseLayout } from '@/components';
import { Container } from '@hyunwlee/ui';

const Gallery = ({ artData }: { artData: Art }) => {
  return (
    <>
      <BaseLayout>
        <Container>
          {artData.name}
          <Image
            src={artData.images.gallery}
            width={artData.sizes.gallery.width}
            height={artData.sizes.gallery.height}
            alt={artData.description}
          />
        </Container>
        <footer>
          
        </footer>
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
