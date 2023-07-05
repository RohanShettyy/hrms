import { Injectable , EventEmitter} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarServiceService {

  // private sidebarCollapsedSubject = new BehaviorSubject<boolean>(false);
  // public sidebarCollapsed$ = this.sidebarCollapsedSubject.asObservable();

  // toggleSidebar(): void {
  //   this.sidebarCollapsedSubject.next(!this.sidebarCollapsedSubject.value);
  // }

}
