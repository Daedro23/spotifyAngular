import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import { TrackModel } from '../model/track';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headerCustom: HttpHeaders;
  constructor(private http: HttpClient) {

    this.headerCustom = new HttpHeaders({
      Authorization: `Bearer ${environment.token}`
    });

   }

  get(){
    return this.http.get(`${environment.url}/browse/new-releases`, {headers: this.headerCustom});
  }

  searchTrack({q}: TrackModel): Observable<any> {
    return this.http.get(`${environment.url}/search?q=${q}&type=track&limit=10`,
      {headers: this.headerCustom});
  }

  getTracks(trackId) {
    return this.http.get(`${environment.url}/${trackId}`,
    {headers: this.headerCustom});
  }
  getAlbum(albumId) {
    return this.http.get(`${environment.url}/${albumId}`,
    {headers: this.headerCustom});
  }

  getArtits(artitsId) {
    return this.http.get(`${environment.url}/${artitsId}`,
    {headers: this.headerCustom});
  }
}


