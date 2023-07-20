import { Component } from '@angular/core';
// import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-emp-profile-edit',
  templateUrl: './emp-profile-edit.component.html',
  styleUrls: ['./emp-profile-edit.component.scss']
})
export class EmpProfileEditComponent {

  email: string = '';

  displayText: string = 'John Doe';
  inputValue: string = '';

  genders: any = [
    {id:'Male', name:'Male'},
    {id:'Female', name:'Female'},
    {id:'Transgender', name:'Transgender'},
  ]
  worktypes: any = [
    {id:'Full Time', name:'Full Time'},
    {id:'Part Time', name:'Part Time'},
  ]
  bloodgroups: any =[
    {id: 'A Positive', name: 'A Positive'},
    {id: 'A Negative', name: 'A Negative'},
    {id: 'B Positive', name: 'B Positive'},
    {id: 'B Negative', name: 'B Negative'},
    {id: 'AB Positive', name: 'AB Positive'},
    {id: 'AB Negative', name: 'AB Negative'},
    {id: 'O Positive', name: 'O Positive'},
    {id: 'O Negative', name: 'O Negative'},
  ]

  // constructor(
  //   private userService: UserService,
  // ) {}

  // ngOnInit(): void {
  //   this.getProfile();
  // }

  onInputChange() {
    this.displayText = this.inputValue;
  }

  imageUrl: string | undefined;

  onImageSelected(event: any) {
    const file = event.target.files[0];
    this.previewImage(file);
  }

  previewImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
  }


  // Profile: any = [];
  // getProfile(){
  //   this.userService.getData('/api/emp/profile').subscribe(
  //   (res: any)=> {
  //     console.log(res.data)
  //     if (res.statusCode == 200 && !(res.data === undefined || res.data === null || Object.keys(res.data).length === 0)) {
  //       this.Profile = res.data || [];
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