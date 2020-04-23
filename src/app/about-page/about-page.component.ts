import { Component, OnInit } from '@angular/core';
import { RocketService } from '../services/rocket.service';
import { About, Address } from '../interfaces/about';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  aboutus: About[] = [];
  eventFetchingError: any;

  constructor(private rocketService: RocketService) {
  }

  ngOnInit(): void {
    this.rocketService.getCompanyInfo().subscribe((response) => {
      setTimeout(() => {
        this.aboutus.push({
          name: response.name,
          founder: response.founder,
          headquarters: response.headquarters as Address,
          summary: response.summary,
          valuation: response.valuation
        });

      }, 1000);
    }, (error) => {
      this.eventFetchingError = error;
      console.log("Error in fetching history", this.eventFetchingError);
    });
  }
}
