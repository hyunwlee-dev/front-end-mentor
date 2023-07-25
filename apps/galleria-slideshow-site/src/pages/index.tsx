import { Header } from '@/components/Header';
import { Logo } from '@/components/Logo';
import { getAllArtData } from '@/utils';

export default function Home({ data }: { data: Art[] }) {
  return (
    <>
      <Header className="border border-solid border-med-gray">
        <Logo className="p-4 flex flex-row, flex-nowrap justify-between" />
      </Header>
      <main>
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
