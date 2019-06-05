/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaDropFolderBaseFilter extends KalturaFilter {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJvcEZvbGRlckJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ25FLE1BQU0sa0NBQW1DLFNBQVEsYUFBYTs7OztJQWdDMUQsWUFBWSxJQUF1QztRQUUvQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcscUJBQXFCLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDaEgsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6Qix3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGdDQUFnQyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUMzSSxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyw0QkFBNEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0MsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUN6SCxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRHJvcEZvbGRlclN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJFcnJvckNvZGUgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRXJyb3JDb2RlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIsIEthbHR1cmFGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRHJvcEZvbGRlckJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHRuYW1lTGlrZT8gOiBzdHJpbmc7XG5cdHR5cGVFcXVhbD8gOiBLYWx0dXJhRHJvcEZvbGRlclR5cGU7XG5cdHR5cGVJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFEcm9wRm9sZGVyU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWRFcXVhbD8gOiBudW1iZXI7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWRJbj8gOiBzdHJpbmc7XG5cdGRjRXF1YWw/IDogbnVtYmVyO1xuXHRkY0luPyA6IHN0cmluZztcblx0cGF0aEVxdWFsPyA6IHN0cmluZztcblx0cGF0aExpa2U/IDogc3RyaW5nO1xuXHRmaWxlSGFuZGxlclR5cGVFcXVhbD8gOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyVHlwZTtcblx0ZmlsZUhhbmRsZXJUeXBlSW4/IDogc3RyaW5nO1xuXHRmaWxlTmFtZVBhdHRlcm5zTGlrZT8gOiBzdHJpbmc7XG5cdGZpbGVOYW1lUGF0dGVybnNNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdGZpbGVOYW1lUGF0dGVybnNNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHR0YWdzTGlrZT8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRlcnJvckNvZGVFcXVhbD8gOiBLYWx0dXJhRHJvcEZvbGRlckVycm9yQ29kZTtcblx0ZXJyb3JDb2RlSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURyb3BGb2xkZXJCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEluIDogc3RyaW5nO1xuXHRwYXJ0bmVySWRFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkSW4gOiBzdHJpbmc7XG5cdG5hbWVMaWtlIDogc3RyaW5nO1xuXHR0eXBlRXF1YWwgOiBLYWx0dXJhRHJvcEZvbGRlclR5cGU7XG5cdHR5cGVJbiA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhRHJvcEZvbGRlclN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdGNvbnZlcnNpb25Qcm9maWxlSWRFcXVhbCA6IG51bWJlcjtcblx0Y29udmVyc2lvblByb2ZpbGVJZEluIDogc3RyaW5nO1xuXHRkY0VxdWFsIDogbnVtYmVyO1xuXHRkY0luIDogc3RyaW5nO1xuXHRwYXRoRXF1YWwgOiBzdHJpbmc7XG5cdHBhdGhMaWtlIDogc3RyaW5nO1xuXHRmaWxlSGFuZGxlclR5cGVFcXVhbCA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJUeXBlO1xuXHRmaWxlSGFuZGxlclR5cGVJbiA6IHN0cmluZztcblx0ZmlsZU5hbWVQYXR0ZXJuc0xpa2UgOiBzdHJpbmc7XG5cdGZpbGVOYW1lUGF0dGVybnNNdWx0aUxpa2VPciA6IHN0cmluZztcblx0ZmlsZU5hbWVQYXR0ZXJuc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0dGFnc0xpa2UgOiBzdHJpbmc7XG5cdHRhZ3NNdWx0aUxpa2VPciA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0ZXJyb3JDb2RlRXF1YWwgOiBLYWx0dXJhRHJvcEZvbGRlckVycm9yQ29kZTtcblx0ZXJyb3JDb2RlSW4gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEcm9wRm9sZGVyQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRHJvcEZvbGRlckJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJUeXBlJyB9LFxuXHRcdFx0XHR0eXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlclN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRHJvcEZvbGRlclN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udmVyc2lvblByb2ZpbGVJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlSWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkY0VxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRjSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGF0aEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhdGhMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVIYW5kbGVyVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlclR5cGUnIH0sXG5cdFx0XHRcdGZpbGVIYW5kbGVyVHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVOYW1lUGF0dGVybnNMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVOYW1lUGF0dGVybnNNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlTmFtZVBhdHRlcm5zTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3NNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVycm9yQ29kZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJFcnJvckNvZGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJFcnJvckNvZGUnIH0sXG5cdFx0XHRcdGVycm9yQ29kZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRHJvcEZvbGRlckJhc2VGaWx0ZXInXSA9IEthbHR1cmFEcm9wRm9sZGVyQmFzZUZpbHRlcjsiXX0=