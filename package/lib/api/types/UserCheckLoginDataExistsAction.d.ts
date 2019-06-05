import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserLoginDataFilter } from './KalturaUserLoginDataFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserCheckLoginDataExistsActionArgs extends KalturaRequestArgs {
    filter: KalturaUserLoginDataFilter;
}
/**
 * Build request payload for service 'user' action 'checkLoginDataExists'.
 *
 * Usage: Action which checks whther user login
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class UserCheckLoginDataExistsAction extends KalturaRequest<boolean> {
    filter: KalturaUserLoginDataFilter;
    constructor(data: UserCheckLoginDataExistsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
