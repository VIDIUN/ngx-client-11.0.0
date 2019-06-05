/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbParamsFilter } from './KalturaThumbParamsFilter';
/**
 * @record
 */
export function KalturaThumbParamsOutputBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaThumbParamsOutputBaseFilterArgs.prototype.thumbParamsIdEqual;
/** @type {?|undefined} */
KalturaThumbParamsOutputBaseFilterArgs.prototype.thumbParamsVersionEqual;
/** @type {?|undefined} */
KalturaThumbParamsOutputBaseFilterArgs.prototype.thumbAssetIdEqual;
/** @type {?|undefined} */
KalturaThumbParamsOutputBaseFilterArgs.prototype.thumbAssetVersionEqual;
var KalturaThumbParamsOutputBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaThumbParamsOutputBaseFilter, _super);
    function KalturaThumbParamsOutputBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaThumbParamsOutputBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaThumbParamsOutputBaseFilter' },
            thumbParamsIdEqual: { type: 'n' },
            thumbParamsVersionEqual: { type: 's' },
            thumbAssetIdEqual: { type: 's' },
            thumbAssetVersionEqual: { type: 's' }
        });
        return result;
    };
    return KalturaThumbParamsOutputBaseFilter;
}(KalturaThumbParamsFilter));
export { KalturaThumbParamsOutputBaseFilter };
if (false) {
    /** @type {?} */
    KalturaThumbParamsOutputBaseFilter.prototype.thumbParamsIdEqual;
    /** @type {?} */
    KalturaThumbParamsOutputBaseFilter.prototype.thumbParamsVersionEqual;
    /** @type {?} */
    KalturaThumbParamsOutputBaseFilter.prototype.thumbAssetIdEqual;
    /** @type {?} */
    KalturaThumbParamsOutputBaseFilter.prototype.thumbAssetVersionEqual;
}
typesMappingStorage['KalturaThumbParamsOutputBaseFilter'] = KalturaThumbParamsOutputBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQWdDLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVcEcsSUFBQTtJQUF3RCw4REFBd0I7SUFPNUUsNENBQVksSUFBOEM7ZUFFdEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx5REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2RixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0F0Q0w7RUFZd0Qsd0JBQXdCLEVBMkIvRSxDQUFBO0FBM0JELDhDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFUaHVtYlBhcmFtc0ZpbHRlciwgS2FsdHVyYVRodW1iUGFyYW1zRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVRodW1iUGFyYW1zRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhVGh1bWJQYXJhbXNGaWx0ZXJBcmdzIHtcbiAgICB0aHVtYlBhcmFtc0lkRXF1YWw/IDogbnVtYmVyO1xuXHR0aHVtYlBhcmFtc1ZlcnNpb25FcXVhbD8gOiBzdHJpbmc7XG5cdHRodW1iQXNzZXRJZEVxdWFsPyA6IHN0cmluZztcblx0dGh1bWJBc3NldFZlcnNpb25FcXVhbD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFUaHVtYlBhcmFtc091dHB1dEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhVGh1bWJQYXJhbXNGaWx0ZXIge1xuXG4gICAgdGh1bWJQYXJhbXNJZEVxdWFsIDogbnVtYmVyO1xuXHR0aHVtYlBhcmFtc1ZlcnNpb25FcXVhbCA6IHN0cmluZztcblx0dGh1bWJBc3NldElkRXF1YWwgOiBzdHJpbmc7XG5cdHRodW1iQXNzZXRWZXJzaW9uRXF1YWwgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUaHVtYlBhcmFtc091dHB1dEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0dGh1bWJQYXJhbXNJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRodW1iUGFyYW1zVmVyc2lvbkVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRodW1iQXNzZXRJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRodW1iQXNzZXRWZXJzaW9uRXF1YWwgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0QmFzZUZpbHRlciddID0gS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0QmFzZUZpbHRlcjsiXX0=