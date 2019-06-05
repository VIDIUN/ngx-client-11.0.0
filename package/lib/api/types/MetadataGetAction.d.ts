import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'metadata' action 'get'.
 *
 * Usage: Retrieve a metadata object by id
 *
 * Server response type:         KalturaMetadata
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataGetAction extends KalturaRequest<KalturaMetadata> {
    id: number;
    constructor(data: MetadataGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
