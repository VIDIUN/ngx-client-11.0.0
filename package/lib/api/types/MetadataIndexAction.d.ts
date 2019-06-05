import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MetadataIndexActionArgs extends KalturaRequestArgs {
    id: string;
    shouldUpdate: boolean;
}
/**
 * Build request payload for service 'metadata' action 'index'.
 *
 * Usage: Index metadata by id, will also index the related object
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class MetadataIndexAction extends KalturaRequest<number> {
    id: string;
    shouldUpdate: boolean;
    constructor(data: MetadataIndexActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}