import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class NewsApiService {

    private apiKey ='pub_34693770a2e9b6cab8da96232840f0f9705fc'; //newsdata.io

    //urls:   (per i domain cercare un sito che ritorna anche le immagini)
    mainURL = 'https://newsdata.io/api/1/news?apikey=pub_34693770a2e9b6cab8da96232840f0f9705fc&q=news&country=it&language=it' + this.apiKey + '&country=it';
    techURL = 'https://newsdata.io/api/1/news?apikey=pub_34693770a2e9b6cab8da96232840f0f9705fc&q=news&country=it&language=it&category=technology' + this.apiKey +  '&country=it&category=technology';
    sportURL = 'https://newsdata.io/api/1/news?apikey=pub_34693770a2e9b6cab8da96232840f0f9705fc&q=news&country=it&language=it&category=sports' + this.apiKey + '&country=it%category=sports';
    scienzaURL = 'https://newsdata.io/api/1/news?apikey=pub_34693770a2e9b6cab8da96232840f0f9705fc&q=news&country=it&language=it&category=science' + this.apiKey + '&country=it&category=science';

    constructor (private httpCLient: HttpClient) {}

    // get dati
    main(pag:any):Observable<any>
    {
        let mainUrlpg = this.mainURL + '&page=' + pag;
        return this.httpCLient.get(mainUrlpg);
    }

    tech(pag:any):Observable<any>
    {
        let techUrlpg = this.techURL + '&page=' + pag;
        return this.httpCLient.get(techUrlpg);
    }

    sport(pag:any):Observable<any>
    {
        let sportUrlpg = this.sportURL + '&page=' + pag;
        return this.httpCLient.get(sportUrlpg);
    }

    scienza(pag:any):Observable<any>
    {
        let scienzaUrlpg = this.scienzaURL + '&page=' + pag;
        return this.httpCLient.get(scienzaUrlpg);
    }
}

 
