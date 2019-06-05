/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryLiveStats } from './KalturaEntryLiveStats';
/**
 * @record
 */
export function KalturaEntryReferrerLiveStatsArgs() { }
/** @type {?|undefined} */
KalturaEntryReferrerLiveStatsArgs.prototype.referrer;
var KalturaEntryReferrerLiveStats = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryReferrerLiveStats, _super);
    function KalturaEntryReferrerLiveStats(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryReferrerLiveStats.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryReferrerLiveStats' },
            referrer: { type: 's' }
        });
        return result;
    };
    return KalturaEntryReferrerLiveStats;
}(KalturaEntryLiveStats));
export { KalturaEntryReferrerLiveStats };
if (false) {
    /** @type {?} */
    KalturaEntryReferrerLiveStats.prototype.referrer;
}
typesMappingStorage['KalturaEntryReferrerLiveStats'] = KalturaEntryReferrerLiveStats;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5UmVmZXJyZXJMaXZlU3RhdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeVJlZmVycmVyTGl2ZVN0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztBQU8zRixJQUFBO0lBQW1ELHlEQUFxQjtJQUlwRSx1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0E3Qkw7RUFTbUQscUJBQXFCLEVBcUJ2RSxDQUFBO0FBckJELHlDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeUxpdmVTdGF0cywgS2FsdHVyYUVudHJ5TGl2ZVN0YXRzQXJncyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5TGl2ZVN0YXRzJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW50cnlSZWZlcnJlckxpdmVTdGF0c0FyZ3MgIGV4dGVuZHMgS2FsdHVyYUVudHJ5TGl2ZVN0YXRzQXJncyB7XG4gICAgcmVmZXJyZXI/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlSZWZlcnJlckxpdmVTdGF0cyBleHRlbmRzIEthbHR1cmFFbnRyeUxpdmVTdGF0cyB7XG5cbiAgICByZWZlcnJlciA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVudHJ5UmVmZXJyZXJMaXZlU3RhdHNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVudHJ5UmVmZXJyZXJMaXZlU3RhdHMnIH0sXG5cdFx0XHRcdHJlZmVycmVyIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFbnRyeVJlZmVycmVyTGl2ZVN0YXRzJ10gPSBLYWx0dXJhRW50cnlSZWZlcnJlckxpdmVTdGF0czsiXX0=