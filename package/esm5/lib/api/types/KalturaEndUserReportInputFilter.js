/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
/**
 * @record
 */
export function KalturaEndUserReportInputFilterArgs() { }
/** @type {?|undefined} */
KalturaEndUserReportInputFilterArgs.prototype.application;
/** @type {?|undefined} */
KalturaEndUserReportInputFilterArgs.prototype.userIds;
/** @type {?|undefined} */
KalturaEndUserReportInputFilterArgs.prototype.playbackContext;
/** @type {?|undefined} */
KalturaEndUserReportInputFilterArgs.prototype.ancestorPlaybackContext;
var KalturaEndUserReportInputFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEndUserReportInputFilter, _super);
    function KalturaEndUserReportInputFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEndUserReportInputFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEndUserReportInputFilter' },
            application: { type: 's' },
            userIds: { type: 's' },
            playbackContext: { type: 's' },
            ancestorPlaybackContext: { type: 's' }
        });
        return result;
    };
    return KalturaEndUserReportInputFilter;
}(KalturaReportInputFilter));
export { KalturaEndUserReportInputFilter };
if (false) {
    /** @type {?} */
    KalturaEndUserReportInputFilter.prototype.application;
    /** @type {?} */
    KalturaEndUserReportInputFilter.prototype.userIds;
    /** @type {?} */
    KalturaEndUserReportInputFilter.prototype.playbackContext;
    /** @type {?} */
    KalturaEndUserReportInputFilter.prototype.ancestorPlaybackContext;
}
typesMappingStorage['KalturaEndUserReportInputFilter'] = KalturaEndUserReportInputFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVuZFVzZXJSZXBvcnRJbnB1dEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVuZFVzZXJSZXBvcnRJbnB1dEZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQWdDLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVcEcsSUFBQTtJQUFxRCwyREFBd0I7SUFPekUseUNBQVksSUFBMkM7ZUFFbkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUNwRixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDL0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0F0Q0w7RUFZcUQsd0JBQXdCLEVBMkI1RSxDQUFBO0FBM0JELDJDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlciwgS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW5kVXNlclJlcG9ydElucHV0RmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXJBcmdzIHtcbiAgICBhcHBsaWNhdGlvbj8gOiBzdHJpbmc7XG5cdHVzZXJJZHM/IDogc3RyaW5nO1xuXHRwbGF5YmFja0NvbnRleHQ/IDogc3RyaW5nO1xuXHRhbmNlc3RvclBsYXliYWNrQ29udGV4dD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbmRVc2VyUmVwb3J0SW5wdXRGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIge1xuXG4gICAgYXBwbGljYXRpb24gOiBzdHJpbmc7XG5cdHVzZXJJZHMgOiBzdHJpbmc7XG5cdHBsYXliYWNrQ29udGV4dCA6IHN0cmluZztcblx0YW5jZXN0b3JQbGF5YmFja0NvbnRleHQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbmRVc2VyUmVwb3J0SW5wdXRGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVuZFVzZXJSZXBvcnRJbnB1dEZpbHRlcicgfSxcblx0XHRcdFx0YXBwbGljYXRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwbGF5YmFja0NvbnRleHQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YW5jZXN0b3JQbGF5YmFja0NvbnRleHQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVuZFVzZXJSZXBvcnRJbnB1dEZpbHRlciddID0gS2FsdHVyYUVuZFVzZXJSZXBvcnRJbnB1dEZpbHRlcjsiXX0=