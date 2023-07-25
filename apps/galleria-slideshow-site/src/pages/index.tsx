import { getAllArtData } from '@/utils';

export default function Home({ data }: { data: Art[] }) {
  return (
    <>
      <main>
        <h1 className="text-grays-dark-gray text-3xl font-bold underline"></h1>
        {data?.map(item => (
          <div className={'text-xs'} key={item.id}>
            {item.id}
          </div>
        ))}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const data = await getAllArtData();
    return {
      props: {
        data,
      },
    };
  } catch {
    console.error('response error...');
  }
};
