import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {RouterLinkWithHref, RouterOutlet} from '@angular/router';
import icons from './icons.svg';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly domSanitizer = inject(DomSanitizer);

  icons = this.domSanitizer.bypassSecurityTrustHtml(icons);
}
