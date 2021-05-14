import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[trigger('clickedState',[
    state('default',style({
      backgroundColor:'orange',
      width:'100px',
      height:'100px'
    })),state('clicked',style({
      backgroundColor:'blue',
      width:'300px',
      height:'50px'
    })),state('mousedown',style({
      backgroundColor:'red',border: '1px solid black',
      width:'100px',height:'100px'
    })),transition("default <=> clicked",animate('1s 0s ease-in')),
    //transition("clicked => default",animate('1s 0s ease-in')),
    transition("clicked <=> mousedown",animate('1s 0s ease-in')),
    transition("mousedown <=> default",animate('1s 0s ease-in'))
  ]),trigger('numberEnteredT',[
  state('unselected',style({
    border:'1px solid black',
    padding:'5px'
  })),state('selected',style({
    border:'1px solid black',
    padding:'5px',
    backgroundColor:'lightblue'

  })),transition('unselected => selected',[
   style({
    border:'1px solid black',
    padding:'5px'
   }),animate('0.5s 0s ease-in',style({backgroundColor:'red',
  transform:'translateX(100px) scale(5)' 
  })),
   animate(500)

  ])

  ])]
})
export class AppComponent {
  title = 'angular-style-animation-maximilian';
  clickInfo='default';
  numberEntered:number;


  clickAnimation(){

    if('default'==this.clickInfo){
      this.clickInfo='clicked';
    }else if('clicked'==this.clickInfo){
      this.clickInfo='mousedown';
    }else{
      this.clickInfo='default'; 
    }

  }
}
