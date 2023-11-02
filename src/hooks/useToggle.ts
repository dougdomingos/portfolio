import { useCallback, useState } from 'react';

const useToggle = (defaultValue?: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(defaultValue || false);

  const toggle = useCallback(() => setValue(!value), [value]);

  return [value, toggle];
};

export default useToggle;
