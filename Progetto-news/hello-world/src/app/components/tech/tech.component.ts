import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../../services/news-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

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
      this.pagina --;
      this.newsService.main(this.pagina).subscribe((result) => {
        console.log(result);this.homeData = result.results;
      });
    }
  }

}
