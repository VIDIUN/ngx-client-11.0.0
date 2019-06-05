/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaLiveChannelSegmentBaseFilter extends KalturaRelatedFilter {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudEJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RixNQUFNLDBDQUEyQyxTQUFRLG9CQUFvQjs7OztJQWF6RSxZQUFZLElBQStDO1FBRXZELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtZQUN4RiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1Qyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywrQkFBK0IsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDaEksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsR0FBRyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50U3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdGNoYW5uZWxJZEVxdWFsPyA6IHN0cmluZztcblx0Y2hhbm5lbElkSW4/IDogc3RyaW5nO1xuXHRzdGFydFRpbWVHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRzdGFydFRpbWVMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyIHtcblxuICAgIGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0c3RhdHVzRXF1YWwgOiBLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50U3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0Y2hhbm5lbElkRXF1YWwgOiBzdHJpbmc7XG5cdGNoYW5uZWxJZEluIDogc3RyaW5nO1xuXHRzdGFydFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHN0YXJ0VGltZUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlQ2hhbm5lbFNlZ21lbnRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudFN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbElkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2hhbm5lbElkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhcnRUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXJ0VGltZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhTGl2ZUNoYW5uZWxTZWdtZW50QmFzZUZpbHRlciddID0gS2FsdHVyYUxpdmVDaGFubmVsU2VnbWVudEJhc2VGaWx0ZXI7Il19