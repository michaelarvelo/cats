import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import {CatsService} from '../cats.service'
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cat: Cat;
  cats: Cat[];
  constructor(private catService: CatsService) { }
  initialize(){
    this.catService.getCats().subscribe(cats => {
      this.cats = cats;
      this.cat = cats[Math.floor(Math.random() * this.cats.length)];
    })
  }

  getNextCat(){
    const random = Math.floor(Math.random() * this.cats.length);
    this.cat = this.cats[random];
  }
  ngOnInit(): void {
    this.initialize();
  }

}
