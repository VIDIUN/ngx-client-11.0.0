/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCuePointStatus } from './KalturaCuePointStatus';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AnnotationUpdateStatusActionArgs() { }
/** @type {?} */
AnnotationUpdateStatusActionArgs.prototype.id;
/** @type {?} */
AnnotationUpdateStatusActionArgs.prototype.status;
/**
 * Build request payload for service 'annotation' action 'updateStatus'.
 *
 * Usage: Update cuePoint status by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'annotation' action 'updateStatus'.
 *
 * Usage: Update cuePoint status by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
AnnotationUpdateStatusAction = /** @class */ (function (_super) {
    tslib_1.__extends(AnnotationUpdateStatusAction, _super);
    function AnnotationUpdateStatusAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    AnnotationUpdateStatusAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'annotation_annotation' },
            action: { type: 'c', default: 'updateStatus' },
            id: { type: 's' },
            status: { type: 'en', subTypeConstructor: KalturaCuePointStatus, subType: 'KalturaCuePointStatus' }
        });
        return result;
    };
    return AnnotationUpdateStatusAction;
}(KalturaRequest));
/**
 * Build request payload for service 'annotation' action 'updateStatus'.
 *
 * Usage: Update cuePoint status by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { AnnotationUpdateStatusAction };
if (false) {
    /** @type {?} */
    AnnotationUpdateStatusAction.prototype.id;
    /** @type {?} */
    AnnotationUpdateStatusAction.prototype.status;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblVwZGF0ZVN0YXR1c0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQW5ub3RhdGlvblVwZGF0ZVN0YXR1c0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQWtELHdEQUFvQjtJQUtsRSxzQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtTQUM5RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQTNDTDtFQW9Ca0QsY0FBYyxFQXdCL0QsQ0FBQTs7Ozs7Ozs7O0FBeEJELHdDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnRTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5ub3RhdGlvblVwZGF0ZVN0YXR1c0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcblx0c3RhdHVzIDogS2FsdHVyYUN1ZVBvaW50U3RhdHVzO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYW5ub3RhdGlvbicgYWN0aW9uICd1cGRhdGVTdGF0dXMnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgY3VlUG9pbnQgc3RhdHVzIGJ5IGlkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgdm9pZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvblVwZGF0ZVN0YXR1c0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PHZvaWQ+IHtcblxuICAgIGlkIDogc3RyaW5nO1xuXHRzdGF0dXMgOiBLYWx0dXJhQ3VlUG9pbnRTdGF0dXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQW5ub3RhdGlvblVwZGF0ZVN0YXR1c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3YnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYW5ub3RhdGlvbl9hbm5vdGF0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlU3RhdHVzJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ3VlUG9pbnRTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUN1ZVBvaW50U3RhdHVzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=