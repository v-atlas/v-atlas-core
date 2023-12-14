export default function nullishFilter<T>(
  value: T | null | undefined | boolean
): value is T {
  return value !== null && value !== undefined && value !== false;
}
