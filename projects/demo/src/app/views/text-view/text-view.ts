import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-text-view',
  imports: [],
  templateUrl: './text-view.html',
  styleUrl: './text-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextView {}
