import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'child-display.component.ts',
  templateUrl: './child-display.component.html',
  styleUrls: ['./child-display.component.scss'],
})
export class DoctorSmallCardComponent implements OnInit {

  @Input() childname: string;

  constructor() { }

  ngOnInit() {}

}