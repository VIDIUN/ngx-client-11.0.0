import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaUserBaseFilter, KalturaUserBaseFilterArgs } from './KalturaUserBaseFilter';
export interface KalturaUserFilterArgs extends KalturaUserBaseFilterArgs {
    idOrScreenNameStartsWith?: string;
    idEqual?: string;
    idIn?: string;
    loginEnabledEqual?: KalturaNullableBoolean;
    roleIdEqual?: string;
    roleIdsEqual?: string;
    roleIdsIn?: string;
    firstNameOrLastNameStartsWith?: string;
    permissionNamesMultiLikeOr?: string;
    permissionNamesMultiLikeAnd?: string;
}
export declare class KalturaUserFilter extends KalturaUserBaseFilter {
    idOrScreenNameStartsWith: string;
    idEqual: string;
    idIn: string;
    loginEnabledEqual: KalturaNullableBoolean;
    roleIdEqual: string;
    roleIdsEqual: string;
    roleIdsIn: string;
    firstNameOrLastNameStartsWith: string;
    permissionNamesMultiLikeOr: string;
    permissionNamesMultiLikeAnd: string;
    constructor(data?: KalturaUserFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}