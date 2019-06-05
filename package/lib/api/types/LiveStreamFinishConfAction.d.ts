import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface LiveStreamFinishConfActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'liveStream' action 'finishConf'.
 *
 * Usage: When the conf is finished this API should be called
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class LiveStreamFinishConfAction extends KalturaRequest<boolean> {
    entryId: string;
    constructor(data: LiveStreamFinishConfActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
