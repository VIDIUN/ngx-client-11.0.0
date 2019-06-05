import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderFileIgnoreActionArgs extends KalturaRequestArgs {
    dropFolderFileId: number;
}
/**
 * Build request payload for service 'dropFolderFile' action 'ignore'.
 *
 * Usage: Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE)
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderFileIgnoreAction extends KalturaRequest<KalturaDropFolderFile> {
    dropFolderFileId: number;
    constructor(data: DropFolderFileIgnoreActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
