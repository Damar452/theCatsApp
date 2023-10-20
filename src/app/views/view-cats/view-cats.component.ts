import { Component, Input } from '@angular/core';
import { Cat } from 'src/app/models/cat-interface';

@Component({
  selector: 'app-view-cats',
  templateUrl: './view-cats.component.html',
  styleUrls: ['./view-cats.component.scss'],
})
export class ViewCatsComponent {

  @Input() cat!: Cat;
}
