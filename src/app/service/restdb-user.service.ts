  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestdbUserService {
  response: any = {};
  baseURL: string = "https://dorothea-842d.restdb.io/rest/users"
  apikey: string = "c94612423d5a350fe90eb4e57e71221db6d16"

  constructor(private http: HttpClient) { }


getUserInfo(AWSid: string) {
    this.response = this.http.get(`${this.baseURL}?q={"AWSid":"${AWSid}"}`, 
                {"headers": {"x-apikey": this.apikey,
                 "cache-control": "no-cache",
                 },
                 })
    return this.response
                }
}