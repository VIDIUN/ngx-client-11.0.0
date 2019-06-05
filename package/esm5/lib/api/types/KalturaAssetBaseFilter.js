/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaAssetBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.entryIdIn;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.sizeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.sizeLessThanOrEqual;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.tagsLike;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.tagsMultiLikeOr;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.tagsMultiLikeAnd;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.deletedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAssetBaseFilterArgs.prototype.deletedAtLessThanOrEqual;
var KalturaAssetBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetBaseFilter, _super);
    function KalturaAssetBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAssetBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetBaseFilter' },
            idEqual: { type: 's' },
            idIn: { type: 's' },
            entryIdEqual: { type: 's' },
            entryIdIn: { type: 's' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            sizeGreaterThanOrEqual: { type: 'n' },
            sizeLessThanOrEqual: { type: 'n' },
            tagsLike: { type: 's' },
            tagsMultiLikeOr: { type: 's' },
            tagsMultiLikeAnd: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            deletedAtGreaterThanOrEqual: { type: 'd' },
            deletedAtLessThanOrEqual: { type: 'd' }
        });
        return result;
    };
    return KalturaAssetBaseFilter;
}(KalturaRelatedFilter));
export { KalturaAssetBaseFilter };
if (false) {
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.entryIdIn;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.sizeGreaterThanOrEqual;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.sizeLessThanOrEqual;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.tagsLike;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.tagsMultiLikeOr;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.tagsMultiLikeAnd;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.deletedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaAssetBaseFilter.prototype.deletedAtLessThanOrEqual;
}
typesMappingStorage['KalturaAssetBaseFilter'] = KalturaAssetBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFzc2V0QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCeEYsSUFBQTtJQUE0QyxrREFBb0I7SUFvQjVELGdDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBN0VMO0VBeUI0QyxvQkFBb0IsRUFxRC9ELENBQUE7QUFyREQsa0NBcURDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVsYXRlZEZpbHRlciwgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUmVsYXRlZEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFzc2V0QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IHN0cmluZztcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGVudHJ5SWRFcXVhbD8gOiBzdHJpbmc7XG5cdGVudHJ5SWRJbj8gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHRzaXplR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0c2l6ZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHRhZ3NMaWtlPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRkZWxldGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0ZGVsZXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBc3NldEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogc3RyaW5nO1xuXHRpZEluIDogc3RyaW5nO1xuXHRlbnRyeUlkRXF1YWwgOiBzdHJpbmc7XG5cdGVudHJ5SWRJbiA6IHN0cmluZztcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRzaXplR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRzaXplTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHR0YWdzTGlrZSA6IHN0cmluZztcblx0dGFnc011bHRpTGlrZU9yIDogc3RyaW5nO1xuXHR0YWdzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRkZWxldGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRkZWxldGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXNzZXRCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBc3NldEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNpemVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2l6ZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0YWdzTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFnc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0ZGVsZXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGRlbGV0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXNzZXRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQXNzZXRCYXNlRmlsdGVyOyJdfQ==