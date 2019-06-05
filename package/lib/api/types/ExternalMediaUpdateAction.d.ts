import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ExternalMediaUpdateActionArgs extends KalturaRequestArgs {
    id: string;
    entry: KalturaExternalMediaEntry;
}
/**
 * Build request payload for service 'externalMedia' action 'update'.
 *
 * Usage: Update external media entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class ExternalMediaUpdateAction extends KalturaRequest<KalturaExternalMediaEntry> {
    id: string;
    entry: KalturaExternalMediaEntry;
    constructor(data: ExternalMediaUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}