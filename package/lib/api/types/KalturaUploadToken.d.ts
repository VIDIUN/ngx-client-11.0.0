import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUploadTokenStatus } from './KalturaUploadTokenStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaUploadTokenArgs extends KalturaObjectBaseArgs {
    fileName?: string;
    fileSize?: number;
    autoFinalize?: KalturaNullableBoolean;
}
export declare class KalturaUploadToken extends KalturaObjectBase {
    readonly id: string;
    readonly partnerId: number;
    readonly userId: string;
    readonly status: KalturaUploadTokenStatus;
    fileName: string;
    fileSize: number;
    readonly uploadedFileSize: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly uploadUrl: string;
    autoFinalize: KalturaNullableBoolean;
    constructor(data?: KalturaUploadTokenArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}