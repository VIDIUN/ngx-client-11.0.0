import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EmailIngestionProfileDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'EmailIngestionProfile' action 'delete'.
 *
 * Usage: Delete an existing EmailIngestionProfile
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class EmailIngestionProfileDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: EmailIngestionProfileDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}