import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do-List';
  nameModel:string = "";
  selected: any= "";

  listItem = [
    {id:1,name:'List Item 1'},
  ]

  //listItem: string[] = ['List Item 1'];
$event: any;
item: any;


  deleteItem(ev: Event, item: any) {
    ev.stopPropagation();
    ev.preventDefault();
    this.listItem = this.listItem.filter(o => o !== item);
    console.log(this.listItem)
  }
  addItem(){
    if(this.nameModel != '' && this.nameModel != null){
      let nextItem = this.listItem.length;
      this.listItem.push({
        id: nextItem,
        name:this.nameModel
      });
      this.nameModel = '';
    }
  }

  onNgModelChange($event: any,item: any){

  }
}
