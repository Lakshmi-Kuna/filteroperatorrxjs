import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, mergeMap } from 'rxjs';
import { Item1, Item2, MyData } from '../contract/MyData';


@Injectable({
  providedIn: 'root'
})

export class MergeMapserService {
  
private path1='./assets/data/data.json';
private path2='./assets/data/data2.json';
// item1:MyData[]=[];
  constructor(private http:HttpClient) { }
getMergeData():Observable<any>{
return this.http.get(this.path1).pipe(
  mergeMap((data1:any)=>{
    const item1=new Item1(data1.id,data1.name);
    return this.http.get(this.path2).pipe(
      map((data2:any)=>{
        const item2=new Item2(data2.id,data2.role);
        return {item1,item2};
      })
    ); 
  })
);
}
}
