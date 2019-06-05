import { HttpClient } from '@angular/common/http';
import { KalturaMultiRequest } from '../api/kaltura-multi-request';
import { KalturaMultiResponse } from '../api/kaltura-multi-response';
import { Observable } from 'rxjs';
import { KalturaRequestOptions } from '../api/kaltura-request-options';
import { KalturaClientOptions } from '../kaltura-client-options';
export declare class KalturaMultiRequestAdapter {
    private _http;
    constructor(_http: HttpClient);
    transmit(request: KalturaMultiRequest, clientOptions: KalturaClientOptions, defaultRequestOptions: KalturaRequestOptions): Observable<KalturaMultiResponse>;
}
