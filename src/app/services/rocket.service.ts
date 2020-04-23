import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { About } from '../interfaces/about';

@Injectable({
    providedIn: 'root'
})

export class RocketService {
    http: HttpClient;

    // Urls to fetch data from
    historyUrl: string = "https://api.spacexdata.com/v3/history";
    rocketsUrl: string = "https://api.spacexdata.com/v3/rockets";
    detailsUrl: string = "https://api.spacexdata.com/v3/rockets/";
    aboutusUrl: string = "https://api.spacexdata.com/v3/info";

    constructor(private httpClient: HttpClient) {
        this.http = httpClient;
    }

    // Get history of flight events
    getHistory() {
        return this.http.get(this.historyUrl);
    }

    // Get rocket details
    getRockets() {
        return this.http.get(this.rocketsUrl);
    }

    // Get specific rocket detail
    getRocketById(id: string): Observable<any> {
        return this.http.get(this.detailsUrl + id);
    }

    // Get company about us information
    getCompanyInfo(): Observable<About> {
        return this.http.get<About>(this.aboutusUrl);
    }

    // for debugging
    private log(message: string) {
        console.log(message);
    }
}