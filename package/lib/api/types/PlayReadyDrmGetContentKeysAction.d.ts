import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyContentKey } from './KalturaPlayReadyContentKey';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlayReadyDrmGetContentKeysActionArgs extends KalturaRequestArgs {
    keyIds: string;
}
/**
 * Build request payload for service 'playReadyDrm' action 'getContentKeys'.
 *
 * Usage: Get content keys for input key ids
 *
 * Server response type:         KalturaPlayReadyContentKey[]
 * Server failure response type: KalturaAPIException
 */
export declare class PlayReadyDrmGetContentKeysAction extends KalturaRequest<KalturaPlayReadyContentKey[]> {
    keyIds: string;
    constructor(data: PlayReadyDrmGetContentKeysActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
