import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface DropFolderFileAddActionArgs extends KalturaRequestArgs {
    dropFolderFile: KalturaDropFolderFile;
}
/**
 * Build request payload for service 'dropFolderFile' action 'add'.
 *
 * Usage: Allows you to add a new KalturaDropFolderFile object
 *
 * Server response type:         KalturaDropFolderFile
 * Server failure response type: KalturaAPIException
 */
export declare class DropFolderFileAddAction extends KalturaRequest<KalturaDropFolderFile> {
    dropFolderFile: KalturaDropFolderFile;
    constructor(data: DropFolderFileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}