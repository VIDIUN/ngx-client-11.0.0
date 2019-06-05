/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { KalturaClient } from './kaltura-client.service';
import { HttpClientModule } from '@angular/common/http';
import { KALTURA_CLIENT_OPTIONS } from './kaltura-client-options';
import { KALTURA_CLIENT_DEFAULT_REQUEST_OPTIONS } from './api/kaltura-request-options';
export class KalturaClientModule {
    /**
     * @param {?} module
     */
    constructor(module) {
        if (module) {
            throw new Error("'KalturaClientModule' module imported twice.");
        }
    }
    /**
     * @param {?=} clientOptionsFactory
     * @param {?=} defaultRequestOptionsArgsFactory
     * @return {?}
     */
    static forRoot(clientOptionsFactory, defaultRequestOptionsArgsFactory) {
        return {
            ngModule: KalturaClientModule,
            providers: [
                KalturaClient,
                KALTURA_CLIENT_OPTIONS ? {
                    provide: KALTURA_CLIENT_OPTIONS,
                    useFactory: clientOptionsFactory
                } : [],
                KALTURA_CLIENT_DEFAULT_REQUEST_OPTIONS ? {
                    provide: KALTURA_CLIENT_DEFAULT_REQUEST_OPTIONS,
                    useFactory: defaultRequestOptionsArgsFactory
                } : []
            ]
        };
    }
}
KalturaClientModule.decorators = [
    { type: NgModule, args: [{
                imports: /** @type {?} */ ([
                    HttpClientModule
                ]),
                declarations: /** @type {?} */ ([]),
                exports: /** @type {?} */ ([]),
                providers: /** @type {?} */ ([])
            },] },
];
/** @nocollapse */
KalturaClientModule.ctorParameters = () => [
    { type: KalturaClientModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FsdHVyYS1jbGllbnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2thbHR1cmEtY2xpZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUF3QixNQUFNLDBCQUEwQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBNkIsTUFBTSwrQkFBK0IsQ0FBQztBQWNsSCxNQUFNOzs7O0lBRUYsWUFBb0MsTUFBMkI7UUFDM0QsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztTQUNuRTtLQUNKOzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFpRCxFQUFFLGdDQUFrRTtRQUNoSSxNQUFNLENBQUM7WUFDSCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRTtnQkFDUCxhQUFhO2dCQUNiLHNCQUFzQixDQUFDLENBQUMsQ0FBQztvQkFDckIsT0FBTyxFQUFFLHNCQUFzQjtvQkFDL0IsVUFBVSxFQUFFLG9CQUFvQjtpQkFDbkMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDTixzQ0FBc0MsQ0FBQSxDQUFDLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxzQ0FBc0M7b0JBQy9DLFVBQVUsRUFBRSxnQ0FBZ0M7aUJBQy9DLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDVDtTQUNKLENBQUM7S0FDTDs7O1lBbENKLFFBQVEsU0FBQztnQkFDTixPQUFPLG9CQUFTO29CQUNaLGdCQUFnQjtpQkFDbkIsQ0FBQTtnQkFDRCxZQUFZLG9CQUFTLEVBQ3BCLENBQUE7Z0JBQ0QsT0FBTyxvQkFBUyxFQUNmLENBQUE7Z0JBQ0QsU0FBUyxvQkFBUyxFQUNqQixDQUFBO2FBQ0o7Ozs7WUFHK0MsbUJBQW1CLHVCQUFsRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEthbHR1cmFDbGllbnQgfSBmcm9tICcuL2thbHR1cmEtY2xpZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEtBTFRVUkFfQ0xJRU5UX09QVElPTlMsIEthbHR1cmFDbGllbnRPcHRpb25zIH0gZnJvbSAnLi9rYWx0dXJhLWNsaWVudC1vcHRpb25zJztcbmltcG9ydCB7IEtBTFRVUkFfQ0xJRU5UX0RFRkFVTFRfUkVRVUVTVF9PUFRJT05TLCBLYWx0dXJhUmVxdWVzdE9wdGlvbnNBcmdzIH0gZnJvbSAnLi9hcGkva2FsdHVyYS1yZXF1ZXN0LW9wdGlvbnMnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogPGFueVtdPltcbiAgICAgICAgSHR0cENsaWVudE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiA8YW55W10+W1xuICAgIF0sXG4gICAgZXhwb3J0czogPGFueVtdPltcbiAgICBdLFxuICAgIHByb3ZpZGVyczogPGFueVtdPltcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEthbHR1cmFDbGllbnRNb2R1bGUge1xuXG4gICAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgbW9kdWxlOiBLYWx0dXJhQ2xpZW50TW9kdWxlKSB7XG4gICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidLYWx0dXJhQ2xpZW50TW9kdWxlJyBtb2R1bGUgaW1wb3J0ZWQgdHdpY2UuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGZvclJvb3QoY2xpZW50T3B0aW9uc0ZhY3Rvcnk/OiAoKSA9PiBLYWx0dXJhQ2xpZW50T3B0aW9ucywgZGVmYXVsdFJlcXVlc3RPcHRpb25zQXJnc0ZhY3Rvcnk/OiAoKSA9PiBLYWx0dXJhUmVxdWVzdE9wdGlvbnNBcmdzKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogS2FsdHVyYUNsaWVudE1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIEthbHR1cmFDbGllbnQsXG4gICAgICAgICAgICAgICAgS0FMVFVSQV9DTElFTlRfT1BUSU9OUyA/IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogS0FMVFVSQV9DTElFTlRfT1BUSU9OUyxcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogY2xpZW50T3B0aW9uc0ZhY3RvcnlcbiAgICAgICAgICAgICAgICB9IDogW10sXG4gICAgICAgICAgICAgICAgS0FMVFVSQV9DTElFTlRfREVGQVVMVF9SRVFVRVNUX09QVElPTlM/IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZTogS0FMVFVSQV9DTElFTlRfREVGQVVMVF9SRVFVRVNUX09QVElPTlMsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGRlZmF1bHRSZXF1ZXN0T3B0aW9uc0FyZ3NGYWN0b3J5XG4gICAgICAgICAgICAgICAgfSA6IFtdXG4gICAgICAgICAgICBdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19