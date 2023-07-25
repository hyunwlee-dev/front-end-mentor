import data from '../db/data.json';

const getAllArtData = (): Promise<Art[]> => {
  const result = data.map(art => ({ id: art.name.replaceAll(' ', '-'), ...art }));
  return new Promise(function (resolve) {
    setTimeout(() => resolve(result), 1000);
  });
};

export { getAllArtData };
