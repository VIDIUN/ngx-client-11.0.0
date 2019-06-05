/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaStatsKmcEvent = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaStatsKmcEvent, _super);
    function KalturaStatsKmcEvent(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaStatsKmcEvent.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaStatsKmcEvent;
}(KalturaObjectBase));
export { KalturaStatsKmcEvent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN0YXRzS21jRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTdGF0c0ttY0V2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCbEYsSUFBQTtJQUEwQyxnREFBaUI7SUFjdkQsOEJBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RSxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUNuSCxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUMvQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQTNETDtFQW1CMEMsaUJBQWlCLEVBeUMxRCxDQUFBO0FBekNELGdDQXlDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsb0JBQW9CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN0YXRzS21jRXZlbnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhU3RhdHNLbWNFdmVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTdGF0c0ttY0V2ZW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGNsaWVudFZlcj8gOiBzdHJpbmc7XG5cdGttY0V2ZW50QWN0aW9uUGF0aD8gOiBzdHJpbmc7XG5cdGttY0V2ZW50VHlwZT8gOiBLYWx0dXJhU3RhdHNLbWNFdmVudFR5cGU7XG5cdGV2ZW50VGltZXN0YW1wPyA6IG51bWJlcjtcblx0c2Vzc2lvbklkPyA6IHN0cmluZztcblx0cGFydG5lcklkPyA6IG51bWJlcjtcblx0ZW50cnlJZD8gOiBzdHJpbmc7XG5cdHdpZGdldElkPyA6IHN0cmluZztcblx0dWljb25mSWQ/IDogbnVtYmVyO1xuXHR1c2VySWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU3RhdHNLbWNFdmVudCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGNsaWVudFZlciA6IHN0cmluZztcblx0a21jRXZlbnRBY3Rpb25QYXRoIDogc3RyaW5nO1xuXHRrbWNFdmVudFR5cGUgOiBLYWx0dXJhU3RhdHNLbWNFdmVudFR5cGU7XG5cdGV2ZW50VGltZXN0YW1wIDogbnVtYmVyO1xuXHRzZXNzaW9uSWQgOiBzdHJpbmc7XG5cdHBhcnRuZXJJZCA6IG51bWJlcjtcblx0ZW50cnlJZCA6IHN0cmluZztcblx0d2lkZ2V0SWQgOiBzdHJpbmc7XG5cdHVpY29uZklkIDogbnVtYmVyO1xuXHR1c2VySWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHVzZXJJcCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVN0YXRzS21jRXZlbnRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVN0YXRzS21jRXZlbnQnIH0sXG5cdFx0XHRcdGNsaWVudFZlciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRrbWNFdmVudEFjdGlvblBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0a21jRXZlbnRUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0YXRzS21jRXZlbnRUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTdGF0c0ttY0V2ZW50VHlwZScgfSxcblx0XHRcdFx0ZXZlbnRUaW1lc3RhbXAgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2Vzc2lvbklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHdpZGdldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVpY29uZklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySXAgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3RhdHNLbWNFdmVudCddID0gS2FsdHVyYVN0YXRzS21jRXZlbnQ7Il19