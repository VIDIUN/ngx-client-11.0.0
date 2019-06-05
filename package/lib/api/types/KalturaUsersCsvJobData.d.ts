import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';
export interface KalturaUsersCsvJobDataArgs extends KalturaJobDataArgs {
    filter?: KalturaUserFilter;
    metadataProfileId?: number;
    additionalFields?: KalturaCsvAdditionalFieldInfo[];
    userName?: string;
    userMail?: string;
    outputPath?: string;
}
export declare class KalturaUsersCsvJobData extends KalturaJobData {
    filter: KalturaUserFilter;
    metadataProfileId: number;
    additionalFields: KalturaCsvAdditionalFieldInfo[];
    userName: string;
    userMail: string;
    outputPath: string;
    constructor(data?: KalturaUsersCsvJobDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
