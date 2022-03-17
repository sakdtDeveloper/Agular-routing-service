import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  getNumberOf(list: any[], critiria: string, value: any){

    let n = 0;
    for (const i in list){
      if (list[i][critiria] === value){
        n++; }
    }
    return n;
  }
}
