import { Component, Output, EventEmitter, OnInit, Input, OnDestroy } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, OnDestroy{
  
  @Input() public placeholder: string ='';
  @Input() public initialValue: string='';
  @Output() public onEnter   : EventEmitter<string> = new EventEmitter;
  @Output() public onDebounce: EventEmitter<string> = new EventEmitter;
  
  private debouncer: Subject<string> = new Subject();
  private debouncerSuscription?: Subscription;
  
  termino: string ='';
  
  ngOnInit(): void {
    this.termino = this.initialValue
    this.debouncerSuscription = this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }
  
  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }



}
