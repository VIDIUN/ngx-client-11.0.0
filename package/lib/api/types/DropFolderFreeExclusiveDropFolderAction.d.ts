import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderFreeExclusiveDropFolderActionArgs extends KalturaRequestArgs {
    dropFolderId: number;
    errorCode?: string;
    errorDescription?: string;
}
/**
 * Build request payload for service 'dropFolder' action 'freeExclusiveDropFolder'.
 *
 * Usage: freeExclusive KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderFreeExclusiveDropFolderAction extends KalturaRequest<KalturaDropFolder> {
    dropFolderId: number;
    errorCode: string;
    errorDescription: string;
    constructor(data: DropFolderFreeExclusiveDropFolderActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}