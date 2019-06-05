import { KalturaRequest, KalturaRequestArgs } from "./kaltura-request";
import { KalturaObjectBase } from "./kaltura-object-base";
export declare type ProgressCallback = (loaded: number, total: number) => void;
export interface KalturaUploadRequestArgs extends KalturaRequestArgs {
    uploadedFileSize?: number;
}
export declare class KalturaUploadRequest<T> extends KalturaRequest<T> {
    private _progressCallback;
    uploadedFileSize: number;
    constructor(data: KalturaUploadRequestArgs, {responseType, responseSubType, responseConstructor}: {
        responseType: string;
        responseSubType?: string;
        responseConstructor: {
            new (): KalturaObjectBase;
        };
    });
    setProgress(callback: ProgressCallback): this;
    _getProgressCallback(): ProgressCallback;
    supportChunkUpload(): boolean;
    getFileInfo(): {
        file: File;
        propertyName: string;
    };
    toRequestObject(): {};
}
