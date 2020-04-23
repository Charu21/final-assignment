import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Passing animation event from child to parent
  @Output() fancyAppEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // call parent app method
  changeApp() {
    this.fancyAppEvent.emit();
  }

}
