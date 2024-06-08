import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class HttpClient {
  url: string = `${environment.apiUrl}`;

  async get(endPoint: string, params: any) {
    const queryParams = new URLSearchParams(params).toString();
    const url =
      params !== null
        ? `${this.url}/${endPoint}?${queryParams}`
        : `${this.url}/${endPoint}`;
    const requestOptions = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmJlNTBlMjY2ZDZkMTdiZDI4NWQyOWVlMmJjYjQ4YyIsInN1YiI6IjY2NjM5YzVlNjk3YjQ0Nzk1OTA5NTkzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oi-7bBfFbLFcrAzRYSkyIZKKIVsniTpD8Qcp4CGUZFs`,
        accept: 'application/json',
      },
    };

    try {
      const response = await axios.get(url, requestOptions);
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
