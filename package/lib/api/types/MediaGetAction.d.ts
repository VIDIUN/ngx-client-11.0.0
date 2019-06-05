import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaGetActionArgs extends KalturaRequestArgs {
    entryId: string;
    version?: number;
}
/**
 * Build request payload for service 'media' action 'get'.
 *
 * Usage: Get media entry by ID
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MediaGetAction extends KalturaRequest<KalturaMediaEntry> {
    entryId: string;
    version: number;
    constructor(data: MediaGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
