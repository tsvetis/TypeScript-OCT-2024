import { fetchByUrl } from "../utils/http";

export class HttpService<T> {
  protected apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  create(body: T) {
    const config = {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };

    return fetchByUrl<T>(this.apiUrl, config);
  }

  protected getOne(id: number) {
    return fetchByUrl<T>(`${this.apiUrl}/${id}`) as Promise<T>;
  }

  getAll() {
    return fetchByUrl<T[]>(this.apiUrl) as Promise<T[]>;
  }

  update<T extends { id: number }>(body: T) {
    const config = {
      method: "PUT",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    };

    return fetchByUrl<T>(`${this.apiUrl}/${body.id}`, config);
  }

  delete(id: number) {
    const config = { method: "DELETE" };
    return fetchByUrl<T>(`${this.apiUrl}/${id}`, config);
  }
}
