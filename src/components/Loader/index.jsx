import Lottie from 'react-lottie';

import animationData from '../../assets/loading.json';

export const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRadio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} width={300} height={300} />;
};
