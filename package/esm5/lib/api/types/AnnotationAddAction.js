/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaAnnotation } from './KalturaAnnotation';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AnnotationAddActionArgs() { }
/** @type {?} */
AnnotationAddActionArgs.prototype.annotation;
/**
 * Build request payload for service 'annotation' action 'add'.
 *
 * Usage: Allows you to add an annotation object associated with an entry
 *
 * Server response type:         KalturaAnnotation
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'annotation' action 'add'.
 *
 * Usage: Allows you to add an annotation object associated with an entry
 *
 * Server response type:         KalturaAnnotation
 * Server failure response type: KalturaAPIException
 */
AnnotationAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(AnnotationAddAction, _super);
    function AnnotationAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAnnotation', responseConstructor: KalturaAnnotation }) || this;
    }
    /**
     * @return {?}
     */
    AnnotationAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'annotation_annotation' },
            action: { type: 'c', default: 'add' },
            annotation: { type: 'o', subTypeConstructor: KalturaCuePoint, subType: 'KalturaCuePoint' }
        });
        return result;
    };
    return AnnotationAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'annotation' action 'add'.
 *
 * Usage: Allows you to add an annotation object associated with an entry
 *
 * Server response type:         KalturaAnnotation
 * Server failure response type: KalturaAPIException
 */
export { AnnotationAddAction };
if (false) {
    /** @type {?} */
    AnnotationAddAction.prototype.annotation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbkFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQW5ub3RhdGlvbkFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBeUMsK0NBQWlDO0lBSXRFLDZCQUFZLElBQThCO2VBRXRDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUM7S0FDdEg7Ozs7SUFFUywwQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQ3JGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OEJBeENMO0VBbUJ5QyxjQUFjLEVBc0J0RCxDQUFBOzs7Ozs7Ozs7QUF0QkQsK0JBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBbm5vdGF0aW9uIH0gZnJvbSAnLi9LYWx0dXJhQW5ub3RhdGlvbic7XG5cbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludCB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50JztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFubm90YXRpb25BZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgYW5ub3RhdGlvbiA6IEthbHR1cmFDdWVQb2ludDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2Fubm90YXRpb24nIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWxsb3dzIHlvdSB0byBhZGQgYW4gYW5ub3RhdGlvbiBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIGFuIGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUFubm90YXRpb25cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFubm90YXRpb25BZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQW5ub3RhdGlvbj4ge1xuXG4gICAgYW5ub3RhdGlvbiA6IEthbHR1cmFDdWVQb2ludDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBBbm5vdGF0aW9uQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQW5ub3RhdGlvbicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQW5ub3RhdGlvbiAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYW5ub3RhdGlvbl9hbm5vdGF0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRhbm5vdGF0aW9uIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ3VlUG9pbnQsIHN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=