import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  email: string = '';

  displayText: string = 'John Doe';
  inputValue: string = '';

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
}
