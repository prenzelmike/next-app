import { Injectable } from '@angular/core';
import {SimpleType} from './types/simpleType';
import {SimpleTypeList} from './data/mock-simpleTypes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private messageService: MessageService) { }
  getsimpleTypes(): Observable<SimpleType[]> {
    this.messageService.add('MyserviceService: fetched list of simple types');
    return of(SimpleTypeList);
  }

  getsimpleType(id: number): Observable<SimpleType> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`MyService: fetched simple type id=${id}`);
    return of(SimpleTypeList.find(sType => sType.id === id));
  }
}
