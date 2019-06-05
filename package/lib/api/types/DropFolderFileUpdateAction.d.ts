import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderFileUpdateActionArgs extends KalturaRequestArgs {
    dropFolderFileId: number;
    dropFolderFile: KalturaDropFolderFile;
}
/**
 * Build request payload for service 'dropFolderFile' action 'update'.
 *
 * Usage: Update an existing KalturaDropFolderFile object
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderFileUpdateAction extends KalturaRequest<KalturaDropFolderFile> {
    dropFolderFileId: number;
    dropFolderFile: KalturaDropFolderFile;
    constructor(data: DropFolderFileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
