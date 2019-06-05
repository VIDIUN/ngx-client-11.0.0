/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStatsEventType } from './KalturaStatsEventType';
import { KalturaStatsFeatureType } from './KalturaStatsFeatureType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaStatsEventArgs() { }
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.clientVer;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.eventType;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.eventTimestamp;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.sessionId;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.uniqueViewer;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.widgetId;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.uiconfId;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.userId;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.currentPoint;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.duration;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.processDuration;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.controlId;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.seek;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.newPoint;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.referrer;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.isFirstInSession;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.applicationId;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.contextId;
/** @type {?|undefined} */
KalturaStatsEventArgs.prototype.featureType;
var KalturaStatsEvent = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaStatsEvent, _super);
    function KalturaStatsEvent(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaStatsEvent.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaStatsEvent' },
            clientVer: { type: 's' },
            eventType: { type: 'en', subTypeConstructor: KalturaStatsEventType, subType: 'KalturaStatsEventType' },
            eventTimestamp: { type: 'n' },
            sessionId: { type: 's' },
            partnerId: { type: 'n' },
            entryId: { type: 's' },
            uniqueViewer: { type: 's' },
            widgetId: { type: 's' },
            uiconfId: { type: 'n' },
            userId: { type: 's' },
            currentPoint: { type: 'n' },
            duration: { type: 'n' },
            userIp: { type: 's', readOnly: true },
            processDuration: { type: 'n' },
            controlId: { type: 's' },
            seek: { type: 'b' },
            newPoint: { type: 'n' },
            referrer: { type: 's' },
            isFirstInSession: { type: 'b' },
            applicationId: { type: 's' },
            contextId: { type: 'n' },
            featureType: { type: 'en', subTypeConstructor: KalturaStatsFeatureType, subType: 'KalturaStatsFeatureType' }
        });
        return result;
    };
    return KalturaStatsEvent;
}(KalturaObjectBase));
export { KalturaStatsEvent };
if (false) {
    /** @type {?} */
    KalturaStatsEvent.prototype.clientVer;
    /** @type {?} */
    KalturaStatsEvent.prototype.eventType;
    /** @type {?} */
    KalturaStatsEvent.prototype.eventTimestamp;
    /** @type {?} */
    KalturaStatsEvent.prototype.sessionId;
    /** @type {?} */
    KalturaStatsEvent.prototype.partnerId;
    /** @type {?} */
    KalturaStatsEvent.prototype.entryId;
    /** @type {?} */
    KalturaStatsEvent.prototype.uniqueViewer;
    /** @type {?} */
    KalturaStatsEvent.prototype.widgetId;
    /** @type {?} */
    KalturaStatsEvent.prototype.uiconfId;
    /** @type {?} */
    KalturaStatsEvent.prototype.userId;
    /** @type {?} */
    KalturaStatsEvent.prototype.currentPoint;
    /** @type {?} */
    KalturaStatsEvent.prototype.duration;
    /** @type {?} */
    KalturaStatsEvent.prototype.userIp;
    /** @type {?} */
    KalturaStatsEvent.prototype.processDuration;
    /** @type {?} */
    KalturaStatsEvent.prototype.controlId;
    /** @type {?} */
    KalturaStatsEvent.prototype.seek;
    /** @type {?} */
    KalturaStatsEvent.prototype.newPoint;
    /** @type {?} */
    KalturaStatsEvent.prototype.referrer;
    /** @type {?} */
    KalturaStatsEvent.prototype.isFirstInSession;
    /** @type {?} */
    KalturaStatsEvent.prototype.applicationId;
    /** @type {?} */
    KalturaStatsEvent.prototype.contextId;
    /** @type {?} */
    KalturaStatsEvent.prototype.featureType;
}
typesMappingStorage['KalturaStatsEvent'] = KalturaStatsEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0YXRzRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTdGF0c0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQmxGLElBQUE7SUFBdUMsNkNBQWlCO0lBeUJwRCwyQkFBWSxJQUE2QjtlQUVyQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RFLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUcsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDeEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7U0FDdkcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0QkE3Rkw7RUErQnVDLGlCQUFpQixFQStEdkQsQ0FBQTtBQS9ERCw2QkErREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RhdHNFdmVudFR5cGUgfSBmcm9tICcuL0thbHR1cmFTdGF0c0V2ZW50VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3RhdHNGZWF0dXJlVHlwZSB9IGZyb20gJy4vS2FsdHVyYVN0YXRzRmVhdHVyZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTdGF0c0V2ZW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGNsaWVudFZlcj8gOiBzdHJpbmc7XG5cdGV2ZW50VHlwZT8gOiBLYWx0dXJhU3RhdHNFdmVudFR5cGU7XG5cdGV2ZW50VGltZXN0YW1wPyA6IG51bWJlcjtcblx0c2Vzc2lvbklkPyA6IHN0cmluZztcblx0cGFydG5lcklkPyA6IG51bWJlcjtcblx0ZW50cnlJZD8gOiBzdHJpbmc7XG5cdHVuaXF1ZVZpZXdlcj8gOiBzdHJpbmc7XG5cdHdpZGdldElkPyA6IHN0cmluZztcblx0dWljb25mSWQ/IDogbnVtYmVyO1xuXHR1c2VySWQ/IDogc3RyaW5nO1xuXHRjdXJyZW50UG9pbnQ/IDogbnVtYmVyO1xuXHRkdXJhdGlvbj8gOiBudW1iZXI7XG5cdHByb2Nlc3NEdXJhdGlvbj8gOiBudW1iZXI7XG5cdGNvbnRyb2xJZD8gOiBzdHJpbmc7XG5cdHNlZWs/IDogYm9vbGVhbjtcblx0bmV3UG9pbnQ/IDogbnVtYmVyO1xuXHRyZWZlcnJlcj8gOiBzdHJpbmc7XG5cdGlzRmlyc3RJblNlc3Npb24/IDogYm9vbGVhbjtcblx0YXBwbGljYXRpb25JZD8gOiBzdHJpbmc7XG5cdGNvbnRleHRJZD8gOiBudW1iZXI7XG5cdGZlYXR1cmVUeXBlPyA6IEthbHR1cmFTdGF0c0ZlYXR1cmVUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU3RhdHNFdmVudCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGNsaWVudFZlciA6IHN0cmluZztcblx0ZXZlbnRUeXBlIDogS2FsdHVyYVN0YXRzRXZlbnRUeXBlO1xuXHRldmVudFRpbWVzdGFtcCA6IG51bWJlcjtcblx0c2Vzc2lvbklkIDogc3RyaW5nO1xuXHRwYXJ0bmVySWQgOiBudW1iZXI7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdHVuaXF1ZVZpZXdlciA6IHN0cmluZztcblx0d2lkZ2V0SWQgOiBzdHJpbmc7XG5cdHVpY29uZklkIDogbnVtYmVyO1xuXHR1c2VySWQgOiBzdHJpbmc7XG5cdGN1cnJlbnRQb2ludCA6IG51bWJlcjtcblx0ZHVyYXRpb24gOiBudW1iZXI7XG5cdHJlYWRvbmx5IHVzZXJJcCA6IHN0cmluZztcblx0cHJvY2Vzc0R1cmF0aW9uIDogbnVtYmVyO1xuXHRjb250cm9sSWQgOiBzdHJpbmc7XG5cdHNlZWsgOiBib29sZWFuO1xuXHRuZXdQb2ludCA6IG51bWJlcjtcblx0cmVmZXJyZXIgOiBzdHJpbmc7XG5cdGlzRmlyc3RJblNlc3Npb24gOiBib29sZWFuO1xuXHRhcHBsaWNhdGlvbklkIDogc3RyaW5nO1xuXHRjb250ZXh0SWQgOiBudW1iZXI7XG5cdGZlYXR1cmVUeXBlIDogS2FsdHVyYVN0YXRzRmVhdHVyZVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTdGF0c0V2ZW50QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTdGF0c0V2ZW50JyB9LFxuXHRcdFx0XHRjbGllbnRWZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXZlbnRUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0YXRzRXZlbnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTdGF0c0V2ZW50VHlwZScgfSxcblx0XHRcdFx0ZXZlbnRUaW1lc3RhbXAgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2Vzc2lvbklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVuaXF1ZVZpZXdlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3aWRnZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1aWNvbmZJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3VycmVudFBvaW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVzZXJJcCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHByb2Nlc3NEdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb250cm9sSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VlayA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRuZXdQb2ludCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZWZlcnJlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpc0ZpcnN0SW5TZXNzaW9uIDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGFwcGxpY2F0aW9uSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGV4dElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZlYXR1cmVUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0YXRzRmVhdHVyZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVN0YXRzRmVhdHVyZVR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTdGF0c0V2ZW50J10gPSBLYWx0dXJhU3RhdHNFdmVudDsiXX0=