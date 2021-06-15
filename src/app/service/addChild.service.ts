import { Injectable } from '@angular/core';
import { ChildModel } from '../models/model/child.model';

@Injectable({
  providedIn: 'root'
})
export class AddChildService {
  users: any;

  constructor() { }


  // this service-- adds Guardian-child (init), adds Careteam-child (add existing)
  // this service-- post model that posts to child's database
  // button to add careteam []

}
