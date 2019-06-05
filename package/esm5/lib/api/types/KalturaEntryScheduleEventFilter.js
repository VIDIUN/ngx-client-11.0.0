/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEventBaseFilter } from './KalturaEntryScheduleEventBaseFilter';
/**
 * @record
 */
export function KalturaEntryScheduleEventFilterArgs() { }
/** @type {?|undefined} */
KalturaEntryScheduleEventFilterArgs.prototype.parentCategoryIdsLike;
/** @type {?|undefined} */
KalturaEntryScheduleEventFilterArgs.prototype.parentCategoryIdsMultiLikeOr;
/** @type {?|undefined} */
KalturaEntryScheduleEventFilterArgs.prototype.parentCategoryIdsMultiLikeAnd;
var KalturaEntryScheduleEventFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryScheduleEventFilter, _super);
    function KalturaEntryScheduleEventFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryScheduleEventFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryScheduleEventFilter' },
            parentCategoryIdsLike: { type: 's' },
            parentCategoryIdsMultiLikeOr: { type: 's' },
            parentCategoryIdsMultiLikeAnd: { type: 's' }
        });
        return result;
    };
    return KalturaEntryScheduleEventFilter;
}(KalturaEntryScheduleEventBaseFilter));
export { KalturaEntryScheduleEventFilter };
if (false) {
    /** @type {?} */
    KalturaEntryScheduleEventFilter.prototype.parentCategoryIdsLike;
    /** @type {?} */
    KalturaEntryScheduleEventFilter.prototype.parentCategoryIdsMultiLikeOr;
    /** @type {?} */
    KalturaEntryScheduleEventFilter.prototype.parentCategoryIdsMultiLikeAnd;
}
typesMappingStorage['KalturaEntryScheduleEventFilter'] = KalturaEntryScheduleEventFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUNBQW1DLEVBQTJDLE1BQU0sdUNBQXVDLENBQUM7Ozs7Ozs7Ozs7O0FBU3JJLElBQUE7SUFBcUQsMkRBQW1DO0lBTXBGLHlDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLDRCQUE0QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3Qyw2QkFBNkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0FuQ0w7RUFXcUQsbUNBQW1DLEVBeUJ2RixDQUFBO0FBekJELDJDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QmFzZUZpbHRlciwgS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEJhc2VGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50QmFzZUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEJhc2VGaWx0ZXJBcmdzIHtcbiAgICBwYXJlbnRDYXRlZ29yeUlkc0xpa2U/IDogc3RyaW5nO1xuXHRwYXJlbnRDYXRlZ29yeUlkc011bHRpTGlrZU9yPyA6IHN0cmluZztcblx0cGFyZW50Q2F0ZWdvcnlJZHNNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50RmlsdGVyIGV4dGVuZHMgS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEJhc2VGaWx0ZXIge1xuXG4gICAgcGFyZW50Q2F0ZWdvcnlJZHNMaWtlIDogc3RyaW5nO1xuXHRwYXJlbnRDYXRlZ29yeUlkc011bHRpTGlrZU9yIDogc3RyaW5nO1xuXHRwYXJlbnRDYXRlZ29yeUlkc011bHRpTGlrZUFuZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50RmlsdGVyJyB9LFxuXHRcdFx0XHRwYXJlbnRDYXRlZ29yeUlkc0xpa2UgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFyZW50Q2F0ZWdvcnlJZHNNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRDYXRlZ29yeUlkc011bHRpTGlrZUFuZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50RmlsdGVyJ10gPSBLYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50RmlsdGVyOyJdfQ==