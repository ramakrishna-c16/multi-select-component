import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { IMyDrpOptions } from 'mydaterangepicker'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
list: any[];
dataList = [];
// maxDate=new Date();
cs:number;
  // dropdownList = [];
  // selectedItems = [];
  // dropdownSettings = {};
  mydaterangeOptions: IMyDrpOptions={
    dateFormat:'dd mmm',
    showApplyBtn:false,
    showClearBtn:false,
    openSelectorOnInputClick:true,
    inline:false,
    editableDateRangeField:false
  };
  constructor(private http:HttpClient) {
   
    this.list = 
    [
      {
        "value": "12001",
        "id": "888881"
      },
      {
        "value": "12002",
        "id": "888882"
      },
      {
        "value": "12003",
        "id": "888883"
      }
    ]
  }
  registersLength:number;
  dataHeader= {};
  ngOnInit(){
    // this.http.get("http://localhost:3000/CashierActivityReportResponse")
    // .subscribe(data => {
    //   console.log(data,"Response");
    //   this.dataList=data['CashierActivities'];
    // });
  }
  // this.registersLength= data['WorkStationSessionDetails'].length;
  //     if(this.registersLength > 0 ){
  //       let i;
  //       for(i=0;i < this.registersLength;i++){
  //         if(!data['WorkStationSessionDetails'][i].ErrorMessage){
  //           this.dataHeader=data['WorkStationSessionDetails'][i];
  //           this.cs= this.dataHeader['RegisterTenderSessionDetail'].length;
  //           // console.log(this.dataHeader,"HIIIIII",this.cs);
  //           break;
  //         }

  //       }
  //     }
  // selecteddate(value){
  //   console.log(value);
  //   let startdate1= value.value[0];
  //   let enddate1 =value.value[1];
  
  //   let startdate= startdate1.getFullYear() + '-'
  //   + (((startdate1.getMonth() + 1)>8)?(startdate1.getMonth() + 1):'0'+(startdate1.getMonth() + 1)) + '-'
  //   + (((startdate1.getDate())>9) ? (startdate1.getDate()): '0'+(startdate1.getDate()));

  //   let enddate= enddate1.getFullYear()+ '-'
  //   + (((enddate1.getMonth() + 1)>8)?(enddate1.getMonth() + 1):'0'+(enddate1.getMonth() + 1)) + '-'
  //   + (((enddate1.getDate())>9) ? (enddate1.getDate()): '0'+(enddate1.getDate()));
  //   console.log(startdate,enddate,"Date");
  // }
  shareCheckedList(item:any[]){
    console.log(item,"only1");
  }
  // shareIndividualCheckedList(item:{}){
  //   console.log(item,"only2",this.list);
  // }
  getAllSelected(item:any[]){
    console.log(item);
  }

}
