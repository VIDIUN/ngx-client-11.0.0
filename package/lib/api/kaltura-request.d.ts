import { KalturaResponse } from "./kaltura-response";
import { KalturaRequestBase, KalturaRequestBaseArgs } from "./kaltura-request-base";
import { KalturaObjectBase } from './kaltura-object-base';
import { KalturaRequestOptions, KalturaRequestOptionsArgs } from './kaltura-request-options';
export interface KalturaRequestArgs extends KalturaRequestBaseArgs {
}
export declare abstract class KalturaRequest<T> extends KalturaRequestBase {
    private __requestOptions__;
    protected callback: (response: KalturaResponse<T>) => void;
    private responseType;
    private responseSubType;
    protected _responseConstructor: {
        new (): KalturaObjectBase;
    };
    constructor(data: KalturaRequestBaseArgs, {responseType, responseSubType, responseConstructor}: {
        responseType: string;
        responseSubType?: string;
        responseConstructor: {
            new (): KalturaObjectBase;
        };
    });
    setCompletion(callback: (response: KalturaResponse<T>) => void): this;
    private _unwrapResponse(response);
    handleResponse(response: any): KalturaResponse<T>;
    setRequestOptions(optionArgs: KalturaRequestOptionsArgs): this;
    setRequestOptions(options: KalturaRequestOptions): this;
    getRequestOptions(): KalturaRequestOptions;
    buildRequest(defaultRequestOptions: KalturaRequestOptions): {};
}