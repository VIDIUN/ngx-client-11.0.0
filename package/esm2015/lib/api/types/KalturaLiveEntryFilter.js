/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLiveEntryBaseFilter } from './KalturaLiveEntryBaseFilter';
/**
 * @record
 */
export function KalturaLiveEntryFilterArgs() { }
/** @type {?|undefined} */
KalturaLiveEntryFilterArgs.prototype.isLive;
/** @type {?|undefined} */
KalturaLiveEntryFilterArgs.prototype.isRecordedEntryIdEmpty;
/** @type {?|undefined} */
KalturaLiveEntryFilterArgs.prototype.hasMediaServerHostname;
export class KalturaLiveEntryFilter extends KalturaLiveEntryBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaLiveEntryFilter' },
            isLive: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            isRecordedEntryIdEmpty: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasMediaServerHostname: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveEntryFilter.prototype.isLive;
    /** @type {?} */
    KalturaLiveEntryFilter.prototype.isRecordedEntryIdEmpty;
    /** @type {?} */
    KalturaLiveEntryFilter.prototype.hasMediaServerHostname;
}
typesMappingStorage['KalturaLiveEntryFilter'] = KalturaLiveEntryFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVFbnRyeUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBa0MsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7Ozs7QUFTMUcsTUFBTSw2QkFBOEIsU0FBUSwwQkFBMEI7Ozs7SUFNbEUsWUFBWSxJQUFrQztRQUUxQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDekcsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN6SCxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUxpdmVFbnRyeUJhc2VGaWx0ZXIsIEthbHR1cmFMaXZlRW50cnlCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUxpdmVFbnRyeUJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlRW50cnlGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFMaXZlRW50cnlCYXNlRmlsdGVyQXJncyB7XG4gICAgaXNMaXZlPyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGlzUmVjb3JkZWRFbnRyeUlkRW1wdHk/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0aGFzTWVkaWFTZXJ2ZXJIb3N0bmFtZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlRW50cnlGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhTGl2ZUVudHJ5QmFzZUZpbHRlciB7XG5cbiAgICBpc0xpdmUgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRpc1JlY29yZGVkRW50cnlJZEVtcHR5IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0aGFzTWVkaWFTZXJ2ZXJIb3N0bmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVFbnRyeUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZUVudHJ5RmlsdGVyJyB9LFxuXHRcdFx0XHRpc0xpdmUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGlzUmVjb3JkZWRFbnRyeUlkRW1wdHkgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGhhc01lZGlhU2VydmVySG9zdG5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVFbnRyeUZpbHRlciddID0gS2FsdHVyYUxpdmVFbnRyeUZpbHRlcjsiXX0=