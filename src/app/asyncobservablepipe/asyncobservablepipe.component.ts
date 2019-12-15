import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subject, range, Subscription } from 'rxjs';
//import { interval } from 'rxjs';  
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-asyncobservablepipe',
  templateUrl: './asyncobservablepipe.component.html',
  styleUrls: ['./asyncobservablepipe.component.scss']
})
export class AsyncobservablepipeComponent implements OnInit  {
  time$: Observable<string>;
  timeSubscription: Subscription;
  mySource:Observable<number>;
  myOutput: string;
  x: Subscription;
  public clock$: Observable<Date>; 

  
  ngOnInit(): void {
    this.time$ = new Observable((observer) => {
      // setInterval((observer) => {
      //   //return observer.next(new Date().toString());
      //   return observer.next("new Date().toString()");
      // }, 1000)
      observer.next(this.getTime());
      observer.complete()
    });

    this.clock$ = interval(1000).pipe(
      map(tick => new Date()),
      share()
    )
    this.timeSubscription = this.clock$.subscribe();

    this.mySource = range(1,10);
  }

  getTime(): string {
    return new Date().toString();
  }

  showOutput(): void {
    this.myOutput = "Output: "
    this.x = this.mySource.subscribe({
      next: (out: number)=> {
        this.myOutput = this.myOutput.concat(out.toString()+", ");
        console.log (out.toString());
      },
      complete: () => {this.myOutput = this.myOutput.concat(" mySource completed")}
    });
    //this.mySource.subscribe({next: (out: number)=> {this.myOutput=out.toString()}});
  }

  clearOutput(): void {
    this.myOutput="";
    this.x.unsubscribe();
    this.timeSubscription.unsubscribe();
    
  }

 

}
