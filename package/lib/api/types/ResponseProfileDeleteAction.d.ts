import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ResponseProfileDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'responseProfile' action 'delete'.
 *
 * Usage: Delete response profile by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class ResponseProfileDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: ResponseProfileDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
