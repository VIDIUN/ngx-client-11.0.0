/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaLiveStreamBitrateArgs() { }
/** @type {?|undefined} */
KalturaLiveStreamBitrateArgs.prototype.bitrate;
/** @type {?|undefined} */
KalturaLiveStreamBitrateArgs.prototype.width;
/** @type {?|undefined} */
KalturaLiveStreamBitrateArgs.prototype.height;
/** @type {?|undefined} */
KalturaLiveStreamBitrateArgs.prototype.tags;
var KalturaLiveStreamBitrate = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStreamBitrate, _super);
    function KalturaLiveStreamBitrate(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStreamBitrate.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamBitrate' },
            bitrate: { type: 'n' },
            width: { type: 'n' },
            height: { type: 'n' },
            tags: { type: 's' }
        });
        return result;
    };
    return KalturaLiveStreamBitrate;
}(KalturaObjectBase));
export { KalturaLiveStreamBitrate };
if (false) {
    /** @type {?} */
    KalturaLiveStreamBitrate.prototype.bitrate;
    /** @type {?} */
    KalturaLiveStreamBitrate.prototype.width;
    /** @type {?} */
    KalturaLiveStreamBitrate.prototype.height;
    /** @type {?} */
    KalturaLiveStreamBitrate.prototype.tags;
}
typesMappingStorage['KalturaLiveStreamBitrate'] = KalturaLiveStreamBitrate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1CaXRyYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVN0cmVhbUJpdHJhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWxGLElBQUE7SUFBOEMsb0RBQWlCO0lBTzNELGtDQUFZLElBQW9DO2VBRTVDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNaLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBdENMO0VBWThDLGlCQUFpQixFQTJCOUQsQ0FBQTtBQTNCRCxvQ0EyQkM7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVTdHJlYW1CaXRyYXRlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGJpdHJhdGU/IDogbnVtYmVyO1xuXHR3aWR0aD8gOiBudW1iZXI7XG5cdGhlaWdodD8gOiBudW1iZXI7XG5cdHRhZ3M/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZVN0cmVhbUJpdHJhdGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBiaXRyYXRlIDogbnVtYmVyO1xuXHR3aWR0aCA6IG51bWJlcjtcblx0aGVpZ2h0IDogbnVtYmVyO1xuXHR0YWdzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZVN0cmVhbUJpdHJhdGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVTdHJlYW1CaXRyYXRlJyB9LFxuXHRcdFx0XHRiaXRyYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdpZHRoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGhlaWdodCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlU3RyZWFtQml0cmF0ZSddID0gS2FsdHVyYUxpdmVTdHJlYW1CaXRyYXRlOyJdfQ==