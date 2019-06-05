import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAccessControl } from './KalturaAccessControl';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AccessControlAddActionArgs extends KalturaRequestArgs {
    accessControl: KalturaAccessControl;
}
/**
 * Build request payload for service 'accessControl' action 'add'.
 *
 * Usage: Add new Access Control Profile
 *
 * Server response type:         KalturaAccessControl
 * Server failure response type: KalturaAPIException
 */
export declare class AccessControlAddAction extends KalturaRequest<KalturaAccessControl> {
    accessControl: KalturaAccessControl;
    constructor(data: AccessControlAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
