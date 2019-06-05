/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStatsEventType } from './KalturaLiveStatsEventType';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaLiveStatsEventArgs() { }
/** @type {?|undefined} */
KalturaLiveStatsEventArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaLiveStatsEventArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaLiveStatsEventArgs.prototype.eventType;
/** @type {?|undefined} */
KalturaLiveStatsEventArgs.prototype.sessionId;
/** @type {?|undefined} */
KalturaLiveStatsEventArgs.prototype.eventIndex;
/** @type {?|undefined} */
KalturaLiveStatsEventArgs.prototype.bufferTime;
/** @type {?|undefined} */
KalturaLiveStatsEventArgs.prototype.bitrate;
/** @type {?|undefined} */
KalturaLiveStatsEventArgs.prototype.referrer;
/** @type {?|undefined} */
KalturaLiveStatsEventArgs.prototype.isLive;
/** @type {?|undefined} */
KalturaLiveStatsEventArgs.prototype.startTime;
/** @type {?|undefined} */
KalturaLiveStatsEventArgs.prototype.deliveryType;
var KalturaLiveStatsEvent = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStatsEvent, _super);
    function KalturaLiveStatsEvent(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStatsEvent.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStatsEvent' },
            partnerId: { type: 'n' },
            entryId: { type: 's' },
            eventType: { type: 'en', subTypeConstructor: KalturaLiveStatsEventType, subType: 'KalturaLiveStatsEventType' },
            sessionId: { type: 's' },
            eventIndex: { type: 'n' },
            bufferTime: { type: 'n' },
            bitrate: { type: 'n' },
            referrer: { type: 's' },
            isLive: { type: 'b' },
            startTime: { type: 's' },
            deliveryType: { type: 'es', subTypeConstructor: KalturaPlaybackProtocol, subType: 'KalturaPlaybackProtocol' }
        });
        return result;
    };
    return KalturaLiveStatsEvent;
}(KalturaObjectBase));
export { KalturaLiveStatsEvent };
if (false) {
    /** @type {?} */
    KalturaLiveStatsEvent.prototype.partnerId;
    /** @type {?} */
    KalturaLiveStatsEvent.prototype.entryId;
    /** @type {?} */
    KalturaLiveStatsEvent.prototype.eventType;
    /** @type {?} */
    KalturaLiveStatsEvent.prototype.sessionId;
    /** @type {?} */
    KalturaLiveStatsEvent.prototype.eventIndex;
    /** @type {?} */
    KalturaLiveStatsEvent.prototype.bufferTime;
    /** @type {?} */
    KalturaLiveStatsEvent.prototype.bitrate;
    /** @type {?} */
    KalturaLiveStatsEvent.prototype.referrer;
    /** @type {?} */
    KalturaLiveStatsEvent.prototype.isLive;
    /** @type {?} */
    KalturaLiveStatsEvent.prototype.startTime;
    /** @type {?} */
    KalturaLiveStatsEvent.prototype.deliveryType;
}
typesMappingStorage['KalturaLiveStatsEvent'] = KalturaLiveStatsEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdGF0c0V2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVN0YXRzRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmxGLElBQUE7SUFBMkMsaURBQWlCO0lBY3hELCtCQUFZLElBQWlDO2VBRXpDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQ2xILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7U0FDeEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtnQ0E3REw7RUFxQjJDLGlCQUFpQixFQXlDM0QsQ0FBQTtBQXpDRCxpQ0F5Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RhdHNFdmVudFR5cGUgfSBmcm9tICcuL0thbHR1cmFMaXZlU3RhdHNFdmVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wgfSBmcm9tICcuL0thbHR1cmFQbGF5YmFja1Byb3RvY29sJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZVN0YXRzRXZlbnRBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcGFydG5lcklkPyA6IG51bWJlcjtcblx0ZW50cnlJZD8gOiBzdHJpbmc7XG5cdGV2ZW50VHlwZT8gOiBLYWx0dXJhTGl2ZVN0YXRzRXZlbnRUeXBlO1xuXHRzZXNzaW9uSWQ/IDogc3RyaW5nO1xuXHRldmVudEluZGV4PyA6IG51bWJlcjtcblx0YnVmZmVyVGltZT8gOiBudW1iZXI7XG5cdGJpdHJhdGU/IDogbnVtYmVyO1xuXHRyZWZlcnJlcj8gOiBzdHJpbmc7XG5cdGlzTGl2ZT8gOiBib29sZWFuO1xuXHRzdGFydFRpbWU/IDogc3RyaW5nO1xuXHRkZWxpdmVyeVR5cGU/IDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2w7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlU3RhdHNFdmVudCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHBhcnRuZXJJZCA6IG51bWJlcjtcblx0ZW50cnlJZCA6IHN0cmluZztcblx0ZXZlbnRUeXBlIDogS2FsdHVyYUxpdmVTdGF0c0V2ZW50VHlwZTtcblx0c2Vzc2lvbklkIDogc3RyaW5nO1xuXHRldmVudEluZGV4IDogbnVtYmVyO1xuXHRidWZmZXJUaW1lIDogbnVtYmVyO1xuXHRiaXRyYXRlIDogbnVtYmVyO1xuXHRyZWZlcnJlciA6IHN0cmluZztcblx0aXNMaXZlIDogYm9vbGVhbjtcblx0c3RhcnRUaW1lIDogc3RyaW5nO1xuXHRkZWxpdmVyeVR5cGUgOiBLYWx0dXJhUGxheWJhY2tQcm90b2NvbDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVTdGF0c0V2ZW50QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFMaXZlU3RhdHNFdmVudCcgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXZlbnRUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVTdGF0c0V2ZW50VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTGl2ZVN0YXRzRXZlbnRUeXBlJyB9LFxuXHRcdFx0XHRzZXNzaW9uSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXZlbnRJbmRleCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRidWZmZXJUaW1lIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJpdHJhdGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVmZXJyZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXNMaXZlIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHN0YXJ0VGltZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWxpdmVyeVR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWJhY2tQcm90b2NvbCwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheWJhY2tQcm90b2NvbCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVTdGF0c0V2ZW50J10gPSBLYWx0dXJhTGl2ZVN0YXRzRXZlbnQ7Il19