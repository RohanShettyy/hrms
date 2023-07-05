import { Component, HostListener, ElementRef , OnInit, Output, EventEmitter, Input} from '@angular/core';
import { SidebarServiceService } from '../sidebar-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor() {}
  ngOnInit(): void {
      
  }

  getHeadClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth>768) {
      styleClass = 'navbar-trimmed';

    }
    else {
      styleClass = 'navbar-md-screen';
    }
    return styleClass;
  }
}
