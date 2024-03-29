import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataProfileRevertActionArgs extends KalturaRequestArgs {
    id: number;
    toVersion: number;
}
/**
 * Build request payload for service 'metadataProfile' action 'revert'.
 *
 * Usage: Update an existing metadata object definition file
 *
 * Server response type:         KalturaMetadataProfile
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataProfileRevertAction extends KalturaRequest<KalturaMetadataProfile> {
    id: number;
    toVersion: number;
    constructor(data: MetadataProfileRevertActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
