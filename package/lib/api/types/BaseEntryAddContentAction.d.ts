import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaResource } from './KalturaResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryAddContentActionArgs extends KalturaRequestArgs {
    entryId: string;
    resource: KalturaResource;
}
/**
 * Build request payload for service 'baseEntry' action 'addContent'.
 *
 * Usage: Attach content resource to entry in status NO_MEDIA
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryAddContentAction extends KalturaRequest<KalturaBaseEntry> {
    entryId: string;
    resource: KalturaResource;
    constructor(data: BaseEntryAddContentActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}