import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { Ping } from "uxen";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ping],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
