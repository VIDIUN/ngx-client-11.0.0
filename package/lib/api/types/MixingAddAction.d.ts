import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MixingAddActionArgs extends KalturaRequestArgs {
    mixEntry: KalturaMixEntry;
}
/**
 * Build request payload for service 'mixing' action 'add'.
 *
 * Usage: Adds a new mix.
 * If the dataContent is null, a default timeline will be created
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MixingAddAction extends KalturaRequest<KalturaMixEntry> {
    mixEntry: KalturaMixEntry;
    constructor(data: MixingAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
