import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ExternalMediaGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'externalMedia' action 'get'.
 *
 * Usage: Get external media entry by ID
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
export declare class ExternalMediaGetAction extends KalturaRequest<KalturaExternalMediaEntry> {
    id: string;
    constructor(data: ExternalMediaGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
