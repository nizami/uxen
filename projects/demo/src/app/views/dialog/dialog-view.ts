import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Dialog, Overlay} from 'uxen';

@Component({
  selector: 'app-dialog-view',
  imports: [Overlay, Dialog],
  templateUrl: './dialog-view.html',
  styleUrl: './dialog-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DialogView {}
