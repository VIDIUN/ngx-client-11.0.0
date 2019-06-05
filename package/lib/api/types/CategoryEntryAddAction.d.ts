import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryEntry } from './KalturaCategoryEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface CategoryEntryAddActionArgs extends KalturaRequestArgs {
    categoryEntry: KalturaCategoryEntry;
}
/**
 * Build request payload for service 'categoryEntry' action 'add'.
 *
 * Usage: Add new CategoryEntry
 *
 * Server response type:         KalturaCategoryEntry
 * Server failure response type: KalturaAPIException
 */
export declare class CategoryEntryAddAction extends KalturaRequest<KalturaCategoryEntry> {
    categoryEntry: KalturaCategoryEntry;
    constructor(data: CategoryEntryAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
