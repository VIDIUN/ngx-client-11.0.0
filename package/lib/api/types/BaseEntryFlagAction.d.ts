import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaModerationFlag } from './KalturaModerationFlag';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface BaseEntryFlagActionArgs extends KalturaRequestArgs {
    moderationFlag: KalturaModerationFlag;
}
/**
 * Build request payload for service 'baseEntry' action 'flag'.
 *
 * Usage: Flag inappropriate entry for moderation
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class BaseEntryFlagAction extends KalturaRequest<void> {
    moderationFlag: KalturaModerationFlag;
    constructor(data: BaseEntryFlagActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
