import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserServeCsvActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'user' action 'serveCsv'.
 *
 * Usage: Will serve a requested csv
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class UserServeCsvAction extends KalturaRequest<string> {
    id: string;
    constructor(data: UserServeCsvActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}