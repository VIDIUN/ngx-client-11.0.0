import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface MixingGetMixesByMediaIdActionArgs extends KalturaRequestArgs {
    mediaEntryId: string;
}
/**
 * Build request payload for service 'mixing' action 'getMixesByMediaId'.
 *
 * Usage: Get the mixes in which the media entry is included
 *
 * Server response type:         KalturaMixEntry[]
 * Server failure response type: KalturaAPIException
 */
export declare class MixingGetMixesByMediaIdAction extends KalturaRequest<KalturaMixEntry[]> {
    mediaEntryId: string;
    constructor(data: MixingGetMixesByMediaIdActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
