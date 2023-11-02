import { useEffect, useState } from 'react';

const useMediaQuery = (mediaQueryString: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);

    const listener = () => setMatches(!!mediaQueryList.matches);
    mediaQueryList.addEventListener('change', listener);

    listener();

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [mediaQueryString]);

  return matches;
};

export default useMediaQuery;
