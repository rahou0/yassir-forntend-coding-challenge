import { useEffect, useCallback, DependencyList } from 'react';

type EffectCallback = () => void;

export default function useDebounce(
  effect: EffectCallback,
  dependencies: DependencyList,
  delay: number
): void {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
