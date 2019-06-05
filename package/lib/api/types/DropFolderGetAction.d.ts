import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderGetActionArgs extends KalturaRequestArgs {
    dropFolderId: number;
}
/**
 * Build request payload for service 'dropFolder' action 'get'.
 *
 * Usage: Retrieve a KalturaDropFolder object by ID
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderGetAction extends KalturaRequest<KalturaDropFolder> {
    dropFolderId: number;
    constructor(data: DropFolderGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}