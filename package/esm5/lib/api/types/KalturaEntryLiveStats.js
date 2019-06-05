/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStats } from './KalturaLiveStats';
/**
 * @record
 */
export function KalturaEntryLiveStatsArgs() { }
/** @type {?|undefined} */
KalturaEntryLiveStatsArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaEntryLiveStatsArgs.prototype.peakAudience;
/** @type {?|undefined} */
KalturaEntryLiveStatsArgs.prototype.peakDvrAudience;
var KalturaEntryLiveStats = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEntryLiveStats, _super);
    function KalturaEntryLiveStats(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEntryLiveStats.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryLiveStats' },
            entryId: { type: 's' },
            peakAudience: { type: 'n' },
            peakDvrAudience: { type: 'n' }
        });
        return result;
    };
    return KalturaEntryLiveStats;
}(KalturaLiveStats));
export { KalturaEntryLiveStats };
if (false) {
    /** @type {?} */
    KalturaEntryLiveStats.prototype.entryId;
    /** @type {?} */
    KalturaEntryLiveStats.prototype.peakAudience;
    /** @type {?} */
    KalturaEntryLiveStats.prototype.peakDvrAudience;
}
typesMappingStorage['KalturaEntryLiveStats'] = KalturaEntryLiveStats;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5TGl2ZVN0YXRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW50cnlMaXZlU3RhdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUF3QixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7OztBQVM1RSxJQUFBO0lBQTJDLGlEQUFnQjtJQU12RCwrQkFBWSxJQUFpQztlQUV6QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBbkNMO0VBVzJDLGdCQUFnQixFQXlCMUQsQ0FBQTtBQXpCRCxpQ0F5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVTdGF0cywgS2FsdHVyYUxpdmVTdGF0c0FyZ3MgfSBmcm9tICcuL0thbHR1cmFMaXZlU3RhdHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbnRyeUxpdmVTdGF0c0FyZ3MgIGV4dGVuZHMgS2FsdHVyYUxpdmVTdGF0c0FyZ3Mge1xuICAgIGVudHJ5SWQ/IDogc3RyaW5nO1xuXHRwZWFrQXVkaWVuY2U/IDogbnVtYmVyO1xuXHRwZWFrRHZyQXVkaWVuY2U/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW50cnlMaXZlU3RhdHMgZXh0ZW5kcyBLYWx0dXJhTGl2ZVN0YXRzIHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHBlYWtBdWRpZW5jZSA6IG51bWJlcjtcblx0cGVha0R2ckF1ZGllbmNlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlMaXZlU3RhdHNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVudHJ5TGl2ZVN0YXRzJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBlYWtBdWRpZW5jZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwZWFrRHZyQXVkaWVuY2UgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5TGl2ZVN0YXRzJ10gPSBLYWx0dXJhRW50cnlMaXZlU3RhdHM7Il19