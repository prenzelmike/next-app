import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';
import {SimpleType} from '../types/simpleType';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private myService: MyserviceService) { }

  ngOnInit() {
    this.getsimpleTypes();
  }

  public simpleTypes: SimpleType[];

  getsimpleTypes(): void {
    this.myService.getsimpleTypes()
      .subscribe({
        next:(stypes) => {this.simpleTypes = stypes.slice(1, 5)}
      });
  }


}
