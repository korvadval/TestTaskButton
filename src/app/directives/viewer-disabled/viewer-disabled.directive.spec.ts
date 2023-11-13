import { TestBed } from "@angular/core/testing";
import { ViewerDisabledDirective } from "./viewer-disabled.directive";
import { AppModule } from "src/app/app.module";
import { ElementRef } from "@angular/core";
import { MatTooltip } from "@angular/material/tooltip";

describe('ViewerDisabledDirective', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[AppModule],
    declarations: [ViewerDisabledDirective],
  }));
  
  it('should create an instance', () => {
    const directive = new ViewerDisabledDirective({} as ElementRef<any>,{} as MatTooltip);
    expect(directive).toBeTruthy();
  });
});
