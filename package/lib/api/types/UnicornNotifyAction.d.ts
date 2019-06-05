import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UnicornNotifyActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'unicorn' action 'notify'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class UnicornNotifyAction extends KalturaRequest<void> {
    id: number;
    constructor(data: UnicornNotifyActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}