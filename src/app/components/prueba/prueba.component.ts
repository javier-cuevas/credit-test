import { Component, OnInit } from '@angular/core';

//Services
import { DataService } from 'src/app/services/data.service';

//Models
import { Data } from 'src/app/models/data';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  year: Date = new Date();
  
  users:Data;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this.data.getData().subscribe( (resp:Data) =>{
      this.users = resp;
      this.printEmail(resp);
    });
  }

  printEmail(data){
    let info:Array<Data> = data;
    info.forEach(item => console.log(item.email));
  }

}
