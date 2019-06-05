import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ResponseProfileUpdateStatusActionArgs extends KalturaRequestArgs {
    id: number;
    status: KalturaResponseProfileStatus;
}
/**
 * Build request payload for service 'responseProfile' action 'updateStatus'.
 *
 * Usage: Update response profile status by id
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
export declare class ResponseProfileUpdateStatusAction extends KalturaRequest<KalturaResponseProfile> {
    id: number;
    status: KalturaResponseProfileStatus;
    constructor(data: ResponseProfileUpdateStatusActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
