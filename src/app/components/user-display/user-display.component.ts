import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss'],
})
export class UserDisplayComponent implements OnInit {

  @Input() photo: string;
  @Input() name: string;
  @Input() role: string;

  constructor() { }

  ngOnInit() {}


}
