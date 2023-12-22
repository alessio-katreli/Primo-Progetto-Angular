import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../../services/news-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './scienza.component.html',
  styleUrl: './scienza.component.css'
})
export class ScienzaComponent implements OnInit{

  constructor(private newsService: NewsApiService) {}

  homeData :any = [];
  pagina: any = 0;

  ngOnInit(): void {
    this.newsService.main(0).subscribe((result) => {
      console.log(result);
      this.homeData = result.results;
    });
  }

  nextPage() {
    this.pagina ++;
    this.newsService.main(this.pagina).subscribe((result) => {
      console.log(result);
      this.homeData = result.results;
    });
  }

  previousPage() {
    if (this.pagina > 0) {                                                       
      this.pagina --;                                                   // se siamo alla prima pagina il bottone indietro non funzionerà
      this.newsService.main(this.pagina).subscribe((result) => {
        console.log(result);this.homeData = result.results;
      });
    }
  }

}
