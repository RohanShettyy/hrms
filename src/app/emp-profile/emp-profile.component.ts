import { Component } from '@angular/core';
// import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-emp-profile',
  templateUrl: './emp-profile.component.html',
  styleUrls: ['./emp-profile.component.scss']
})
export class EmpProfileComponent {

  // constructor(
  //   private userService: UserService,
  // ) {}

  
  // if Getting Img from APi
  GetImage = false;
  filteredImages(value: any) {
    const imageString = 'http://127.0.0.1:8000' + value
    console.log("imageString",imageString )
    return imageString
  }

  // ngOnInit(): void {
  //   this.getProfile();
  // }

  Profile: any = [];
  // getProfile(){
  //   this.userService.getData('/api/emp/profile').subscribe(
  //   (res: any)=> {
  //     console.log(res.data)
  //     if (res.statusCode == 200 && !(res.data === undefined || res.data === null || Object.keys(res.data).length === 0)) {
  //       this.Profile = res.data || [];
  //       if (res.data['emp_photo']){
  //         this.GetImage = true
  //       }
  //       else{
  //         this.GetImage = false;
  //       }
  //     }
  //     else{
  //       this.Profile = res.data || [];
  //     }
  //   },
  //   (err: any)=>{
  //     console.warn(err)
  //   })
  // }


}
