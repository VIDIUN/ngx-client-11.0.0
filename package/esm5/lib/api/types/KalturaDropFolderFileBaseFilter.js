/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFileStatus } from './KalturaDropFolderFileStatus';
import { KalturaDropFolderFileErrorCode } from './KalturaDropFolderFileErrorCode';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaDropFolderFileBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.dropFolderIdEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.dropFolderIdIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.fileNameEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.fileNameIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.fileNameLike;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.statusNotIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedSlugEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedSlugIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedSlugLike;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedFlavorEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedFlavorIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.parsedFlavorLike;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.leadDropFolderFileIdEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.deletedDropFolderFileIdEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.errorCodeEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.errorCodeIn;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaDropFolderFileBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
var KalturaDropFolderFileBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDropFolderFileBaseFilter, _super);
    function KalturaDropFolderFileBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDropFolderFileBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDropFolderFileBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            dropFolderIdEqual: { type: 'n' },
            dropFolderIdIn: { type: 's' },
            fileNameEqual: { type: 's' },
            fileNameIn: { type: 's' },
            fileNameLike: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaDropFolderFileStatus, subType: 'KalturaDropFolderFileStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' },
            parsedSlugEqual: { type: 's' },
            parsedSlugIn: { type: 's' },
            parsedSlugLike: { type: 's' },
            parsedFlavorEqual: { type: 's' },
            parsedFlavorIn: { type: 's' },
            parsedFlavorLike: { type: 's' },
            leadDropFolderFileIdEqual: { type: 'n' },
            deletedDropFolderFileIdEqual: { type: 'n' },
            entryIdEqual: { type: 's' },
            errorCodeEqual: { type: 'es', subTypeConstructor: KalturaDropFolderFileErrorCode, subType: 'KalturaDropFolderFileErrorCode' },
            errorCodeIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    };
    return KalturaDropFolderFileBaseFilter;
}(KalturaFilter));
export { KalturaDropFolderFileBaseFilter };
if (false) {
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.dropFolderIdEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.dropFolderIdIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.fileNameEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.fileNameIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.fileNameLike;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.statusNotIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedSlugEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedSlugIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedSlugLike;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedFlavorEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedFlavorIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.parsedFlavorLike;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.leadDropFolderFileIdEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.deletedDropFolderFileIdEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.errorCodeEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.errorCodeIn;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaDropFolderFileBaseFilter.prototype.updatedAtLessThanOrEqual;
}
typesMappingStorage['KalturaDropFolderFileBaseFilter'] = KalturaDropFolderFileBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJGaWxlQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURyb3BGb2xkZXJGaWxlQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDbkUsSUFBQTtJQUFxRCwyREFBYTtJQThCOUQseUNBQVksSUFBMkM7ZUFFbkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ3hILFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFDLDRCQUE0QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ2pJLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MENBN0dMO0VBcUNxRCxhQUFhLEVBeUVqRSxDQUFBO0FBekVELDJDQXlFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlckZpbGVFcnJvckNvZGUgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZUVycm9yQ29kZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURyb3BGb2xkZXJGaWxlQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEluPyA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbj8gOiBzdHJpbmc7XG5cdGRyb3BGb2xkZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0ZHJvcEZvbGRlcklkSW4/IDogc3RyaW5nO1xuXHRmaWxlTmFtZUVxdWFsPyA6IHN0cmluZztcblx0ZmlsZU5hbWVJbj8gOiBzdHJpbmc7XG5cdGZpbGVOYW1lTGlrZT8gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZVN0YXR1cztcblx0c3RhdHVzSW4/IDogc3RyaW5nO1xuXHRzdGF0dXNOb3RJbj8gOiBzdHJpbmc7XG5cdHBhcnNlZFNsdWdFcXVhbD8gOiBzdHJpbmc7XG5cdHBhcnNlZFNsdWdJbj8gOiBzdHJpbmc7XG5cdHBhcnNlZFNsdWdMaWtlPyA6IHN0cmluZztcblx0cGFyc2VkRmxhdm9yRXF1YWw/IDogc3RyaW5nO1xuXHRwYXJzZWRGbGF2b3JJbj8gOiBzdHJpbmc7XG5cdHBhcnNlZEZsYXZvckxpa2U/IDogc3RyaW5nO1xuXHRsZWFkRHJvcEZvbGRlckZpbGVJZEVxdWFsPyA6IG51bWJlcjtcblx0ZGVsZXRlZERyb3BGb2xkZXJGaWxlSWRFcXVhbD8gOiBudW1iZXI7XG5cdGVudHJ5SWRFcXVhbD8gOiBzdHJpbmc7XG5cdGVycm9yQ29kZUVxdWFsPyA6IEthbHR1cmFEcm9wRm9sZGVyRmlsZUVycm9yQ29kZTtcblx0ZXJyb3JDb2RlSW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURyb3BGb2xkZXJGaWxlQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRJbiA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRkcm9wRm9sZGVySWRFcXVhbCA6IG51bWJlcjtcblx0ZHJvcEZvbGRlcklkSW4gOiBzdHJpbmc7XG5cdGZpbGVOYW1lRXF1YWwgOiBzdHJpbmc7XG5cdGZpbGVOYW1lSW4gOiBzdHJpbmc7XG5cdGZpbGVOYW1lTGlrZSA6IHN0cmluZztcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRzdGF0dXNOb3RJbiA6IHN0cmluZztcblx0cGFyc2VkU2x1Z0VxdWFsIDogc3RyaW5nO1xuXHRwYXJzZWRTbHVnSW4gOiBzdHJpbmc7XG5cdHBhcnNlZFNsdWdMaWtlIDogc3RyaW5nO1xuXHRwYXJzZWRGbGF2b3JFcXVhbCA6IHN0cmluZztcblx0cGFyc2VkRmxhdm9ySW4gOiBzdHJpbmc7XG5cdHBhcnNlZEZsYXZvckxpa2UgOiBzdHJpbmc7XG5cdGxlYWREcm9wRm9sZGVyRmlsZUlkRXF1YWwgOiBudW1iZXI7XG5cdGRlbGV0ZWREcm9wRm9sZGVyRmlsZUlkRXF1YWwgOiBudW1iZXI7XG5cdGVudHJ5SWRFcXVhbCA6IHN0cmluZztcblx0ZXJyb3JDb2RlRXF1YWwgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVFcnJvckNvZGU7XG5cdGVycm9yQ29kZUluIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEcm9wRm9sZGVyRmlsZUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkcm9wRm9sZGVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkcm9wRm9sZGVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlTmFtZUVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVOYW1lSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmlsZU5hbWVMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJGaWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyRmlsZVN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzTm90SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyc2VkU2x1Z0VxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnNlZFNsdWdJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJzZWRTbHVnTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJzZWRGbGF2b3JFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJzZWRGbGF2b3JJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJzZWRGbGF2b3JMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxlYWREcm9wRm9sZGVyRmlsZUlkRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGVsZXRlZERyb3BGb2xkZXJGaWxlSWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbnRyeUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXJyb3JDb2RlRXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVFcnJvckNvZGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJGaWxlRXJyb3JDb2RlJyB9LFxuXHRcdFx0XHRlcnJvckNvZGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURyb3BGb2xkZXJGaWxlQmFzZUZpbHRlciddID0gS2FsdHVyYURyb3BGb2xkZXJGaWxlQmFzZUZpbHRlcjsiXX0=