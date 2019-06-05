import { KalturaRequest } from '../api/kaltura-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { KalturaRequestOptions } from '../api/kaltura-request-options';
import { KalturaClientOptions } from '../kaltura-client-options';
export declare class KalturaRequestAdapter {
    private _http;
    constructor(_http: HttpClient);
    transmit<T>(request: KalturaRequest<T>, clientOptions: KalturaClientOptions, defaultRequestOptions: KalturaRequestOptions): Observable<T>;
}
