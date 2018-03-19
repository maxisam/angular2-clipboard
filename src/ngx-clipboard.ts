import { ClipboardDirective } from './clipboard.directive';
import { CLIPBOARD_SERVICE_PROVIDER } from './clipboard.service';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { WindowTokenModule } from 'ngx-window-token';
export * from './clipboard.directive';
export * from './clipboard.service';

@NgModule({
    imports: [CommonModule, WindowTokenModule],
    // tslint:disable-next-line:object-literal-sort-keys
    declarations: [ClipboardDirective],
    exports: [ClipboardDirective]
})
export class ClipboardModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ClipboardModule,
            providers: [CLIPBOARD_SERVICE_PROVIDER]
        }
    }
}
