/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaLiveStatsEvent extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdGF0c0V2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTGl2ZVN0YXRzRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCbEYsTUFBTSw0QkFBNkIsU0FBUSxpQkFBaUI7Ozs7SUFjeEQsWUFBWSxJQUFpQztRQUV6QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUUsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQ2xILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7U0FDeEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVN0YXRzRXZlbnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0YXRzRXZlbnRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5YmFja1Byb3RvY29sIH0gZnJvbSAnLi9LYWx0dXJhUGxheWJhY2tQcm90b2NvbCc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUxpdmVTdGF0c0V2ZW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdGVudHJ5SWQ/IDogc3RyaW5nO1xuXHRldmVudFR5cGU/IDogS2FsdHVyYUxpdmVTdGF0c0V2ZW50VHlwZTtcblx0c2Vzc2lvbklkPyA6IHN0cmluZztcblx0ZXZlbnRJbmRleD8gOiBudW1iZXI7XG5cdGJ1ZmZlclRpbWU/IDogbnVtYmVyO1xuXHRiaXRyYXRlPyA6IG51bWJlcjtcblx0cmVmZXJyZXI/IDogc3RyaW5nO1xuXHRpc0xpdmU/IDogYm9vbGVhbjtcblx0c3RhcnRUaW1lPyA6IHN0cmluZztcblx0ZGVsaXZlcnlUeXBlPyA6IEthbHR1cmFQbGF5YmFja1Byb3RvY29sO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZVN0YXRzRXZlbnQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdGV2ZW50VHlwZSA6IEthbHR1cmFMaXZlU3RhdHNFdmVudFR5cGU7XG5cdHNlc3Npb25JZCA6IHN0cmluZztcblx0ZXZlbnRJbmRleCA6IG51bWJlcjtcblx0YnVmZmVyVGltZSA6IG51bWJlcjtcblx0Yml0cmF0ZSA6IG51bWJlcjtcblx0cmVmZXJyZXIgOiBzdHJpbmc7XG5cdGlzTGl2ZSA6IGJvb2xlYW47XG5cdHN0YXJ0VGltZSA6IHN0cmluZztcblx0ZGVsaXZlcnlUeXBlIDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2w7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlU3RhdHNFdmVudEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVN0YXRzRXZlbnQnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGV2ZW50VHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlU3RhdHNFdmVudFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVTdGF0c0V2ZW50VHlwZScgfSxcblx0XHRcdFx0c2Vzc2lvbklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGV2ZW50SW5kZXggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YnVmZmVyVGltZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRiaXRyYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJlZmVycmVyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlzTGl2ZSA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRzdGFydFRpbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVsaXZlcnlUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlU3RhdHNFdmVudCddID0gS2FsdHVyYUxpdmVTdGF0c0V2ZW50OyJdfQ==