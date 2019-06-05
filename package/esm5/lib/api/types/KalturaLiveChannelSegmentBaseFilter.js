/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveChannelSegmentStatus } from './KalturaLiveChannelSegmentStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaLiveChannelSegmentBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaLiveChannelSegmentBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaLiveChannelSegmentBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaLiveChannelSegmentBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaLiveChannelSegmentBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaLiveChannelSegmentBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaLiveChannelSegmentBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaLiveChannelSegmentBaseFilterArgs.prototype.channelIdEqual;
/** @type {?|undefined} */
KalturaLiveChannelSegmentBaseFilterArgs.prototype.channelIdIn;
/** @type {?|undefined} */
KalturaLiveChannelSegmentBaseFilterArgs.prototype.startTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaLiveChannelSegmentBaseFilterArgs.prototype.startTimeLessThanOrEqual;
var KalturaLiveChannelSegmentBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveChannelSegmentBaseFilter, _super);
    function KalturaLiveChannelSegmentBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveChannelSegmentBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveChannelSegmentBaseFilter' },
            createdAtGreaterThanOrEqual: { type: 'n' },
            createdAtLessThanOrEqual: { type: 'n' },
            updatedAtGreaterThanOrEqual: { type: 'n' },
            updatedAtLessThanOrEqual: { type: 'n' },
            statusEqual: { type: 'es', subTypeConstructor: KalturaLiveChannelSegmentStatus, subType: 'KalturaLiveChannelSegmentStatus' },
            statusIn: { type: 's' },
            channelIdEqual: { type: 's' },
            channelIdIn: { type: 's' },
            startTimeGreaterThanOrEqual: { type: 'n' },
            startTimeLessThanOrEqual: { type: 'n' }
        });
        return result;
    };
    return KalturaLiveChannelSegmentBaseFilter;
}(KalturaRelatedFilter));
export { KalturaLiveChannelSegmentBaseFilter };
if (false) {
    /** @type {?} */
    KalturaLiveChannelSegmentBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaLiveChannelSegmentBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaLiveChannelSegmentBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaLiveChannelSegmentBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaLiveChannelSegmentBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaLiveChannelSegmentBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaLiveChannelSegmentBaseFilter.prototype.channelIdEqual;
    /** @type {?} */
    KalturaLiveChannelSegmentBaseFilter.prototype.channelIdIn;
    /** @type {?} */
    KalturaLiveChannelSegmentBaseFilter.prototype.startTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaLiveChannelSegmentBaseFilter.prototype.startTimeLessThanOrEqual;
}
typesMappingStorage['KalturaLiveChannelSegmentBaseFilter'] = KalturaLiveChannelSegmentBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEYsSUFBQTtJQUF5RCwrREFBb0I7SUFhekUsNkNBQVksSUFBK0M7ZUFFdkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywwREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtZQUN4RiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywrQkFBK0IsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDaEksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhDQXpETDtFQW1CeUQsb0JBQW9CLEVBdUM1RSxDQUFBO0FBdkNELCtDQXVDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQ0FBcUMsQ0FBQyxHQUFHLG1DQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIsIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVJlbGF0ZWRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3Mge1xuICAgIGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHN0YXR1c0VxdWFsPyA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0Y2hhbm5lbElkRXF1YWw/IDogc3RyaW5nO1xuXHRjaGFubmVsSWRJbj8gOiBzdHJpbmc7XG5cdHN0YXJ0VGltZUdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHN0YXJ0VGltZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgY3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRTdGF0dXM7XG5cdHN0YXR1c0luIDogc3RyaW5nO1xuXHRjaGFubmVsSWRFcXVhbCA6IHN0cmluZztcblx0Y2hhbm5lbElkSW4gOiBzdHJpbmc7XG5cdHN0YXJ0VGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0c3RhcnRUaW1lTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50U3RhdHVzJyB9LFxuXHRcdFx0XHRzdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsSWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjaGFubmVsSWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGFydFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RhcnRUaW1lTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRCYXNlRmlsdGVyJ10gPSBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50QmFzZUZpbHRlcjsiXX0=