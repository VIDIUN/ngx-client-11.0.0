import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface PollAddActionArgs extends KalturaRequestArgs {
    pollType?: string;
}
/**
 * Build request payload for service 'poll' action 'add'.
 *
 * Usage: Add Action
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class PollAddAction extends KalturaRequest<string> {
    pollType: string;
    constructor(data?: PollAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}