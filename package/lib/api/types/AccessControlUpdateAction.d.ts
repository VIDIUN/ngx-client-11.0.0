import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControl } from './KalturaAccessControl';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AccessControlUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    accessControl: KalturaAccessControl;
}
/**
 * Build request payload for service 'accessControl' action 'update'.
 *
 * Usage: Update Access Control Profile by id
 *
 * Server response type:         KalturaAccessControl
 * Server failure response type: KalturaAPIException
 */
export declare class AccessControlUpdateAction extends KalturaRequest<KalturaAccessControl> {
    id: number;
    accessControl: KalturaAccessControl;
    constructor(data: AccessControlUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}