import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTaggedObjectType } from './KalturaTaggedObjectType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaTagFilterArgs extends KalturaFilterArgs {
    objectTypeEqual?: KalturaTaggedObjectType;
    tagEqual?: string;
    tagStartsWith?: string;
    instanceCountEqual?: number;
    instanceCountIn?: number;
}
export declare class KalturaTagFilter extends KalturaFilter {
    objectTypeEqual: KalturaTaggedObjectType;
    tagEqual: string;
    tagStartsWith: string;
    instanceCountEqual: number;
    instanceCountIn: number;
    constructor(data?: KalturaTagFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
