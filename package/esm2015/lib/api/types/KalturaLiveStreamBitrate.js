/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaLiveStreamBitrate extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaLiveStreamBitrate' },
            bitrate: { type: 'n' },
            width: { type: 'n' },
            height: { type: 'n' },
            tags: { type: 's' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1CaXRyYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVN0cmVhbUJpdHJhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVbEYsTUFBTSwrQkFBZ0MsU0FBUSxpQkFBaUI7Ozs7SUFPM0QsWUFBWSxJQUFvQztRQUU1QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNaLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZVN0cmVhbUJpdHJhdGVBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgYml0cmF0ZT8gOiBudW1iZXI7XG5cdHdpZHRoPyA6IG51bWJlcjtcblx0aGVpZ2h0PyA6IG51bWJlcjtcblx0dGFncz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlU3RyZWFtQml0cmF0ZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGJpdHJhdGUgOiBudW1iZXI7XG5cdHdpZHRoIDogbnVtYmVyO1xuXHRoZWlnaHQgOiBudW1iZXI7XG5cdHRhZ3MgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlU3RyZWFtQml0cmF0ZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVN0cmVhbUJpdHJhdGUnIH0sXG5cdFx0XHRcdGJpdHJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aGVpZ2h0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVTdHJlYW1CaXRyYXRlJ10gPSBLYWx0dXJhTGl2ZVN0cmVhbUJpdHJhdGU7Il19