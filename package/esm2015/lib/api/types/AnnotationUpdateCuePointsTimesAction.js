/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class AnnotationUpdateCuePointsTimesAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaCuePoint', responseConstructor: KalturaCuePoint });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'annotation_annotation' },
            action: { type: 'c', default: 'updateCuePointsTimes' },
            id: { type: 's' },
            startTime: { type: 'n' },
            endTime: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    AnnotationUpdateCuePointsTimesAction.prototype.id;
    /** @type {?} */
    AnnotationUpdateCuePointsTimesAction.prototype.startTime;
    /** @type {?} */
    AnnotationUpdateCuePointsTimesAction.prototype.endTime;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblVwZGF0ZUN1ZVBvaW50c1RpbWVzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Bbm5vdGF0aW9uVXBkYXRlQ3VlUG9pbnRzVGltZXNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RSxNQUFNLDJDQUE0QyxTQUFRLGNBQStCOzs7O0lBTXJGLFlBQVksSUFBK0M7UUFFdkQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGlCQUFpQixFQUFFLG1CQUFtQixFQUFHLGVBQWUsRUFBRyxDQUFDLENBQUM7S0FDbkg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQ3pELEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludCB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5ub3RhdGlvblVwZGF0ZUN1ZVBvaW50c1RpbWVzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogc3RyaW5nO1xuXHRzdGFydFRpbWUgOiBudW1iZXI7XG5cdGVuZFRpbWU/IDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYW5ub3RhdGlvbicgYWN0aW9uICd1cGRhdGVDdWVQb2ludHNUaW1lcycuXG4gKlxuICogXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUN1ZVBvaW50XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uVXBkYXRlQ3VlUG9pbnRzVGltZXNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQ3VlUG9pbnQ+IHtcblxuICAgIGlkIDogc3RyaW5nO1xuXHRzdGFydFRpbWUgOiBudW1iZXI7XG5cdGVuZFRpbWUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQW5ub3RhdGlvblVwZGF0ZUN1ZVBvaW50c1RpbWVzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ3VlUG9pbnQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUN1ZVBvaW50ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhbm5vdGF0aW9uX2Fubm90YXRpb24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGVDdWVQb2ludHNUaW1lcycgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhcnRUaW1lIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVuZFRpbWUgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19