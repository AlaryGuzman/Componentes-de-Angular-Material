import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
   standalone: true,
  selector: 'app-buttom',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './buttom.html',
  styleUrl: './buttom.css'
})
export class Buttom {

}
