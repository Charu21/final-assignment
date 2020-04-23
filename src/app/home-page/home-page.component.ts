import { Component, OnInit } from '@angular/core';
import { History } from '../interfaces/history';
import { RocketService } from '../services/rocket.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  events: History[] = [];
  eventFetchingError: any;

  constructor(private rocketService: RocketService) { }

  ngOnInit(): void {

    this.rocketService.getHistory().subscribe(response => {
      setTimeout(() => {
        for (const e of (response as any)) {
          this.events.push({
            title: e.title,
            flight_number: (e.flight_number == null) ? "NA" : e.flight_number,
            details: e.details
          });
        }
      }, 1000);
    }, (error) => {
      this.eventFetchingError = error;
      console.log("Error in fetching history", this.eventFetchingError);
    });
  }

}
