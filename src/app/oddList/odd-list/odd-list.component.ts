import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-list',
  templateUrl: './odd-list.component.html',
  styleUrls: ['./odd-list.component.css']
})
export class OddListComponent implements OnInit {

  // numbers = [1,2,3,4,5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];

  onlyOdd = false;
  constructor() { }

  ngOnInit(): void {
  }

}
