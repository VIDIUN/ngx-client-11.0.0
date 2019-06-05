/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CuePointUpdateCuePointsTimesActionArgs() { }
/** @type {?} */
CuePointUpdateCuePointsTimesActionArgs.prototype.id;
/** @type {?} */
CuePointUpdateCuePointsTimesActionArgs.prototype.startTime;
/** @type {?|undefined} */
CuePointUpdateCuePointsTimesActionArgs.prototype.endTime;
/**
 * Build request payload for service 'cuePoint' action 'updateCuePointsTimes'.
 *
 *
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'cuePoint' action 'updateCuePointsTimes'.
 *
 *
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
CuePointUpdateCuePointsTimesAction = /** @class */ (function (_super) {
    tslib_1.__extends(CuePointUpdateCuePointsTimesAction, _super);
    function CuePointUpdateCuePointsTimesAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCuePoint', responseConstructor: KalturaCuePoint }) || this;
    }
    /**
     * @return {?}
     */
    CuePointUpdateCuePointsTimesAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'cuepoint_cuepoint' },
            action: { type: 'c', default: 'updateCuePointsTimes' },
            id: { type: 's' },
            startTime: { type: 'n' },
            endTime: { type: 'n' }
        });
        return result;
    };
    return CuePointUpdateCuePointsTimesAction;
}(KalturaRequest));
/**
 * Build request payload for service 'cuePoint' action 'updateCuePointsTimes'.
 *
 *
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
export { CuePointUpdateCuePointsTimesAction };
if (false) {
    /** @type {?} */
    CuePointUpdateCuePointsTimesAction.prototype.id;
    /** @type {?} */
    CuePointUpdateCuePointsTimesAction.prototype.startTime;
    /** @type {?} */
    CuePointUpdateCuePointsTimesAction.prototype.endTime;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VlUG9pbnRVcGRhdGVDdWVQb2ludHNUaW1lc0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ3VlUG9pbnRVcGRhdGVDdWVQb2ludHNUaW1lc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUF3RCw4REFBK0I7SUFNbkYsNENBQVksSUFBNkM7ZUFFckQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUM7S0FDbEg7Ozs7SUFFUyx5REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RCxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkNBN0NMO0VBb0J3RCxjQUFjLEVBMEJyRSxDQUFBOzs7Ozs7Ozs7QUExQkQsOENBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludCB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VlUG9pbnRVcGRhdGVDdWVQb2ludHNUaW1lc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcblx0c3RhcnRUaW1lIDogbnVtYmVyO1xuXHRlbmRUaW1lPyA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2N1ZVBvaW50JyBhY3Rpb24gJ3VwZGF0ZUN1ZVBvaW50c1RpbWVzJy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQ3VlUG9pbnRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEN1ZVBvaW50VXBkYXRlQ3VlUG9pbnRzVGltZXNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQ3VlUG9pbnQ+IHtcblxuICAgIGlkIDogc3RyaW5nO1xuXHRzdGFydFRpbWUgOiBudW1iZXI7XG5cdGVuZFRpbWUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ3VlUG9pbnRVcGRhdGVDdWVQb2ludHNUaW1lc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDdWVQb2ludCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY3VlcG9pbnRfY3VlcG9pbnQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGVDdWVQb2ludHNUaW1lcycgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhcnRUaW1lIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVuZFRpbWUgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19