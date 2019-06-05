/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaLiveEntryRecordingOptionsArgs() { }
/** @type {?|undefined} */
KalturaLiveEntryRecordingOptionsArgs.prototype.shouldCopyEntitlement;
/** @type {?|undefined} */
KalturaLiveEntryRecordingOptionsArgs.prototype.shouldCopyScheduling;
/** @type {?|undefined} */
KalturaLiveEntryRecordingOptionsArgs.prototype.shouldCopyThumbnail;
/** @type {?|undefined} */
KalturaLiveEntryRecordingOptionsArgs.prototype.shouldMakeHidden;
var KalturaLiveEntryRecordingOptions = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveEntryRecordingOptions, _super);
    function KalturaLiveEntryRecordingOptions(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveEntryRecordingOptions.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveEntryRecordingOptions' },
            shouldCopyEntitlement: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            shouldCopyScheduling: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            shouldCopyThumbnail: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            shouldMakeHidden: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    };
    return KalturaLiveEntryRecordingOptions;
}(KalturaObjectBase));
export { KalturaLiveEntryRecordingOptions };
if (false) {
    /** @type {?} */
    KalturaLiveEntryRecordingOptions.prototype.shouldCopyEntitlement;
    /** @type {?} */
    KalturaLiveEntryRecordingOptions.prototype.shouldCopyScheduling;
    /** @type {?} */
    KalturaLiveEntryRecordingOptions.prototype.shouldCopyThumbnail;
    /** @type {?} */
    KalturaLiveEntryRecordingOptions.prototype.shouldMakeHidden;
}
typesMappingStorage['KalturaLiveEntryRecordingOptions'] = KalturaLiveEntryRecordingOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeVJlY29yZGluZ09wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlRW50cnlSZWNvcmRpbmdPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVsRixJQUFBO0lBQXNELDREQUFpQjtJQU9uRSwwQ0FBWSxJQUE0QztlQUVwRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDeEgsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN2SCxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3RILGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDMUcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0F2Q0w7RUFhc0QsaUJBQWlCLEVBMkJ0RSxDQUFBO0FBM0JELDRDQTJCQzs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlRW50cnlSZWNvcmRpbmdPcHRpb25zQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHNob3VsZENvcHlFbnRpdGxlbWVudD8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRzaG91bGRDb3B5U2NoZWR1bGluZz8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRzaG91bGRDb3B5VGh1bWJuYWlsPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNob3VsZE1ha2VIaWRkZW4/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVFbnRyeVJlY29yZGluZ09wdGlvbnMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBzaG91bGRDb3B5RW50aXRsZW1lbnQgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRzaG91bGRDb3B5U2NoZWR1bGluZyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNob3VsZENvcHlUaHVtYm5haWwgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRzaG91bGRNYWtlSGlkZGVuIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVFbnRyeVJlY29yZGluZ09wdGlvbnNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVFbnRyeVJlY29yZGluZ09wdGlvbnMnIH0sXG5cdFx0XHRcdHNob3VsZENvcHlFbnRpdGxlbWVudCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0c2hvdWxkQ29weVNjaGVkdWxpbmcgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdHNob3VsZENvcHlUaHVtYm5haWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdHNob3VsZE1ha2VIaWRkZW4gOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlRW50cnlSZWNvcmRpbmdPcHRpb25zJ10gPSBLYWx0dXJhTGl2ZUVudHJ5UmVjb3JkaW5nT3B0aW9uczsiXX0=