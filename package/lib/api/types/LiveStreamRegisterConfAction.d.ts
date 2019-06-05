import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamRegisterConfActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'liveStream' action 'registerConf'.
 *
 * Usage: Mark that the conference has actually started
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamRegisterConfAction extends KalturaRequest<boolean> {
    entryId: string;
    constructor(data: LiveStreamRegisterConfActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}