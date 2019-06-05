import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataProfileGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'metadataProfile' action 'get'.
 *
 * Usage: Retrieve a metadata profile object by id
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileGetAction extends KalturaRequest<KalturaMetadataProfile> {
    id: number;
    constructor(data: MetadataProfileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}