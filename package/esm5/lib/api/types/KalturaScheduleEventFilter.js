/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventBaseFilter } from './KalturaScheduleEventBaseFilter';
/**
 * @record
 */
export function KalturaScheduleEventFilterArgs() { }
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.resourceIdsLike;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.resourceIdsMultiLikeOr;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.resourceIdsMultiLikeAnd;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.parentResourceIdsLike;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.parentResourceIdsMultiLikeOr;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.parentResourceIdsMultiLikeAnd;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.templateEntryCategoriesIdsMultiLikeAnd;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.templateEntryCategoriesIdsMultiLikeOr;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.resourceSystemNamesMultiLikeOr;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.templateEntryCategoriesIdsLike;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.resourceSystemNamesMultiLikeAnd;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.resourceSystemNamesLike;
/** @type {?|undefined} */
KalturaScheduleEventFilterArgs.prototype.resourceIdEqual;
var KalturaScheduleEventFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScheduleEventFilter, _super);
    function KalturaScheduleEventFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaScheduleEventFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaScheduleEventFilter' },
            resourceIdsLike: { type: 's' },
            resourceIdsMultiLikeOr: { type: 's' },
            resourceIdsMultiLikeAnd: { type: 's' },
            parentResourceIdsLike: { type: 's' },
            parentResourceIdsMultiLikeOr: { type: 's' },
            parentResourceIdsMultiLikeAnd: { type: 's' },
            templateEntryCategoriesIdsMultiLikeAnd: { type: 's' },
            templateEntryCategoriesIdsMultiLikeOr: { type: 's' },
            resourceSystemNamesMultiLikeOr: { type: 's' },
            templateEntryCategoriesIdsLike: { type: 's' },
            resourceSystemNamesMultiLikeAnd: { type: 's' },
            resourceSystemNamesLike: { type: 's' },
            resourceIdEqual: { type: 's' }
        });
        return result;
    };
    return KalturaScheduleEventFilter;
}(KalturaScheduleEventBaseFilter));
export { KalturaScheduleEventFilter };
if (false) {
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.resourceIdsLike;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.resourceIdsMultiLikeOr;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.resourceIdsMultiLikeAnd;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.parentResourceIdsLike;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.parentResourceIdsMultiLikeOr;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.parentResourceIdsMultiLikeAnd;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.templateEntryCategoriesIdsMultiLikeAnd;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.templateEntryCategoriesIdsMultiLikeOr;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.resourceSystemNamesMultiLikeOr;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.templateEntryCategoriesIdsLike;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.resourceSystemNamesMultiLikeAnd;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.resourceSystemNamesLike;
    /** @type {?} */
    KalturaScheduleEventFilter.prototype.resourceIdEqual;
}
typesMappingStorage['KalturaScheduleEventFilter'] = KalturaScheduleEventFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlRXZlbnRGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTY2hlZHVsZUV2ZW50RmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBc0MsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CdEgsSUFBQTtJQUFnRCxzREFBOEI7SUFnQjFFLG9DQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0Qyw0QkFBNEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0MsNkJBQTZCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlDLHNDQUFzQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2RCxxQ0FBcUMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEQsOEJBQThCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9DLDhCQUE4QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQywrQkFBK0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEQsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0FqRUw7RUFxQmdELDhCQUE4QixFQTZDN0UsQ0FBQTtBQTdDRCxzQ0E2Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXIsIEthbHR1cmFTY2hlZHVsZUV2ZW50QmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50QmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNjaGVkdWxlRXZlbnRGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTY2hlZHVsZUV2ZW50QmFzZUZpbHRlckFyZ3Mge1xuICAgIHJlc291cmNlSWRzTGlrZT8gOiBzdHJpbmc7XG5cdHJlc291cmNlSWRzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRyZXNvdXJjZUlkc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdHBhcmVudFJlc291cmNlSWRzTGlrZT8gOiBzdHJpbmc7XG5cdHBhcmVudFJlc291cmNlSWRzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRwYXJlbnRSZXNvdXJjZUlkc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdHRlbXBsYXRlRW50cnlDYXRlZ29yaWVzSWRzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0dGVtcGxhdGVFbnRyeUNhdGVnb3JpZXNJZHNNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHJlc291cmNlU3lzdGVtTmFtZXNNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRlbXBsYXRlRW50cnlDYXRlZ29yaWVzSWRzTGlrZT8gOiBzdHJpbmc7XG5cdHJlc291cmNlU3lzdGVtTmFtZXNNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRyZXNvdXJjZVN5c3RlbU5hbWVzTGlrZT8gOiBzdHJpbmc7XG5cdHJlc291cmNlSWRFcXVhbD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTY2hlZHVsZUV2ZW50RmlsdGVyIGV4dGVuZHMgS2FsdHVyYVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyIHtcblxuICAgIHJlc291cmNlSWRzTGlrZSA6IHN0cmluZztcblx0cmVzb3VyY2VJZHNNdWx0aUxpa2VPciA6IHN0cmluZztcblx0cmVzb3VyY2VJZHNNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdHBhcmVudFJlc291cmNlSWRzTGlrZSA6IHN0cmluZztcblx0cGFyZW50UmVzb3VyY2VJZHNNdWx0aUxpa2VPciA6IHN0cmluZztcblx0cGFyZW50UmVzb3VyY2VJZHNNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdHRlbXBsYXRlRW50cnlDYXRlZ29yaWVzSWRzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHR0ZW1wbGF0ZUVudHJ5Q2F0ZWdvcmllc0lkc011bHRpTGlrZU9yIDogc3RyaW5nO1xuXHRyZXNvdXJjZVN5c3RlbU5hbWVzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRlbXBsYXRlRW50cnlDYXRlZ29yaWVzSWRzTGlrZSA6IHN0cmluZztcblx0cmVzb3VyY2VTeXN0ZW1OYW1lc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0cmVzb3VyY2VTeXN0ZW1OYW1lc0xpa2UgOiBzdHJpbmc7XG5cdHJlc291cmNlSWRFcXVhbCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnRGaWx0ZXInIH0sXG5cdFx0XHRcdHJlc291cmNlSWRzTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXNvdXJjZUlkc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlc291cmNlSWRzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudFJlc291cmNlSWRzTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRSZXNvdXJjZUlkc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcmVudFJlc291cmNlSWRzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRlbXBsYXRlRW50cnlDYXRlZ29yaWVzSWRzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRlbXBsYXRlRW50cnlDYXRlZ29yaWVzSWRzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVzb3VyY2VTeXN0ZW1OYW1lc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRlbXBsYXRlRW50cnlDYXRlZ29yaWVzSWRzTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXNvdXJjZVN5c3RlbU5hbWVzTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlc291cmNlU3lzdGVtTmFtZXNMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlc291cmNlSWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NoZWR1bGVFdmVudEZpbHRlciddID0gS2FsdHVyYVNjaGVkdWxlRXZlbnRGaWx0ZXI7Il19