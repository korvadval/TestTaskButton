import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent } from 'rxjs';

@UntilDestroy()
@Directive({
  selector: '[isViewerDisabled]',
  providers: [MatTooltip],
})
export class ViewerDisabledDirective implements OnInit {
  @Input() isViewerDisabled = false;
  @Input() viewerTooltip = 'This is disabled button!';

  constructor(private _el: ElementRef, private _tooltip: MatTooltip) {}

  ngOnInit(): void {
    if (this.isViewerDisabled) {
      const el = this._el.nativeElement;

      // handle disable click
      fromEvent<MouseEvent>(el, 'click', { capture: true })
        .pipe(untilDestroyed(this))
        .subscribe((e: MouseEvent) => {
          e.stopPropagation();
        });

      // set styles for custom disable
      el.style.color = 'rgba(0, 0, 0, 0.38)';
      el.style.backgroundColor = 'rgba(0, 0, 0, 0.12)';
      el.style.cursor = 'not-allowed';
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.isViewerDisabled) {
      this._tooltip.message = this.viewerTooltip;
      this._tooltip.show();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.isViewerDisabled) {
      this._tooltip.hide();
    }
  }
}
