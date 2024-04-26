import { doSomeWork } from "./work";

export function fibonacci(n: number): number {
  doSomeWork(n);
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
