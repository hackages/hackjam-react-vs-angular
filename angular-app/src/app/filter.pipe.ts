import {Pipe, PipeTransform} from '@angular/core'
import {Currency} from './types/Currency'

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Currency[], searchText: string): Currency[] {
    if (!items) return []
    if (!searchText) return items
    searchText = searchText.toLowerCase()
    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText)
    })
  }
}
