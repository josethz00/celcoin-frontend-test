/**
 * Simple function to verify if an array is empty or not.
 * @param {any[]} arr
 * @returns {boolean}
 */
export function isArrayEmpty(arr: any[]): boolean {
  return Array.isArray(arr) && arr.length > 0;
}
