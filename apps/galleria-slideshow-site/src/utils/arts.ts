import data from '../db/data.json';

const getAllArtData = (): Promise<Art[]> => {
  const result = data.map(art => ({ id: art.name.replaceAll(' ', '-'), ...art }));
  return new Promise(function (resolve) {
    setTimeout(() => resolve(result), 1000);
  });
};

const sortMansonryArray = (array: Art[], col: number) => {
  const masonryArry = [];
  let i = -1;
  while (++i < col) {
    for(let j = i; j < array.length; j += col) {
      masonryArry.push(array[j]);
    }
  }
  return masonryArry;
}

export { getAllArtData, sortMansonryArray };
