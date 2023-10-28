const MainTitleWrapper = (size: number) =>
  `text-white text-${size}xl sm:text-${size + 1}xl lg:text-${
    size + 2
  }xl lg:leading-normal font-extrabold`;

const MainTitle = `text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600`;

export { MainTitle, MainTitleWrapper };
