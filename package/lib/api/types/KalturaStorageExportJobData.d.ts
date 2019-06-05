import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageJobData, KalturaStorageJobDataArgs } from './KalturaStorageJobData';
export interface KalturaStorageExportJobDataArgs extends KalturaStorageJobDataArgs {
    force?: boolean;
    createLink?: boolean;
}
export declare class KalturaStorageExportJobData extends KalturaStorageJobData {
    force: boolean;
    createLink: boolean;
    constructor(data?: KalturaStorageExportJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
