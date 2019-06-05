import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MixingGetActionArgs extends KalturaRequestArgs {
    entryId: string;
    version?: number;
}
/**
 * Build request payload for service 'mixing' action 'get'.
 *
 * Usage: Get mix entry by id
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MixingGetAction extends KalturaRequest<KalturaMixEntry> {
    entryId: string;
    version: number;
    constructor(data: MixingGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}