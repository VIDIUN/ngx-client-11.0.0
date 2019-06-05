import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyContentKey } from './KalturaPlayReadyContentKey';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PlayReadyDrmGenerateKeyActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'playReadyDrm' action 'generateKey'.
 *
 * Usage: Generate key id and content key for PlayReady encryption
 *
 * Server response type:         KalturaPlayReadyContentKey
 * Server failure response type: KalturaAPIException
 */
export declare class PlayReadyDrmGenerateKeyAction extends KalturaRequest<KalturaPlayReadyContentKey> {
    constructor(data?: PlayReadyDrmGenerateKeyActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
