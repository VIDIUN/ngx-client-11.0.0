import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderUpdateActionArgs extends KalturaRequestArgs {
    dropFolderId: number;
    dropFolder: KalturaDropFolder;
}
/**
 * Build request payload for service 'dropFolder' action 'update'.
 *
 * Usage: Update an existing KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderUpdateAction extends KalturaRequest<KalturaDropFolder> {
    dropFolderId: number;
    dropFolder: KalturaDropFolder;
    constructor(data: DropFolderUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}