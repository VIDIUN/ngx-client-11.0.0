import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserIndexActionArgs extends KalturaRequestArgs {
    id: string;
    shouldUpdate?: boolean;
}
/**
 * Build request payload for service 'user' action 'index'.
 *
 * Usage: Index an entry by id
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class UserIndexAction extends KalturaRequest<string> {
    id: string;
    shouldUpdate: boolean;
    constructor(data: UserIndexActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}