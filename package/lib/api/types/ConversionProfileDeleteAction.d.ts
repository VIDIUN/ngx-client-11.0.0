import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ConversionProfileDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'conversionProfile' action 'delete'.
 *
 * Usage: Delete Conversion Profile by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class ConversionProfileDeleteAction extends KalturaRequest<void> {
    id: number;
    constructor(data: ConversionProfileDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
