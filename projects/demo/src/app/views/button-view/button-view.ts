import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Icon, svgIconList, SvgIconName} from 'uxen';

@Component({
  selector: 'app-button-view',
  imports: [CommonModule, Icon],
  templateUrl: './button-view.html',
  styleUrl: './button-view.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonView {
  types = ['filled', 'outlined', 'text'] as const;
  states = ['default', 'disabled', 'active', 'with-icon', 'only-icon'] as const;
  statuses = ['default', 'accent', 'success', 'danger', 'warning', 'info'] as const;
  get iconName(): SvgIconName {
    return svgIconList[Math.floor(Math.random() * svgIconList.length)];
  }
}
