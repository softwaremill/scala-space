import { useCallback, useState } from "react";

export const useToggle = (defaultValue?: boolean) => {
  const [value, setValue] = useState(!!defaultValue);
  const toggle = useCallback(() => setValue((prevState) => !prevState), []);

  return [value, toggle] as const;
};
