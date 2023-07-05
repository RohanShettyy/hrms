import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarServiceService } from '../sidebar-service.service';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  
  activeDropdown: string | null = null;
  
  toggleDropdown(dropdownId: string): void {
    this.activeDropdown = this.activeDropdown === dropdownId ? null : dropdownId;
  }



  @Output() onToggleSideNav: EventEmitter<SideNavToggle>  = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  // constructor(private sidebarService: SidebarServiceService){}
  // toggleSidebar(): void {
  //   this.sidebarService.toggleSidebar();
  // }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }

  closeSidenav(): void {
    this.collapsed = false
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  


}
