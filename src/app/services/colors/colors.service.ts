import { Injectable } from '@angular/core';

export interface ColorData {
  colorName: string,
  hexValue: string
}

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  private colorsData: ColorData[] = [
    {
      "colorName": "red",
      "hexValue": "#f00"
    },
    {
      "colorName": "green",
      "hexValue": "#0f0"
    },
    {
      "colorName": "blue",
      "hexValue": "#00f"
    },
    {
      "colorName": "cyan",
      "hexValue": "#0ff"
    },
    {
      "colorName": "magenta",
      "hexValue": "#f0f"
    },
    {
      "colorName": "yellow",
      "hexValue": "#ff0"
    },
    {
      "colorName": "black",
      "hexValue": "#000"
    }
  ];

  constructor() { }

  get data(): ColorData[] {
    return this.colorsData;
  }
}
