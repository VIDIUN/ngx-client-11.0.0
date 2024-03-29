import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataProfileUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    metadataProfile: KalturaMetadataProfile;
    xsdData?: string;
    viewsData?: string;
}
/**
 * Build request payload for service 'metadataProfile' action 'update'.
 *
 * Usage: Update an existing metadata object
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileUpdateAction extends KalturaRequest<KalturaMetadataProfile> {
    id: number;
    metadataProfile: KalturaMetadataProfile;
    xsdData: string;
    viewsData: string;
    constructor(data: MetadataProfileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
