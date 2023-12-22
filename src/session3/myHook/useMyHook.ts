import { useState } from 'react';

export const useMyHook = () => {
  const [value, setValue] = useState('abc');

  const handleChangeText = () => {
    setValue('def');
  };

  return {
    value,
    handleChangeText,
  };
};
