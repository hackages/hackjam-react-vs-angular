import {Pipe, PipeTransform} from '@angular/core'
import {DateTime} from 'luxon'

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: number, args?: any): any {
    return DateTime.fromMillis(value * 1000).toLocaleString(
      DateTime.DATETIME_FULL
    )
  }
}
