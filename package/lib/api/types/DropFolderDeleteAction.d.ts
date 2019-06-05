import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderDeleteActionArgs extends KalturaRequestArgs {
    dropFolderId: number;
}
/**
 * Build request payload for service 'dropFolder' action 'delete'.
 *
 * Usage: Mark the KalturaDropFolder object as deleted
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderDeleteAction extends KalturaRequest<KalturaDropFolder> {
    dropFolderId: number;
    constructor(data: DropFolderDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}