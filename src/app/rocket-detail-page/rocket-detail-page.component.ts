import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RocketDetails, RocketHeight, RocketMass, RocketDiameter } from '../interfaces/rocket-details';
import { RocketService } from '../services/rocket.service';

interface RocketNode {
  name: string;
  children?: RocketNode[]
}
@Component({
  selector: 'app-rocket-detail-page',
  templateUrl: './rocket-detail-page.component.html',
  styleUrls: ['./rocket-detail-page.component.css']
})
export class RocketDetailPageComponent implements OnInit {
  rocket_details: RocketDetails[] = [];
  rocket_id: string;
  eventFetchingError: any;

  constructor(private route: ActivatedRoute,
    private rocketService: RocketService) {
  }

  ngOnInit() {
    this.rocket_id = this.route.snapshot.paramMap.get('id');
    this.rocketService.getRocketById(this.rocket_id).subscribe((response) => {
      setTimeout(() => {
        console.log(response['rocket_name']);
        this.rocket_details.push({
          name: response['rocket_name'],
          image: response.flickr_images[1],
          description: response.description,
          first_flight: response.first_flight,
          country: response.country,
          height: response.height as RocketHeight,
          mass: response.mass as RocketMass,
          diameter: response.diameter as RocketDiameter
        });
      }, 1000);
    }, (error) => {
      this.eventFetchingError = error;
      console.log("Error in fetching history", this.eventFetchingError);
    });

  }

}
