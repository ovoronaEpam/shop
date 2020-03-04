import { Component, OnInit } from '@angular/core';

enum Category {
  First = 1,
  Second,
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements OnInit {
  // Надо что-то присвоить этим полям, чтобы в шаблоне появились значения
  public name: string;
  public description: string;
  public price: number;
  public category: Category;
  public isAvailable: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
