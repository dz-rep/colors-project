import { Component, OnInit } from '@angular/core';
import { ColorsService, ColorData } from './services/colors/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public colors: ColorData[] = [];

  constructor(private colorsService: ColorsService) {

  }

  ngOnInit() {
    this.colors = this.colorsService.data;
  }

  public sortColorsByName(method = 'asc'): void {
    if (method === 'asc') {
      this.colors.sort((color1: ColorData, color2: ColorData) => {
        if (color1.colorName < color2.colorName)
          return -1;
        else if (color1.colorName > color2.colorName)
          return 1;
        else
          return 0;
      });
    } else if (method === 'desc') {
      this.colors.sort((color1: ColorData, color2: ColorData) => {
        if (color1.colorName < color2.colorName)
          return 1;
        else if (color1.colorName > color2.colorName)
          return -1;
        else
          return 0;
      });
    }
  }

  public sortColorsByValue(method = 'asc'): void {
    if (method === 'asc') {
      this.colors.sort((color1: ColorData, color2: ColorData) => {
        if (color1.hexValue < color2.hexValue)
          return -1;
        else if (color1.hexValue > color2.hexValue)
          return 1;
        else
          return 0;
      });
    } else if (method === 'desc') {
      this.colors.sort((color1: ColorData, color2: ColorData) => {
        if (color1.hexValue < color2.hexValue)
          return 1;
        else if (color1.hexValue > color2.hexValue)
          return -1;
        else
          return 0;
      });
    }
  }
}
