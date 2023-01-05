import { useState } from "react";

export function useField<T>(initialState: T) {
  const [values, setValue] = useState<T>(initialState);

  const onChangeHandler = ({ target }: { target: HTMLInputElement }) => {
    setValue((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  return { values, onChangeHandler };
}
