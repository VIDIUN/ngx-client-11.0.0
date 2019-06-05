import { Observable } from 'rxjs';
import { KalturaFileRequest } from '../api/kaltura-file-request';
import { KalturaRequestOptions } from '../api/kaltura-request-options';
import { KalturaClientOptions } from '../kaltura-client-options';
export declare class KalturaFileRequestAdapter {
    transmit(request: KalturaFileRequest, clientOptions: KalturaClientOptions, defaultRequestOptions: KalturaRequestOptions): Observable<{
        url: string;
    }>;
}
