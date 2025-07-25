import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
   
   standalone: true,
  selector: 'app-icon',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.html',
  styleUrl: './icon.css'
})
export class Icon {

}
