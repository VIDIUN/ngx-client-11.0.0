import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryGetActionArgs extends KalturaRequestArgs {
    entryId: string;
    version?: number;
}
/**
 * Build request payload for service 'baseEntry' action 'get'.
 *
 * Usage: Get base entry by ID
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryGetAction extends KalturaRequest<KalturaBaseEntry> {
    entryId: string;
    version: number;
    constructor(data: BaseEntryGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}