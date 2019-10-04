import { useState } from 'react';

export const useInput = (initValue: string) => {
  const [value, setValue] = useState<string>(initValue);

  return {
    value,
    setValue,
    onChange: (e: any) => setValue(e.target.value),
  };
};
