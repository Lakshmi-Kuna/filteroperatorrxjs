import { Component, OnInit } from '@angular/core';
import { MergeMapserService } from 'src/app/service/merge-mapser.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {
  combinedData:any;
  constructor(private serv:MergeMapserService){}
ngOnInit(): void {
  this.serv.getMergeData().subscribe((res)=>{
this.combinedData=[res];
  })
}
}
