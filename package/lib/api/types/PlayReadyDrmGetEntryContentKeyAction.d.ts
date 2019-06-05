import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyContentKey } from './KalturaPlayReadyContentKey';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlayReadyDrmGetEntryContentKeyActionArgs extends KalturaRequestArgs {
    entryId: string;
    createIfMissing?: boolean;
}
/**
 * Build request payload for service 'playReadyDrm' action 'getEntryContentKey'.
 *
 * Usage: Get content key and key id for the given entry
 *
 * Server response type:         KalturaPlayReadyContentKey
 * Server failure response type: KalturaAPIException
 */
export declare class PlayReadyDrmGetEntryContentKeyAction extends KalturaRequest<KalturaPlayReadyContentKey> {
    entryId: string;
    createIfMissing: boolean;
    constructor(data: PlayReadyDrmGetEntryContentKeyActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
