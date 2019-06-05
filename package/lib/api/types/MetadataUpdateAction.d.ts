import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    xmlData?: string;
    version?: number;
}
/**
 * Build request payload for service 'metadata' action 'update'.
 *
 * Usage: Update an existing metadata object with new XML content
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataUpdateAction extends KalturaRequest<KalturaMetadata> {
    id: number;
    xmlData: string;
    version: number;
    constructor(data: MetadataUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
