import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-button-view',
  imports: [CommonModule],
  templateUrl: './button-view.html',
  styleUrl: './button-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonView {
  types = ['filled', 'outlined', 'text'] as const;
  states = ['default', 'disabled', 'active'] as const;
  statuses = ['default', 'accent', 'success', 'danger', 'warning', 'info'] as const;
}
