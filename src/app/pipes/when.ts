import { Pipe } from '@angular/core';

@Pipe({
  name: 'when'
})

export class WhenPipe {
  transform(date) {
    let months: string[] = [
      "sty", "lut", "mar", "kwi",
      "maj", "cze", "lip", "sie",
      "wrz", "paz", "lis", "gru"
    ];

    let nowDay = new Date().getDate();
    let nowHour = new Date().getHours();
    let nowMinute = new Date().getMinutes();
    let nowSecond = new Date().getSeconds();

    let pastDay = new Date(date).getDate();
    let pastHour = new Date(date).getHours();
    let pastMinute = new Date(date).getMinutes();
    let pastSecond = new Date(date).getSeconds();

    if(nowDay === pastDay) {
      if(nowHour === pastHour) {
        if(nowMinute === pastMinute) {
          return (nowSecond - pastSecond) + " sek. temu"
        } else {
          return (nowMinute - pastMinute) + " min. temu"
        }
      } else {
        return (nowHour - pastHour) + " godz. temu"
      }
    } else {
      return (nowDay - pastDay) + " dni temu"
    }
  }
}
