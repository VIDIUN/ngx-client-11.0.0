/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderType } from './KalturaDropFolderType';
import { KalturaDropFolderStatus } from './KalturaDropFolderStatus';
import { KalturaDropFolderFileHandlerType } from './KalturaDropFolderFileHandlerType';
import { KalturaDropFolderErrorCode } from './KalturaDropFolderErrorCode';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaDropFolderBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.nameLike;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.typeIn;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.conversionProfileIdEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.conversionProfileIdIn;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.dcEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.dcIn;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.pathEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.pathLike;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.fileHandlerTypeEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.fileHandlerTypeIn;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.fileNamePatternsLike;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.fileNamePatternsMultiLikeOr;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.fileNamePatternsMultiLikeAnd;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.tagsLike;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.errorCodeEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.errorCodeIn;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaDropFolderBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
var KalturaDropFolderBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDropFolderBaseFilter, _super);
    function KalturaDropFolderBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDropFolderBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDropFolderBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            nameLike: { type: 's' },
            typeEqual: { type: 'es', subTypeConstructor: KalturaDropFolderType, subType: 'KalturaDropFolderType' },
            typeIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaDropFolderStatus, subType: 'KalturaDropFolderStatus' },
            statusIn: { type: 's' },
            conversionProfileIdEqual: { type: 'n' },
            conversionProfileIdIn: { type: 's' },
            dcEqual: { type: 'n' },
            dcIn: { type: 's' },
            pathEqual: { type: 's' },
            pathLike: { type: 's' },
            fileHandlerTypeEqual: { type: 'es', subTypeConstructor: KalturaDropFolderFileHandlerType, subType: 'KalturaDropFolderFileHandlerType' },
            fileHandlerTypeIn: { type: 's' },
            fileNamePatternsLike: { type: 's' },
            fileNamePatternsMultiLikeOr: { type: 's' },
            fileNamePatternsMultiLikeAnd: { type: 's' },
            tagsLike: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            errorCodeEqual: { type: 'es', subTypeConstructor: KalturaDropFolderErrorCode, subType: 'KalturaDropFolderErrorCode' },
            errorCodeIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    };
    return KalturaDropFolderBaseFilter;
}(KalturaFilter));
export { KalturaDropFolderBaseFilter };
if (false) {
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.nameLike;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.typeIn;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.conversionProfileIdEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.conversionProfileIdIn;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.dcEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.dcIn;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.pathEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.pathLike;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.fileHandlerTypeEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.fileHandlerTypeIn;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.fileNamePatternsLike;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.fileNamePatternsMultiLikeOr;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.fileNamePatternsMultiLikeAnd;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.tagsLike;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.errorCodeEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.errorCodeIn;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaDropFolderBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaDropFolderBaseFilter'] = KalturaDropFolderBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJvcEZvbGRlckJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBcUIsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNuRSxJQUFBO0lBQWlELHVEQUFhO0lBZ0MxRCxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQ2hILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDM0ksaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsNEJBQTRCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDekgsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtzQ0FySEw7RUF5Q2lELGFBQWEsRUE2RTdELENBQUE7QUE3RUQsdUNBNkVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlclR5cGUgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlclN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlclR5cGUgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRXJyb3JDb2RlIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlckVycm9yQ29kZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURyb3BGb2xkZXJCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsdGVyQXJncyB7XG4gICAgaWRFcXVhbD8gOiBudW1iZXI7XG5cdGlkSW4/IDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluPyA6IHN0cmluZztcblx0bmFtZUxpa2U/IDogc3RyaW5nO1xuXHR0eXBlRXF1YWw/IDogS2FsdHVyYURyb3BGb2xkZXJUeXBlO1xuXHR0eXBlSW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhRHJvcEZvbGRlclN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkRXF1YWw/IDogbnVtYmVyO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkSW4/IDogc3RyaW5nO1xuXHRkY0VxdWFsPyA6IG51bWJlcjtcblx0ZGNJbj8gOiBzdHJpbmc7XG5cdHBhdGhFcXVhbD8gOiBzdHJpbmc7XG5cdHBhdGhMaWtlPyA6IHN0cmluZztcblx0ZmlsZUhhbmRsZXJUeXBlRXF1YWw/IDogS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlclR5cGU7XG5cdGZpbGVIYW5kbGVyVHlwZUluPyA6IHN0cmluZztcblx0ZmlsZU5hbWVQYXR0ZXJuc0xpa2U/IDogc3RyaW5nO1xuXHRmaWxlTmFtZVBhdHRlcm5zTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRmaWxlTmFtZVBhdHRlcm5zTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0dGFnc0xpa2U/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0ZXJyb3JDb2RlRXF1YWw/IDogS2FsdHVyYURyb3BGb2xkZXJFcnJvckNvZGU7XG5cdGVycm9yQ29kZUluPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEcm9wRm9sZGVyQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRuYW1lTGlrZSA6IHN0cmluZztcblx0dHlwZUVxdWFsIDogS2FsdHVyYURyb3BGb2xkZXJUeXBlO1xuXHR0eXBlSW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYURyb3BGb2xkZXJTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRjb252ZXJzaW9uUHJvZmlsZUlkRXF1YWwgOiBudW1iZXI7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWRJbiA6IHN0cmluZztcblx0ZGNFcXVhbCA6IG51bWJlcjtcblx0ZGNJbiA6IHN0cmluZztcblx0cGF0aEVxdWFsIDogc3RyaW5nO1xuXHRwYXRoTGlrZSA6IHN0cmluZztcblx0ZmlsZUhhbmRsZXJUeXBlRXF1YWwgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyVHlwZTtcblx0ZmlsZUhhbmRsZXJUeXBlSW4gOiBzdHJpbmc7XG5cdGZpbGVOYW1lUGF0dGVybnNMaWtlIDogc3RyaW5nO1xuXHRmaWxlTmFtZVBhdHRlcm5zTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdGZpbGVOYW1lUGF0dGVybnNNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdHRhZ3NMaWtlIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdGVycm9yQ29kZUVxdWFsIDogS2FsdHVyYURyb3BGb2xkZXJFcnJvckNvZGU7XG5cdGVycm9yQ29kZUluIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJvcEZvbGRlckJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURyb3BGb2xkZXJCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lcklkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lcklkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bmFtZUxpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyVHlwZScgfSxcblx0XHRcdFx0dHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlSWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGNFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkY0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhdGhFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXRoTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlSGFuZGxlclR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJUeXBlJyB9LFxuXHRcdFx0XHRmaWxlSGFuZGxlclR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlTmFtZVBhdHRlcm5zTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlTmFtZVBhdHRlcm5zTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZU5hbWVQYXR0ZXJuc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlcnJvckNvZGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyRXJyb3JDb2RlLCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyRXJyb3JDb2RlJyB9LFxuXHRcdFx0XHRlcnJvckNvZGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURyb3BGb2xkZXJCYXNlRmlsdGVyJ10gPSBLYWx0dXJhRHJvcEZvbGRlckJhc2VGaWx0ZXI7Il19