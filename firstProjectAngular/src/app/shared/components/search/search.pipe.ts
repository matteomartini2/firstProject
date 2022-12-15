import { MatTableDataSource } from '@angular/material/table';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProject'
})
export class SearchPipe implements PipeTransform {

  transform(items: MatTableDataSource<any>, searchText: string): any {
    console.log("items",items);
    if (!items) return [];
    if (!searchText) return items;

    return items.filteredData.filter(item => {
      return Object.keys(item).some(key => {
        //SE VOGLIAMO FILTRARE PER cliente o stato 
        // return item['cliente'].toLowerCase().includes(searchText.toLowerCase()) || item['stato'].toLowerCase().includes(searchText.toLowerCase());
        return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
      });
    });
  }
}
