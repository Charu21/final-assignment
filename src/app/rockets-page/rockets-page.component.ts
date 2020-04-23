import { Component, OnInit } from '@angular/core';
import { Rocket } from '../interfaces/rocket';
import { RocketService } from '../services/rocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rockets-page',
  templateUrl: './rockets-page.component.html',
  styleUrls: ['./rockets-page.component.css']
})
export class RocketsPageComponent implements OnInit {
  rockets: Rocket[] = [];
  eventFetchingError: any;

  constructor(private router: Router,
    private rocketService: RocketService) { }

  ngOnInit(): void {
    this.rocketService.getRockets().subscribe(response => {
      setTimeout(() => {
        for (const e of (response as any)) {
          this.rockets.push({
            rocket_name: e.rocket_name,
            rocket_image: e.flickr_images[1],
            description: e.description,
            rocket_id: e.rocket_id
          });
        }
      }, 1000);
    }, (error) => {
      this.eventFetchingError = error;
      console.log("Error in fetching history", this.eventFetchingError);
    });
  }

  getSpecificRocket(rocket_id: string): void {
    this.router.navigate(['/rocket', rocket_id]);
  }

}
