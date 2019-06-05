/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventFilter } from './KalturaScheduleEventFilter';
/**
 * @record
 */
export function KalturaEntryScheduleEventBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.templateEntryIdEqual;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.entryIdsLike;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.entryIdsMultiLikeOr;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.entryIdsMultiLikeAnd;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.categoryIdsLike;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.categoryIdsMultiLikeOr;
/** @type {?|undefined} */
KalturaEntryScheduleEventBaseFilterArgs.prototype.categoryIdsMultiLikeAnd;
var KalturaEntryScheduleEventBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryScheduleEventBaseFilter, _super);
    function KalturaEntryScheduleEventBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryScheduleEventBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryScheduleEventBaseFilter' },
            templateEntryIdEqual: { type: 's' },
            entryIdsLike: { type: 's' },
            entryIdsMultiLikeOr: { type: 's' },
            entryIdsMultiLikeAnd: { type: 's' },
            categoryIdsLike: { type: 's' },
            categoryIdsMultiLikeOr: { type: 's' },
            categoryIdsMultiLikeAnd: { type: 's' }
        });
        return result;
    };
    return KalturaEntryScheduleEventBaseFilter;
}(KalturaScheduleEventFilter));
export { KalturaEntryScheduleEventBaseFilter };
if (false) {
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.templateEntryIdEqual;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.entryIdsLike;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.entryIdsMultiLikeOr;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.entryIdsMultiLikeAnd;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.categoryIdsLike;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.categoryIdsMultiLikeOr;
    /** @type {?} */
    KalturaEntryScheduleEventBaseFilter.prototype.categoryIdsMultiLikeAnd;
}
typesMappingStorage['KalturaEntryScheduleEventBaseFilter'] = KalturaEntryScheduleEventBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBa0MsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWExRyxJQUFBO0lBQXlELCtEQUEwQjtJQVUvRSw2Q0FBWSxJQUErQztlQUV2RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDBEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQ3hGLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQy9CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OENBL0NMO0VBZXlELDBCQUEwQixFQWlDbEYsQ0FBQTtBQWpDRCwrQ0FpQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsR0FBRyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudEZpbHRlciwgS2FsdHVyYVNjaGVkdWxlRXZlbnRGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTY2hlZHVsZUV2ZW50RmlsdGVyQXJncyB7XG4gICAgdGVtcGxhdGVFbnRyeUlkRXF1YWw/IDogc3RyaW5nO1xuXHRlbnRyeUlkc0xpa2U/IDogc3RyaW5nO1xuXHRlbnRyeUlkc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0ZW50cnlJZHNNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRjYXRlZ29yeUlkc0xpa2U/IDogc3RyaW5nO1xuXHRjYXRlZ29yeUlkc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0Y2F0ZWdvcnlJZHNNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFTY2hlZHVsZUV2ZW50RmlsdGVyIHtcblxuICAgIHRlbXBsYXRlRW50cnlJZEVxdWFsIDogc3RyaW5nO1xuXHRlbnRyeUlkc0xpa2UgOiBzdHJpbmc7XG5cdGVudHJ5SWRzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdGVudHJ5SWRzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRjYXRlZ29yeUlkc0xpa2UgOiBzdHJpbmc7XG5cdGNhdGVnb3J5SWRzTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdGNhdGVnb3J5SWRzTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0dGVtcGxhdGVFbnRyeUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZHNMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWRzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZHNNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2F0ZWdvcnlJZHNMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhdGVnb3J5SWRzTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2F0ZWdvcnlJZHNNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEJhc2VGaWx0ZXInXSA9IEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRCYXNlRmlsdGVyOyJdfQ==