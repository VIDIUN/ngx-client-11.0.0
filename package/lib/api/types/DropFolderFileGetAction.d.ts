import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderFileGetActionArgs extends KalturaRequestArgs {
    dropFolderFileId: number;
}
/**
 * Build request payload for service 'dropFolderFile' action 'get'.
 *
 * Usage: Retrieve a KalturaDropFolderFile object by ID
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderFileGetAction extends KalturaRequest<KalturaDropFolderFile> {
    dropFolderFileId: number;
    constructor(data: DropFolderFileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
