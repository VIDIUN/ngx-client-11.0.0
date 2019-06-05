/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaStatsKmcEventType } from './KalturaStatsKmcEventType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaStatsKmcEventArgs() { }
/** @type {?|undefined} */
KalturaStatsKmcEventArgs.prototype.clientVer;
/** @type {?|undefined} */
KalturaStatsKmcEventArgs.prototype.kmcEventActionPath;
/** @type {?|undefined} */
KalturaStatsKmcEventArgs.prototype.kmcEventType;
/** @type {?|undefined} */
KalturaStatsKmcEventArgs.prototype.eventTimestamp;
/** @type {?|undefined} */
KalturaStatsKmcEventArgs.prototype.sessionId;
/** @type {?|undefined} */
KalturaStatsKmcEventArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaStatsKmcEventArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaStatsKmcEventArgs.prototype.widgetId;
/** @type {?|undefined} */
KalturaStatsKmcEventArgs.prototype.uiconfId;
/** @type {?|undefined} */
KalturaStatsKmcEventArgs.prototype.userId;
export class KalturaStatsKmcEvent extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaStatsKmcEvent' },
            clientVer: { type: 's' },
            kmcEventActionPath: { type: 's' },
            kmcEventType: { type: 'en', subTypeConstructor: KalturaStatsKmcEventType, subType: 'KalturaStatsKmcEventType' },
            eventTimestamp: { type: 'n' },
            sessionId: { type: 's' },
            partnerId: { type: 'n' },
            entryId: { type: 's' },
            widgetId: { type: 's' },
            uiconfId: { type: 'n' },
            userId: { type: 's' },
            userIp: { type: 's', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaStatsKmcEvent.prototype.clientVer;
    /** @type {?} */
    KalturaStatsKmcEvent.prototype.kmcEventActionPath;
    /** @type {?} */
    KalturaStatsKmcEvent.prototype.kmcEventType;
    /** @type {?} */
    KalturaStatsKmcEvent.prototype.eventTimestamp;
    /** @type {?} */
    KalturaStatsKmcEvent.prototype.sessionId;
    /** @type {?} */
    KalturaStatsKmcEvent.prototype.partnerId;
    /** @type {?} */
    KalturaStatsKmcEvent.prototype.entryId;
    /** @type {?} */
    KalturaStatsKmcEvent.prototype.widgetId;
    /** @type {?} */
    KalturaStatsKmcEvent.prototype.uiconfId;
    /** @type {?} */
    KalturaStatsKmcEvent.prototype.userId;
    /** @type {?} */
    KalturaStatsKmcEvent.prototype.userIp;
}
typesMappingStorage['KalturaStatsKmcEvent'] = KalturaStatsKmcEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0YXRzS21jRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTdGF0c0ttY0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JsRixNQUFNLDJCQUE0QixTQUFRLGlCQUFpQjs7OztJQWN2RCxZQUFZLElBQWdDO1FBRXhDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUNuSCxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUMvQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdGF0c0ttY0V2ZW50VHlwZSB9IGZyb20gJy4vS2FsdHVyYVN0YXRzS21jRXZlbnRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3RhdHNLbWNFdmVudEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBjbGllbnRWZXI/IDogc3RyaW5nO1xuXHRrbWNFdmVudEFjdGlvblBhdGg/IDogc3RyaW5nO1xuXHRrbWNFdmVudFR5cGU/IDogS2FsdHVyYVN0YXRzS21jRXZlbnRUeXBlO1xuXHRldmVudFRpbWVzdGFtcD8gOiBudW1iZXI7XG5cdHNlc3Npb25JZD8gOiBzdHJpbmc7XG5cdHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdGVudHJ5SWQ/IDogc3RyaW5nO1xuXHR3aWRnZXRJZD8gOiBzdHJpbmc7XG5cdHVpY29uZklkPyA6IG51bWJlcjtcblx0dXNlcklkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVN0YXRzS21jRXZlbnQgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBjbGllbnRWZXIgOiBzdHJpbmc7XG5cdGttY0V2ZW50QWN0aW9uUGF0aCA6IHN0cmluZztcblx0a21jRXZlbnRUeXBlIDogS2FsdHVyYVN0YXRzS21jRXZlbnRUeXBlO1xuXHRldmVudFRpbWVzdGFtcCA6IG51bWJlcjtcblx0c2Vzc2lvbklkIDogc3RyaW5nO1xuXHRwYXJ0bmVySWQgOiBudW1iZXI7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdHdpZGdldElkIDogc3RyaW5nO1xuXHR1aWNvbmZJZCA6IG51bWJlcjtcblx0dXNlcklkIDogc3RyaW5nO1xuXHRyZWFkb25seSB1c2VySXAgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTdGF0c0ttY0V2ZW50QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTdGF0c0ttY0V2ZW50JyB9LFxuXHRcdFx0XHRjbGllbnRWZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0a21jRXZlbnRBY3Rpb25QYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGttY0V2ZW50VHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdGF0c0ttY0V2ZW50VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU3RhdHNLbWNFdmVudFR5cGUnIH0sXG5cdFx0XHRcdGV2ZW50VGltZXN0YW1wIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNlc3Npb25JZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3aWRnZXRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1aWNvbmZJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlcklwIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVN0YXRzS21jRXZlbnQnXSA9IEthbHR1cmFTdGF0c0ttY0V2ZW50OyJdfQ==