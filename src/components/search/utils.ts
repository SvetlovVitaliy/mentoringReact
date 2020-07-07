export function getHistoryParams(queryString: string, value: string = '') {
  const defaultPath = '/';
  if (value) {
    return `${defaultPath}search${queryString}`;
  } 
  return defaultPath;
}