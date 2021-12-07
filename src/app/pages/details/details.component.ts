import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  item: any;
  resp: any;
  album: any;
  artist: any;
  type: any;
  id: any;
  constructor(private route: ActivatedRoute, private dataService: DataService) {
   }

  ngOnInit() {
    this.type = this.route.snapshot.url[1].path;
    this.id = this.route.snapshot.url[2].path;
    this.getUrl();
  }

  getUrl() {
    const url = `${this.type}/${this.id}`;
    if (this.type === "tracks") {
      this.getTracks(url);
    } else if (this.type === "albums") {
      this.getAlbum(url);
    } else {
      this.getArtits(url);
    }
  }

    getTracks(url: any): any {
    this.dataService.getTracks(url).subscribe((data: any[]) => {
      this.resp = data;  
    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    }); 
  }

  getAlbum(url: any): any {
    this.dataService.getAlbum(url).subscribe((data: any[]) => {
      this.album = data;  
      console.log(this);
    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    }); 
  }

  getArtits(url: any): any {
    this.dataService.getArtits(url).subscribe((data: any[]) => {
      this.album = data;  
      console.log(this);
    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    }); 
  }

}
