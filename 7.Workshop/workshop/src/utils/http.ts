export const fetchByUrl = <T>(url: string, httpConfig = {} as RequestInit) => {
  return fetch(url, httpConfig)
    .then((response) => response.json())
    .then((data: T) => data)
    .catch((error) => console.error(`Error: ${error}`));
};
