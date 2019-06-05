import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaEntryServerNodeBaseFilterArgs extends KalturaFilterArgs {
    entryIdEqual?: string;
    entryIdIn?: string;
    serverNodeIdEqual?: number;
    createdAtLessThanOrEqual?: Date;
    createdAtGreaterThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    statusEqual?: KalturaEntryServerNodeStatus;
    statusIn?: string;
    serverTypeEqual?: KalturaEntryServerNodeType;
    serverTypeIn?: string;
}
export declare class KalturaEntryServerNodeBaseFilter extends KalturaFilter {
    entryIdEqual: string;
    entryIdIn: string;
    serverNodeIdEqual: number;
    createdAtLessThanOrEqual: Date;
    createdAtGreaterThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    statusEqual: KalturaEntryServerNodeStatus;
    statusIn: string;
    serverTypeEqual: KalturaEntryServerNodeType;
    serverTypeIn: string;
    constructor(data?: KalturaEntryServerNodeBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}