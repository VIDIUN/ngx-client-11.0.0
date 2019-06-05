import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataProfileAddActionArgs extends KalturaRequestArgs {
    metadataProfile: KalturaMetadataProfile;
    xsdData: string;
    viewsData?: string;
}
/**
 * Build request payload for service 'metadataProfile' action 'add'.
 *
 * Usage: Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileAddAction extends KalturaRequest<KalturaMetadataProfile> {
    metadataProfile: KalturaMetadataProfile;
    xsdData: string;
    viewsData: string;
    constructor(data: MetadataProfileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}