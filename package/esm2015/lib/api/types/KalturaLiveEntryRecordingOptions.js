/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaLiveEntryRecordingOptions extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaLiveEntryRecordingOptions' },
            shouldCopyEntitlement: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            shouldCopyScheduling: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            shouldCopyThumbnail: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            shouldMakeHidden: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeVJlY29yZGluZ09wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlRW50cnlSZWNvcmRpbmdPcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVWxGLE1BQU0sdUNBQXdDLFNBQVEsaUJBQWlCOzs7O0lBT25FLFlBQVksSUFBNEM7UUFFcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1lBQ3JGLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDeEgsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN2SCxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3RILGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7U0FDMUcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtDQUFrQyxDQUFDLEdBQUcsZ0NBQWdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVFbnRyeVJlY29yZGluZ09wdGlvbnNBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgc2hvdWxkQ29weUVudGl0bGVtZW50PyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNob3VsZENvcHlTY2hlZHVsaW5nPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNob3VsZENvcHlUaHVtYm5haWw/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0c2hvdWxkTWFrZUhpZGRlbj8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZUVudHJ5UmVjb3JkaW5nT3B0aW9ucyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHNob3VsZENvcHlFbnRpdGxlbWVudCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNob3VsZENvcHlTY2hlZHVsaW5nIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0c2hvdWxkQ29weVRodW1ibmFpbCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHNob3VsZE1ha2VIaWRkZW4gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZUVudHJ5UmVjb3JkaW5nT3B0aW9uc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZUVudHJ5UmVjb3JkaW5nT3B0aW9ucycgfSxcblx0XHRcdFx0c2hvdWxkQ29weUVudGl0bGVtZW50IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRzaG91bGRDb3B5U2NoZWR1bGluZyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0c2hvdWxkQ29weVRodW1ibmFpbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0c2hvdWxkTWFrZUhpZGRlbiA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVFbnRyeVJlY29yZGluZ09wdGlvbnMnXSA9IEthbHR1cmFMaXZlRW50cnlSZWNvcmRpbmdPcHRpb25zOyJdfQ==