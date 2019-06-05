import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { KalturaRequest } from './api/kaltura-request';
import { KalturaMultiRequest } from './api/kaltura-multi-request';
import { KalturaMultiResponse } from './api/kaltura-multi-response';
import { KalturaFileRequest } from './api/kaltura-file-request';
import { KalturaClientOptions } from './kaltura-client-options';
import { KalturaRequestOptionsArgs } from './api/kaltura-request-options';
export declare class KalturaClient {
    private _http;
    private _options;
    private _defaultRequestOptions;
    constructor(_http: HttpClient, _options: KalturaClientOptions, defaultRequestOptionsArgs: KalturaRequestOptionsArgs);
    appendOptions(options: KalturaClientOptions): void;
    setOptions(options: KalturaClientOptions): void;
    appendDefaultRequestOptions(args: KalturaRequestOptionsArgs): void;
    setDefaultRequestOptions(args: KalturaRequestOptionsArgs): void;
    private _validateOptions();
    request<T>(request: KalturaRequest<T>): Observable<T>;
    request<T>(request: KalturaFileRequest): Observable<{
        url: string;
    }>;
    multiRequest(requests: KalturaRequest<any>[]): Observable<KalturaMultiResponse>;
    multiRequest(request: KalturaMultiRequest): Observable<KalturaMultiResponse>;
}
