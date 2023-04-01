import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles:[`
      li{
       cursor: pointer; 
      }
      li:hover:not(li.active){
        background-color: rgb(199, 213, 242);
        padding-left: 30px;
        transition: padding-left 0.8s;
      }
  `]
})
export class SidebarComponent {

}
