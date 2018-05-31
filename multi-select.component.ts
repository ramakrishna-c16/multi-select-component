import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector :'multi-selector-dropdown',
    templateUrl :'./multi-select.component.html',
    styleUrls : ['./multi-select.component.css']
})

export class MultiSelectComponent{
    @Input() list:any[]; 
    
    @Output() shareCheckedList = new EventEmitter();
  
    @Output() shareAllSelectedcheckedList = new EventEmitter();

    showDropDown:boolean=false;
    checkedList : any[];
    currentSelected : {};
    allSelected =[];
    selectedAll:boolean;
    @Input() customtemp:string;
    constructor(){
        this.checkedList = [];
    }

    selectAll(){
      this.checkedList=[];

      this.list.forEach((item,index)=>{
        item.checked=this.selectedAll;
        if(this.selectedAll)
        this.allSelected.push({id:item[this.customtemp],value:item.value});
    
    })

      this.shareAllSelected();
 
    }
  
    getSelectedValue(status:Boolean,wsn:String,value: number){
        if(status){
       
          this.checkedList.push({id:wsn,value:value});
    
        }
        else{
            let i = -1;
            this.checkedList.forEach(function(register,index){
                if(register['id'] == wsn){
                    i=index; 
                }
            })
            if(i != -1)
                this.checkedList.splice(i,1);
            else
                console.log("Error"+i);  
        }
        
     
        this.shareCheckedlist();

        this.selectedAll = this.list.every(function(item:any) {
          return item.checked == true;
        })
    
    }
    shareCheckedlist(){
         this.shareCheckedList.emit(this.checkedList);
    }
   
    shareAllSelected(){
       this.shareAllSelectedcheckedList.emit(this.allSelected);
    }

}