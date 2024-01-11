import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MyData } from 'src/app/contract/MyData';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.css']
})
export class FilterOperatorComponent {
data:Observable<MyData[]>|any;
constructor(private http:HttpClient){}
ngOnInit(){
  this.data=this.http.get<MyData[]>('./assets/data/data.json').pipe(map(data=>data.filter(item=>item.name==="Srirama")));
}
}
