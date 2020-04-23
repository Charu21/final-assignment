import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Data being received by child
  @Input() appTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
