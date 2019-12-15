import { Component, OnInit, Input } from '@angular/core';
import {SimpleType} from '../types/simpleType';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.scss']
})
export class DetailComponentComponent implements OnInit {
  sType: SimpleType;
  constructor(private route: ActivatedRoute,
    private myService: MyserviceService,
    private location: Location) { }
    // also see 
    // https://stackoverflow.com/questions/50324891/use-same-component-for-different-routes-with-different-output

    ngOnInit(): void {
      this.getSimpleType();
    }

  getSimpleType(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.myService.getsimpleType(id)
      .subscribe({ next: (simpleType: SimpleType) => { this.sType = simpleType } });
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.myService.updateSimpleType(this.sType)
      .subscribe(() => this.goBack());
  }

}
