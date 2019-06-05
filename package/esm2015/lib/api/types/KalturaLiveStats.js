/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaLiveStats extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdGF0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVTdGF0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY2xGLE1BQU0sdUJBQXdCLFNBQVEsaUJBQWlCOzs7O0lBV25ELFlBQVksSUFBNEI7UUFFcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNqQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZVN0YXRzQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGF1ZGllbmNlPyA6IG51bWJlcjtcblx0ZHZyQXVkaWVuY2U/IDogbnVtYmVyO1xuXHRhdmdCaXRyYXRlPyA6IG51bWJlcjtcblx0YnVmZmVyVGltZT8gOiBudW1iZXI7XG5cdHBsYXlzPyA6IG51bWJlcjtcblx0c2Vjb25kc1ZpZXdlZD8gOiBudW1iZXI7XG5cdHN0YXJ0RXZlbnQ/IDogbnVtYmVyO1xuXHR0aW1lc3RhbXA/IDogRGF0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVTdGF0cyBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGF1ZGllbmNlIDogbnVtYmVyO1xuXHRkdnJBdWRpZW5jZSA6IG51bWJlcjtcblx0YXZnQml0cmF0ZSA6IG51bWJlcjtcblx0YnVmZmVyVGltZSA6IG51bWJlcjtcblx0cGxheXMgOiBudW1iZXI7XG5cdHNlY29uZHNWaWV3ZWQgOiBudW1iZXI7XG5cdHN0YXJ0RXZlbnQgOiBudW1iZXI7XG5cdHRpbWVzdGFtcCA6IERhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlU3RhdHNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVTdGF0cycgfSxcblx0XHRcdFx0YXVkaWVuY2UgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZHZyQXVkaWVuY2UgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YXZnQml0cmF0ZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRidWZmZXJUaW1lIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBsYXlzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNlY29uZHNWaWV3ZWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RhcnRFdmVudCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0aW1lc3RhbXAgOiB7IHR5cGUgOiAnZCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVTdGF0cyddID0gS2FsdHVyYUxpdmVTdGF0czsiXX0=