import {ChangeDetectionStrategy, Component, OnInit, viewChild} from '@angular/core';
import {Overlay} from '../overlay/overlay';

@Component({
  selector: 'x-dialog',
  imports: [Overlay],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dialog implements OnInit {
  private overlay = viewChild.required(Overlay);

  ngOnInit(): void {
    this.overlay().show();
  }

  show(): void {
    this.overlay().show();
  }
}
