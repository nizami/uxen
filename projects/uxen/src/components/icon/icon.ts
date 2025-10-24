import {Component, input} from '@angular/core';
import {SvgIconName} from './svg-icon-list';

@Component({
  selector: 'x-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  name = input.required<SvgIconName>();
}
