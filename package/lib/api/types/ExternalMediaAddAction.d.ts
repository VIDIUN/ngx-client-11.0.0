import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ExternalMediaAddActionArgs extends KalturaRequestArgs {
    entry: KalturaExternalMediaEntry;
}
/**
 * Build request payload for service 'externalMedia' action 'add'.
 *
 * Usage: Add external media entry
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class ExternalMediaAddAction extends KalturaRequest<KalturaExternalMediaEntry> {
    entry: KalturaExternalMediaEntry;
    constructor(data: ExternalMediaAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
