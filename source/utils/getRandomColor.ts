export const getRandomColor = (): string => {
  const letters: string = "0123456789ABCDEF";
  let color: string = "#";

  for (let index = 0; index < 6; index++) {
    const randomizedIndex: number = Math.floor(Math.random() * letters.length);

    color += letters[randomizedIndex];
  }

  return color;
};
