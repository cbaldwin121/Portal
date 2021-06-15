import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-display',
  templateUrl: './team-display.component.html',
  styleUrls: ['./team-display.component.scss'],
})
export class TeamDisplayComponent implements OnInit {

  @Input() name: string;
  @Input() role: string;
  
  constructor() { }

  ngOnInit() {}

}
