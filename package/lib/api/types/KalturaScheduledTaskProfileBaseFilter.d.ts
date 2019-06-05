import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfileStatus } from './KalturaScheduledTaskProfileStatus';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaScheduledTaskProfileBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    statusEqual?: KalturaScheduledTaskProfileStatus;
    statusIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    lastExecutionStartedAtGreaterThanOrEqual?: Date;
    lastExecutionStartedAtLessThanOrEqual?: Date;
}
export declare class KalturaScheduledTaskProfileBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    partnerIdEqual: number;
    partnerIdIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    statusEqual: KalturaScheduledTaskProfileStatus;
    statusIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    lastExecutionStartedAtGreaterThanOrEqual: Date;
    lastExecutionStartedAtLessThanOrEqual: Date;
    constructor(data?: KalturaScheduledTaskProfileBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}