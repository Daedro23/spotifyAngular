import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    public src: string;
    public data$: any;
    tracks: any;
    dataDetails: any;
    constructor(private dataService: DataService, private router: Router) { }

    ngOnInit(): void {
    }

    search(value: any): any {
        this.data$ = this.dataService.searchTrack({q: value})
          .pipe(
              map(({tracks}) => tracks.items)
          )
      }
    
    // details(items) {
    //     this.router.navigateByUrl(`/details/${items.type}/${items.id}`);
    // }
}
