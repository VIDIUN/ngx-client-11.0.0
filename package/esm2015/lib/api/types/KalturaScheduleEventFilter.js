/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaScheduleEventFilter extends KalturaScheduleEventBaseFilter {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlRXZlbnRGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTY2hlZHVsZUV2ZW50RmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFzQyxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ0SCxNQUFNLGlDQUFrQyxTQUFRLDhCQUE4Qjs7OztJQWdCMUUsWUFBWSxJQUFzQztRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0Qyw0QkFBNEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0MsNkJBQTZCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlDLHNDQUFzQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2RCxxQ0FBcUMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEQsOEJBQThCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9DLDhCQUE4QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQywrQkFBK0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEQsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyLCBLYWx0dXJhU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTY2hlZHVsZUV2ZW50RmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXJBcmdzIHtcbiAgICByZXNvdXJjZUlkc0xpa2U/IDogc3RyaW5nO1xuXHRyZXNvdXJjZUlkc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0cmVzb3VyY2VJZHNNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRwYXJlbnRSZXNvdXJjZUlkc0xpa2U/IDogc3RyaW5nO1xuXHRwYXJlbnRSZXNvdXJjZUlkc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0cGFyZW50UmVzb3VyY2VJZHNNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHR0ZW1wbGF0ZUVudHJ5Q2F0ZWdvcmllc0lkc011bHRpTGlrZUFuZD8gOiBzdHJpbmc7XG5cdHRlbXBsYXRlRW50cnlDYXRlZ29yaWVzSWRzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHRyZXNvdXJjZVN5c3RlbU5hbWVzTXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHR0ZW1wbGF0ZUVudHJ5Q2F0ZWdvcmllc0lkc0xpa2U/IDogc3RyaW5nO1xuXHRyZXNvdXJjZVN5c3RlbU5hbWVzTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0cmVzb3VyY2VTeXN0ZW1OYW1lc0xpa2U/IDogc3RyaW5nO1xuXHRyZXNvdXJjZUlkRXF1YWw/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2NoZWR1bGVFdmVudEZpbHRlciBleHRlbmRzIEthbHR1cmFTY2hlZHVsZUV2ZW50QmFzZUZpbHRlciB7XG5cbiAgICByZXNvdXJjZUlkc0xpa2UgOiBzdHJpbmc7XG5cdHJlc291cmNlSWRzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHJlc291cmNlSWRzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRwYXJlbnRSZXNvdXJjZUlkc0xpa2UgOiBzdHJpbmc7XG5cdHBhcmVudFJlc291cmNlSWRzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHBhcmVudFJlc291cmNlSWRzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHR0ZW1wbGF0ZUVudHJ5Q2F0ZWdvcmllc0lkc011bHRpTGlrZUFuZCA6IHN0cmluZztcblx0dGVtcGxhdGVFbnRyeUNhdGVnb3JpZXNJZHNNdWx0aUxpa2VPciA6IHN0cmluZztcblx0cmVzb3VyY2VTeXN0ZW1OYW1lc011bHRpTGlrZU9yIDogc3RyaW5nO1xuXHR0ZW1wbGF0ZUVudHJ5Q2F0ZWdvcmllc0lkc0xpa2UgOiBzdHJpbmc7XG5cdHJlc291cmNlU3lzdGVtTmFtZXNNdWx0aUxpa2VBbmQgOiBzdHJpbmc7XG5cdHJlc291cmNlU3lzdGVtTmFtZXNMaWtlIDogc3RyaW5nO1xuXHRyZXNvdXJjZUlkRXF1YWwgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTY2hlZHVsZUV2ZW50RmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50RmlsdGVyJyB9LFxuXHRcdFx0XHRyZXNvdXJjZUlkc0xpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVzb3VyY2VJZHNNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXNvdXJjZUlkc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRSZXNvdXJjZUlkc0xpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyZW50UmVzb3VyY2VJZHNNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRSZXNvdXJjZUlkc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0ZW1wbGF0ZUVudHJ5Q2F0ZWdvcmllc0lkc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0ZW1wbGF0ZUVudHJ5Q2F0ZWdvcmllc0lkc011bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlc291cmNlU3lzdGVtTmFtZXNNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0ZW1wbGF0ZUVudHJ5Q2F0ZWdvcmllc0lkc0xpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVzb3VyY2VTeXN0ZW1OYW1lc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXNvdXJjZVN5c3RlbU5hbWVzTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXNvdXJjZUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNjaGVkdWxlRXZlbnRGaWx0ZXInXSA9IEthbHR1cmFTY2hlZHVsZUV2ZW50RmlsdGVyOyJdfQ==