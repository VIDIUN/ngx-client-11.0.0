import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUploadResult, KalturaBulkUploadResultArgs } from './KalturaBulkUploadResult';
export interface KalturaBulkUploadResultScheduleEventArgs extends KalturaBulkUploadResultArgs {
    referenceId?: string;
}
export declare class KalturaBulkUploadResultScheduleEvent extends KalturaBulkUploadResult {
    referenceId: string;
    constructor(data?: KalturaBulkUploadResultScheduleEventArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
