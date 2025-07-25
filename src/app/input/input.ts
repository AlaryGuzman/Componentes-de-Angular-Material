import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
   standalone: true,
  selector: 'app-input',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class Input {

}
