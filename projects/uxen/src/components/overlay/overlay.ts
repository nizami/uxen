import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  input,
  output,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'x-overlay',
  imports: [],
  templateUrl: './overlay.html',
  styleUrl: './overlay.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Overlay {
  autoClose = input(true);
  showEvent = output<Overlay>();
  hideEvent = output<Overlay>();
  private dialogRef = viewChild<ElementRef<HTMLDialogElement>>('dialog');
  private visible = false;

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.hide();
  }

  show(): void {
    if (this.visible) {
      return;
    }

    this.visible = true;
    this.dialogRef()?.nativeElement.showModal();
    this.showEvent.emit(this);

    setTimeout(() => (document.activeElement as HTMLElement)?.blur());
  }

  hide(): void {
    if (!this.visible) {
      return;
    }

    this.visible = false;
    this.dialogRef()?.nativeElement.close();
    this.hideEvent.emit(this);
  }

  onBackdropClick(event: MouseEvent, target?: HTMLElement) {
    if (event.ctrlKey || event.shiftKey || event.metaKey || !this.autoClose()) {
      return;
    }

    if (
      event.target === target ||
      event.target === this.dialogRef()?.nativeElement
    ) {
      this.hide();
    }
  }
}
