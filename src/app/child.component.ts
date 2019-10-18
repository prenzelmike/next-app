import { Component, OnInit } from '@angular/core';
import {MyserviceService} from './myservice.service';
import { SimpleType} from './types/simpleType';


@Component({
    //The name of the HTML-tag in app.component.html that hosts the child component.
    selector: 'child-component',
    templateUrl: './app.child-component.html'
  })
  export class ChildComponent implements OnInit {
    //selectedItem: SimpleType; obsolete since we use routing
    childrentitle: string = 'title taken from variable';
    variable2: string  = 'just another one';
    variable3: string  = 'and a third one';
    sTypes: SimpleType[]; 

    constructor(private myservice: MyserviceService){}

    ngOnInit() {
      this.getSimpleTypes();
    }

    getSimpleTypes():void {
      this.myservice.getsimpleTypes()
        .subscribe({next:(mytypes) => {this.sTypes= mytypes }, 
                    complete: () => {console.log("observable completed")},
                    error: (err)=>{console.log(err)}
                    
                  });
    }

    /*
    // obsolete since we use routing
    onSelect(selectedEntry: SimpleType): void {
        this.selectedItem = selectedEntry;
    }
    */
  }
  