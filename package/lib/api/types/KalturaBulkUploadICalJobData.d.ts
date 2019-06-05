import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventType } from './KalturaScheduleEventType';
import { KalturaBulkUploadJobData, KalturaBulkUploadJobDataArgs } from './KalturaBulkUploadJobData';
export interface KalturaBulkUploadICalJobDataArgs extends KalturaBulkUploadJobDataArgs {
    eventsType?: KalturaScheduleEventType;
}
export declare class KalturaBulkUploadICalJobData extends KalturaBulkUploadJobData {
    eventsType: KalturaScheduleEventType;
    constructor(data?: KalturaBulkUploadICalJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
