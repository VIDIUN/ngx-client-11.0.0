import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryExportActionArgs extends KalturaRequestArgs {
    entryId: string;
    storageProfileId: number;
}
/**
 * Build request payload for service 'baseEntry' action 'export'.
 *
 *
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryExportAction extends KalturaRequest<KalturaBaseEntry> {
    entryId: string;
    storageProfileId: number;
    constructor(data: BaseEntryExportActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
