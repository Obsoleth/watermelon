import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  title = 'mula';
  showTitle1: boolean = false;
  showTitle2: boolean = false;
  showTitle3: boolean = false;
  showTitle4: boolean = false;
  showTitle5: boolean = false;
  showTitle6: boolean = false;
  showTitle7: boolean = false;
  showTitle8: boolean = false;
  showTitle9: boolean = false;
  showTitle10: boolean = false;
  showTitle11: boolean = false;
  showTitle12: boolean = false;

  spinnerRow1: boolean = false;
  spinnerRow2: boolean = false;
  spinnerRow3: boolean = false;
  spinnerRow4: boolean = false;
  spinnerRow5: boolean = false;
  spinnerRow6: boolean = false;
  spinnerRow7: boolean = false;
  spinnerRow8: boolean = false;
  spinnerRow9: boolean = false;
  spinnerRow10: boolean = false;
  spinnerRow11: boolean = false;
  spinnerRow12: boolean = false;
  spinnerRow13: boolean = false;

  border1: boolean = false;
  border2: boolean = false;
  border3: boolean = false;
  border4: boolean = false;

  finalPage: boolean = false;

  WatermelonCenter: boolean = false;


  showGif2: boolean = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showTitle1 = true;
    }, 500)
    setTimeout(() => {
      this.showTitle2 = true;
    }, 1000)

    setTimeout(() => {
      this.showTitle3 = true;
    }, 1500)

    setTimeout(() => {
      this.showTitle4 = true;
    }, 2000)

    setTimeout(() => {
      this.showTitle5 = true;
    }, 2500)

    setTimeout(() => {
      this.showTitle6 = true;
    }, 3000)

    setTimeout(() => {
      this.showTitle7 = true;
    }, 3300)

    setTimeout(() => {
      this.showTitle8 = true;
    }, 3600)

    setTimeout(() => {
      this.showTitle9 = true;
    }, 3900)

    setTimeout(() => {
      this.showTitle10 = true;
    }, 4200)

    setTimeout(() => {
      this.showTitle11 = true;
    }, 4500)

    setTimeout(() => {
      this.showTitle12 = true;
    }, 4800)

    setTimeout(() => {
      this.spinnerRow1 = true;
    }, 5000)

    setTimeout(() => {
      this.spinnerRow2 = true;
    }, 5200)
    setTimeout(() => {
      this.spinnerRow3 = true;
    }, 5400)
    setTimeout(() => {
      this.spinnerRow4 = true;
    }, 5600)
    setTimeout(() => {
      this.spinnerRow5 = true;
    }, 5800)
    setTimeout(() => {
      this.spinnerRow6 = true;
    }, 6000)
    setTimeout(() => {
      this.spinnerRow7 = true;
    }, 6200)
    setTimeout(() => {
      this.spinnerRow8 = true;
    }, 6400)
    setTimeout(() => {
      this.spinnerRow9 = true;
    }, 6600)
    setTimeout(() => {
      this.spinnerRow10 = true;
    }, 6800)
    setTimeout(() => {
      this.spinnerRow11 = true;
    }, 7000)
    setTimeout(() => {
      this.spinnerRow12 = true;
    }, 7200)
    setTimeout(() => {
      this.spinnerRow13 = true;
    }, 7400)
    setTimeout(() => {
      this.WatermelonCenter = true;
    }, 8400)
    setTimeout(() => {
      this.border3 = true;
    }, 9200)
    setTimeout(() => {
      this.border4 = true;
    }, 9200)
    setTimeout(() => {
      this.finalPage = true;
    }, 10200)
  }
}
