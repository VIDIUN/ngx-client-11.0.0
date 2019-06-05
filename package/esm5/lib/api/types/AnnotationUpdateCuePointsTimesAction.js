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
export function AnnotationUpdateCuePointsTimesActionArgs() { }
/** @type {?} */
AnnotationUpdateCuePointsTimesActionArgs.prototype.id;
/** @type {?} */
AnnotationUpdateCuePointsTimesActionArgs.prototype.startTime;
/** @type {?|undefined} */
AnnotationUpdateCuePointsTimesActionArgs.prototype.endTime;
/**
 * Build request payload for service 'annotation' action 'updateCuePointsTimes'.
 *
 *
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'annotation' action 'updateCuePointsTimes'.
 *
 *
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
AnnotationUpdateCuePointsTimesAction = /** @class */ (function (_super) {
    tslib_1.__extends(AnnotationUpdateCuePointsTimesAction, _super);
    function AnnotationUpdateCuePointsTimesAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCuePoint', responseConstructor: KalturaCuePoint }) || this;
    }
    /**
     * @return {?}
     */
    AnnotationUpdateCuePointsTimesAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'annotation_annotation' },
            action: { type: 'c', default: 'updateCuePointsTimes' },
            id: { type: 's' },
            startTime: { type: 'n' },
            endTime: { type: 'n' }
        });
        return result;
    };
    return AnnotationUpdateCuePointsTimesAction;
}(KalturaRequest));
/**
 * Build request payload for service 'annotation' action 'updateCuePointsTimes'.
 *
 *
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
export { AnnotationUpdateCuePointsTimesAction };
if (false) {
    /** @type {?} */
    AnnotationUpdateCuePointsTimesAction.prototype.id;
    /** @type {?} */
    AnnotationUpdateCuePointsTimesAction.prototype.startTime;
    /** @type {?} */
    AnnotationUpdateCuePointsTimesAction.prototype.endTime;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblVwZGF0ZUN1ZVBvaW50c1RpbWVzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Bbm5vdGF0aW9uVXBkYXRlQ3VlUG9pbnRzVGltZXNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEU7Ozs7Ozs7O0FBQUE7SUFBMEQsZ0VBQStCO0lBTXJGLDhDQUFZLElBQStDO2VBRXZELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGlCQUFpQixFQUFFLG1CQUFtQixFQUFHLGVBQWUsRUFBRyxDQUFDO0tBQ2xIOzs7O0lBRVMsMkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDekQsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytDQTdDTDtFQW9CMEQsY0FBYyxFQTBCdkUsQ0FBQTs7Ozs7Ozs7O0FBMUJELGdEQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnQgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFubm90YXRpb25VcGRhdGVDdWVQb2ludHNUaW1lc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcblx0c3RhcnRUaW1lIDogbnVtYmVyO1xuXHRlbmRUaW1lPyA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2Fubm90YXRpb24nIGFjdGlvbiAndXBkYXRlQ3VlUG9pbnRzVGltZXMnLlxuICpcbiAqIFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDdWVQb2ludFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvblVwZGF0ZUN1ZVBvaW50c1RpbWVzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUN1ZVBvaW50PiB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0c3RhcnRUaW1lIDogbnVtYmVyO1xuXHRlbmRUaW1lIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEFubm90YXRpb25VcGRhdGVDdWVQb2ludHNUaW1lc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDdWVQb2ludCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYW5ub3RhdGlvbl9hbm5vdGF0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlQ3VlUG9pbnRzVGltZXMnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXJ0VGltZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbmRUaW1lIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==