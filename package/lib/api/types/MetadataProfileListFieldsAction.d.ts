import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfileFieldListResponse } from './KalturaMetadataProfileFieldListResponse';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataProfileListFieldsActionArgs extends KalturaRequestArgs {
    metadataProfileId: number;
}
/**
 * Build request payload for service 'metadataProfile' action 'listFields'.
 *
 * Usage: List metadata profile fields by metadata profile id
 *
 * Server response type:         KalturaMetadataProfileFieldListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileListFieldsAction extends KalturaRequest<KalturaMetadataProfileFieldListResponse> {
    metadataProfileId: number;
    constructor(data: MetadataProfileListFieldsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
