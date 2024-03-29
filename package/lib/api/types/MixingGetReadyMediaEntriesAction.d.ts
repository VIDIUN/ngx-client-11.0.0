import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MixingGetReadyMediaEntriesActionArgs extends KalturaRequestArgs {
    mixId: string;
    version?: number;
}
/**
 * Build request payload for service 'mixing' action 'getReadyMediaEntries'.
 *
 * Usage: Get all ready media entries that exist in the given mix id
 *
 * Server response type:         KalturaMediaEntry[]
 * Server failure response type: KalturaAPIException
 */
export declare class MixingGetReadyMediaEntriesAction extends KalturaRequest<KalturaMediaEntry[]> {
    mixId: string;
    version: number;
    constructor(data: MixingGetReadyMediaEntriesActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
