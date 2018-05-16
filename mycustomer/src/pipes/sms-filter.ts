import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs'

@Pipe({
  name: 'smsFilter',
})
export class SmsFilter implements PipeTransform {

  transform(value: any[], ...args) {
    if (!value) {
      return value
    }
    return value.filter(item => item.Status == args[0])
  }
}
