import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-card-view',
  imports: [],
  templateUrl: './card-view.html',
  styleUrl: './card-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardView {}
