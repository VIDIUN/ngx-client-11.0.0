import { ModuleWithProviders } from '@angular/core';
import { KalturaClientOptions } from './kaltura-client-options';
import { KalturaRequestOptionsArgs } from './api/kaltura-request-options';
export declare class KalturaClientModule {
    constructor(module: KalturaClientModule);
    static forRoot(clientOptionsFactory?: () => KalturaClientOptions, defaultRequestOptionsArgsFactory?: () => KalturaRequestOptionsArgs): ModuleWithProviders;
}
