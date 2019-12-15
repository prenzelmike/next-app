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

    add(newName: string): void {
      newName = newName.trim();
      if (!newName) { return; }
      const newSimpleType:SimpleType = {id:-1, name: newName}
      this.myservice.addSimpleType(newSimpleType)
        .subscribe({
          next: (stype) => {this.sTypes.push(stype);},
          complete: () => {console.log("adding completed")},
          error: () => {console.log("error when adding new simpleType")}
        });
    }

    delete(sType: SimpleType): void {
      this.sTypes = this.sTypes.filter(st=>st!=sType);
      this.myservice.deleteSimpleType(sType).subscribe();
    }

    /*
    // obsolete since we use routing
    onSelect(selectedEntry: SimpleType): void {
        this.selectedItem = selectedEntry;
    }
    */
  }
  