import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  albums: object[];
  resp: any[];
  constructor(private dataService: DataService, private router: Router) {

   }

  ngOnInit() {
    this.obtenerLista();
  }

  obtenerLista() {
    this.dataService.get().subscribe((data: any[]) => {
      this.resp = data;
      this.getData(data);
    }, (err) => {
      console.log('Error:', err);
      console.error(err.message);
    }, () => {
      console.log('Complete!');
    });  
  }

  getData(data) {
    this.albums = data.albums.items;
    console.log(this);
  }

}


