import { KalturaUploadRequest } from '../api/kaltura-upload-request';
import { Observable } from 'rxjs';
import { KalturaRequestOptions } from '../api/kaltura-request-options';
import { KalturaClientOptions } from '../kaltura-client-options';
export declare class KalturaUploadRequestAdapter {
    clientOptions: KalturaClientOptions;
    defaultRequestOptions: KalturaRequestOptions;
    private _chunkUploadSupported(request);
    constructor(clientOptions: KalturaClientOptions, defaultRequestOptions: KalturaRequestOptions);
    transmit(request: KalturaUploadRequest<any>): Observable<any>;
    private _getFormData(filePropertyName, fileName, fileChunk);
    private _unwrapResponse(response);
    private _chunkUpload(request, uploadChunkData);
}
