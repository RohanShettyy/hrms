import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeDropdown: string | null = null;

  toggleDropdown(dropdownId: string): void {
    this.activeDropdown = this.activeDropdown === dropdownId ? null : dropdownId;

  }
}
