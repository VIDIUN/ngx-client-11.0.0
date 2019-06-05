import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ExternalMediaDeleteActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'externalMedia' action 'delete'.
 *
 * Usage: Delete a external media entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class ExternalMediaDeleteAction extends KalturaRequest<void> {
    id: string;
    constructor(data: ExternalMediaDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}