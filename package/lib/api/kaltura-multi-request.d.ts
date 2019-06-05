import { KalturaRequest } from "./kaltura-request";
import { KalturaRequestBase } from "./kaltura-request-base";
import { KalturaMultiResponse } from "./kaltura-multi-response";
import { KalturaObjectMetadata } from './kaltura-object-base';
import { KalturaRequestOptions } from './kaltura-request-options';
export declare class KalturaMultiRequest extends KalturaRequestBase {
    protected callback: (response: KalturaMultiResponse) => void;
    requests: KalturaRequest<any>[];
    constructor(...args: KalturaRequest<any>[]);
    buildRequest(defaultRequestOptions: KalturaRequestOptions): {};
    protected _getMetadata(): KalturaObjectMetadata;
    private _unwrapResponse(response);
    setCompletion(callback: (response: KalturaMultiResponse) => void): KalturaMultiRequest;
    handleResponse(responses: any): KalturaMultiResponse;
}