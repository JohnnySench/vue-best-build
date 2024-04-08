import { customRef, isRef } from "vue";

export const useDebouncedRef = <T>(value?: T, delay = 200) => {
  let timeout: any;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return isRef(value) ? value.value as T : value;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (isRef(value)) value.value = newValue;
          else value = newValue;
          trigger();
        }, delay);
      },
    };
  });
};