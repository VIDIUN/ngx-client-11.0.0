import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControl } from './KalturaAccessControl';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AccessControlGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'accessControl' action 'get'.
 *
 * Usage: Get Access Control Profile by id
 *
 * Server response type:         KalturaAccessControl
 * Server failure response type: KalturaAPIException
 */
export declare class AccessControlGetAction extends KalturaRequest<KalturaAccessControl> {
    id: number;
    constructor(data: AccessControlGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}