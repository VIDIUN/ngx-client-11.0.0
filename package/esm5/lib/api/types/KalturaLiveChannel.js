/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLiveEntry } from './KalturaLiveEntry';
/**
 * @record
 */
export function KalturaLiveChannelArgs() { }
/** @type {?|undefined} */
KalturaLiveChannelArgs.prototype.playlistId;
/** @type {?|undefined} */
KalturaLiveChannelArgs.prototype.repeat;
var KalturaLiveChannel = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveChannel, _super);
    function KalturaLiveChannel(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveChannel.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveChannel' },
            playlistId: { type: 's' },
            repeat: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    };
    return KalturaLiveChannel;
}(KalturaLiveEntry));
export { KalturaLiveChannel };
if (false) {
    /** @type {?} */
    KalturaLiveChannel.prototype.playlistId;
    /** @type {?} */
    KalturaLiveChannel.prototype.repeat;
}
typesMappingStorage['KalturaLiveChannel'] = KalturaLiveChannel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVDaGFubmVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZUNoYW5uZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUF3QixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7QUFRNUUsSUFBQTtJQUF3Qyw4Q0FBZ0I7SUFLcEQsNEJBQVksSUFBOEI7ZUFFdEMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx5Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN2RSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ2hHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkJBakNMO0VBV3dDLGdCQUFnQixFQXVCdkQsQ0FBQTtBQXZCRCw4QkF1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVFbnRyeSwgS2FsdHVyYUxpdmVFbnRyeUFyZ3MgfSBmcm9tICcuL0thbHR1cmFMaXZlRW50cnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlQ2hhbm5lbEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUxpdmVFbnRyeUFyZ3Mge1xuICAgIHBsYXlsaXN0SWQ/IDogc3RyaW5nO1xuXHRyZXBlYXQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVDaGFubmVsIGV4dGVuZHMgS2FsdHVyYUxpdmVFbnRyeSB7XG5cbiAgICBwbGF5bGlzdElkIDogc3RyaW5nO1xuXHRyZXBlYXQgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZUNoYW5uZWxBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVDaGFubmVsJyB9LFxuXHRcdFx0XHRwbGF5bGlzdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlcGVhdCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVDaGFubmVsJ10gPSBLYWx0dXJhTGl2ZUNoYW5uZWw7Il19