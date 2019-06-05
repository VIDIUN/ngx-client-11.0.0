import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MixingCloneActionArgs extends KalturaRequestArgs {
    entryId: string;
}
/**
 * Build request payload for service 'mixing' action 'clone'.
 *
 * Usage: Clones an existing mix
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 */
export declare class MixingCloneAction extends KalturaRequest<KalturaMixEntry> {
    entryId: string;
    constructor(data: MixingCloneActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}