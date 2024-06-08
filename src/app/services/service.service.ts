import { HttpClient } from '../services/http/httpClient';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  http!: HttpClient;
  endpoint: string =
    '3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  constructor(httClient: HttpClient) {
    this.http = httClient;
  }

  async get(params: any = null) {
    return this.http.get(`${this.endpoint}`, params);
  }
}
