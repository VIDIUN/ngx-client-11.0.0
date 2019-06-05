/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaStatsEvent extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0YXRzRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTdGF0c0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCbEYsTUFBTSx3QkFBeUIsU0FBUSxpQkFBaUI7Ozs7SUF5QnBELFlBQVksSUFBNkI7UUFFckMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RFLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDMUcsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDeEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7U0FDdkcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0YXRzRXZlbnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhU3RhdHNFdmVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVN0YXRzRmVhdHVyZVR5cGUgfSBmcm9tICcuL0thbHR1cmFTdGF0c0ZlYXR1cmVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3RhdHNFdmVudEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBjbGllbnRWZXI/IDogc3RyaW5nO1xuXHRldmVudFR5cGU/IDogS2FsdHVyYVN0YXRzRXZlbnRUeXBlO1xuXHRldmVudFRpbWVzdGFtcD8gOiBudW1iZXI7XG5cdHNlc3Npb25JZD8gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdGVudHJ5SWQ/IDogc3RyaW5nO1xuXHR1bmlxdWVWaWV3ZXI/IDogc3RyaW5nO1xuXHR3aWRnZXRJZD8gOiBzdHJpbmc7XG5cdHVpY29uZklkPyA6IG51bWJlcjtcblx0dXNlcklkPyA6IHN0cmluZztcblx0Y3VycmVudFBvaW50PyA6IG51bWJlcjtcblx0ZHVyYXRpb24/IDogbnVtYmVyO1xuXHRwcm9jZXNzRHVyYXRpb24/IDogbnVtYmVyO1xuXHRjb250cm9sSWQ/IDogc3RyaW5nO1xuXHRzZWVrPyA6IGJvb2xlYW47XG5cdG5ld1BvaW50PyA6IG51bWJlcjtcblx0cmVmZXJyZXI/IDogc3RyaW5nO1xuXHRpc0ZpcnN0SW5TZXNzaW9uPyA6IGJvb2xlYW47XG5cdGFwcGxpY2F0aW9uSWQ/IDogc3RyaW5nO1xuXHRjb250ZXh0SWQ/IDogbnVtYmVyO1xuXHRmZWF0dXJlVHlwZT8gOiBLYWx0dXJhU3RhdHNGZWF0dXJlVHlwZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVN0YXRzRXZlbnQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBjbGllbnRWZXIgOiBzdHJpbmc7XG5cdGV2ZW50VHlwZSA6IEthbHR1cmFTdGF0c0V2ZW50VHlwZTtcblx0ZXZlbnRUaW1lc3RhbXAgOiBudW1iZXI7XG5cdHNlc3Npb25JZCA6IHN0cmluZztcblx0cGFydG5lcklkIDogbnVtYmVyO1xuXHRlbnRyeUlkIDogc3RyaW5nO1xuXHR1bmlxdWVWaWV3ZXIgOiBzdHJpbmc7XG5cdHdpZGdldElkIDogc3RyaW5nO1xuXHR1aWNvbmZJZCA6IG51bWJlcjtcblx0dXNlcklkIDogc3RyaW5nO1xuXHRjdXJyZW50UG9pbnQgOiBudW1iZXI7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xuXHRyZWFkb25seSB1c2VySXAgOiBzdHJpbmc7XG5cdHByb2Nlc3NEdXJhdGlvbiA6IG51bWJlcjtcblx0Y29udHJvbElkIDogc3RyaW5nO1xuXHRzZWVrIDogYm9vbGVhbjtcblx0bmV3UG9pbnQgOiBudW1iZXI7XG5cdHJlZmVycmVyIDogc3RyaW5nO1xuXHRpc0ZpcnN0SW5TZXNzaW9uIDogYm9vbGVhbjtcblx0YXBwbGljYXRpb25JZCA6IHN0cmluZztcblx0Y29udGV4dElkIDogbnVtYmVyO1xuXHRmZWF0dXJlVHlwZSA6IEthbHR1cmFTdGF0c0ZlYXR1cmVUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU3RhdHNFdmVudEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU3RhdHNFdmVudCcgfSxcblx0XHRcdFx0Y2xpZW50VmVyIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGV2ZW50VHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdGF0c0V2ZW50VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU3RhdHNFdmVudFR5cGUnIH0sXG5cdFx0XHRcdGV2ZW50VGltZXN0YW1wIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNlc3Npb25JZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1bmlxdWVWaWV3ZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0d2lkZ2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dWljb25mSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGN1cnJlbnRQb2ludCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1c2VySXAgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwcm9jZXNzRHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29udHJvbElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlZWsgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0bmV3UG9pbnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cmVmZXJyZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXNGaXJzdEluU2Vzc2lvbiA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRhcHBsaWNhdGlvbklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRleHRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmZWF0dXJlVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdGF0c0ZlYXR1cmVUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTdGF0c0ZlYXR1cmVUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3RhdHNFdmVudCddID0gS2FsdHVyYVN0YXRzRXZlbnQ7Il19