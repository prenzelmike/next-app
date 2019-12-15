import { Injectable } from '@angular/core';
import { SimpleType } from './types/simpleType';
//import { SimpleTypeList } from './data/mock-simpleTypes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
  private apiBaseAdress: string = environment.apiEndpoint + '/api/values';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService, 
    private http: HttpClient
    ) { 
      
    }
  getsimpleTypes(): Observable<SimpleType[]> {
    this.log("fetched a list")
    //return of(SimpleTypeList);
    return this.http.get<SimpleType[]>(this.apiBaseAdress).pipe(
      tap(_ => this.log('fetched SimpleTypes')),
      catchError(this.handleError<SimpleType[]>('getsimpleTypes', [{id:0, name:"no result"}]))
    );;
  }

  getsimpleType(id: number): Observable<SimpleType> {
    const url = `${this.apiBaseAdress}/${id}`;
    return this.http.get<SimpleType>(url).pipe(
      tap(_ => this.log(`fetched SimpleType id=${id}`)),
      catchError(this.handleError<SimpleType>(`getsimpleType id=${id}`))
    );
  }

  addSimpleType(sType:SimpleType):Observable<SimpleType>{
    return this.http.post<SimpleType>(this.apiBaseAdress,sType, this.httpOptions).pipe(
      tap((newSimpleType: SimpleType)=>this.log(`added new simple type with id = ${newSimpleType.id}`)),
      catchError(this.handleError<SimpleType>('addSimpleType'))
    );
  }

  updateSimpleType (sType: SimpleType): Observable<any> {
      // in case special headers needed concatenate them with .set
      //    e.g. 
      //let myHeaders = new HttpHeaders().set('head1', 'value1').set('head2','value2');
      // const myhttpOptions = {
      //   headers: myHeaders
      // };
    const url = `${this.apiBaseAdress}/${sType.id}`;
    return this.http.put(url, sType, this.httpOptions).pipe(
      tap(_ => this.log(`updated simpleType id=${sType.id}`)),
      catchError(this.handleError<any>('updateSimpleType'))
    );
  }

  deleteSimpleType (sType: SimpleType): Observable<SimpleType>{
    const id: number = sType.id;
    const url = `${this.apiBaseAdress}/${id}`;
    return this.http.delete<SimpleType>(url, this.httpOptions).pipe(
      tap(_=>this.log(`deleted simpleType id = ${id}`))
    );
  }

/* GET simple types whose name contains search term */
searchSimpleTypes(term: string): Observable<SimpleType[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<SimpleType[]>(`${this.apiBaseAdress}/search/${term}`).pipe(
    tap(_ => this.log(`found simple types matching "${term}"`)),
    catchError(this.handleError<SimpleType[]>('searchSimpleTypes', []))
  );
}



  private log(message: string) {
    this.messageService.add(`MyserviceService: ${message}`);
  }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result or whatever was passed to this function.
      return of(result as T);
    };
  }


}
