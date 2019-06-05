/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaLiveStatsArgs() { }
/** @type {?|undefined} */
KalturaLiveStatsArgs.prototype.audience;
/** @type {?|undefined} */
KalturaLiveStatsArgs.prototype.dvrAudience;
/** @type {?|undefined} */
KalturaLiveStatsArgs.prototype.avgBitrate;
/** @type {?|undefined} */
KalturaLiveStatsArgs.prototype.bufferTime;
/** @type {?|undefined} */
KalturaLiveStatsArgs.prototype.plays;
/** @type {?|undefined} */
KalturaLiveStatsArgs.prototype.secondsViewed;
/** @type {?|undefined} */
KalturaLiveStatsArgs.prototype.startEvent;
/** @type {?|undefined} */
KalturaLiveStatsArgs.prototype.timestamp;
var KalturaLiveStats = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStats, _super);
    function KalturaLiveStats(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStats.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStats' },
            audience: { type: 'n' },
            dvrAudience: { type: 'n' },
            avgBitrate: { type: 'n' },
            bufferTime: { type: 'n' },
            plays: { type: 'n' },
            secondsViewed: { type: 'n' },
            startEvent: { type: 'n' },
            timestamp: { type: 'd' }
        });
        return result;
    };
    return KalturaLiveStats;
}(KalturaObjectBase));
export { KalturaLiveStats };
if (false) {
    /** @type {?} */
    KalturaLiveStats.prototype.audience;
    /** @type {?} */
    KalturaLiveStats.prototype.dvrAudience;
    /** @type {?} */
    KalturaLiveStats.prototype.avgBitrate;
    /** @type {?} */
    KalturaLiveStats.prototype.bufferTime;
    /** @type {?} */
    KalturaLiveStats.prototype.plays;
    /** @type {?} */
    KalturaLiveStats.prototype.secondsViewed;
    /** @type {?} */
    KalturaLiveStats.prototype.startEvent;
    /** @type {?} */
    KalturaLiveStats.prototype.timestamp;
}
typesMappingStorage['KalturaLiveStats'] = KalturaLiveStats;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdGF0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVTdGF0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNsRixJQUFBO0lBQXNDLDRDQUFpQjtJQVduRCwwQkFBWSxJQUE0QjtlQUVwQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHVDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzJCQWxETDtFQWdCc0MsaUJBQWlCLEVBbUN0RCxDQUFBO0FBbkNELDRCQW1DQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlU3RhdHNBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgYXVkaWVuY2U/IDogbnVtYmVyO1xuXHRkdnJBdWRpZW5jZT8gOiBudW1iZXI7XG5cdGF2Z0JpdHJhdGU/IDogbnVtYmVyO1xuXHRidWZmZXJUaW1lPyA6IG51bWJlcjtcblx0cGxheXM/IDogbnVtYmVyO1xuXHRzZWNvbmRzVmlld2VkPyA6IG51bWJlcjtcblx0c3RhcnRFdmVudD8gOiBudW1iZXI7XG5cdHRpbWVzdGFtcD8gOiBEYXRlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZVN0YXRzIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgYXVkaWVuY2UgOiBudW1iZXI7XG5cdGR2ckF1ZGllbmNlIDogbnVtYmVyO1xuXHRhdmdCaXRyYXRlIDogbnVtYmVyO1xuXHRidWZmZXJUaW1lIDogbnVtYmVyO1xuXHRwbGF5cyA6IG51bWJlcjtcblx0c2Vjb25kc1ZpZXdlZCA6IG51bWJlcjtcblx0c3RhcnRFdmVudCA6IG51bWJlcjtcblx0dGltZXN0YW1wIDogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVTdGF0c0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVN0YXRzJyB9LFxuXHRcdFx0XHRhdWRpZW5jZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdnJBdWRpZW5jZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdmdCaXRyYXRlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJ1ZmZlclRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGxheXMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2Vjb25kc1ZpZXdlZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdGFydEV2ZW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRpbWVzdGFtcCA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZVN0YXRzJ10gPSBLYWx0dXJhTGl2ZVN0YXRzOyJdfQ==