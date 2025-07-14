import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
   standalone: true,
  selector: 'app-chips',
   imports: [MatChipsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chips.html',
  styleUrl: './chips.css'
})
export class Chips {

}
