import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderGetExclusiveDropFolderActionArgs extends KalturaRequestArgs {
    tag: string;
    maxTime: number;
}
/**
 * Build request payload for service 'dropFolder' action 'getExclusiveDropFolder'.
 *
 * Usage: getExclusive KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderGetExclusiveDropFolderAction extends KalturaRequest<KalturaDropFolder> {
    tag: string;
    maxTime: number;
    constructor(data: DropFolderGetExclusiveDropFolderActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}