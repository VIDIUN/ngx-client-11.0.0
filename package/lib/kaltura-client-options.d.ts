import { InjectionToken } from '@angular/core';
export declare const KALTURA_CLIENT_OPTIONS: InjectionToken<KalturaClientOptions>;
export interface KalturaClientOptions {
    clientTag: string;
    endpointUrl: string;
    chunkFileSize?: number;
    chunkFileDisabled?: boolean;
}
