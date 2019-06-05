import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaModerationFlag } from './KalturaModerationFlag';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MediaFlagActionArgs extends KalturaRequestArgs {
    moderationFlag: KalturaModerationFlag;
}
/**
 * Build request payload for service 'media' action 'flag'.
 *
 * Usage: Flag inappropriate media entry for moderation
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class MediaFlagAction extends KalturaRequest<void> {
    moderationFlag: KalturaModerationFlag;
    constructor(data: MediaFlagActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
