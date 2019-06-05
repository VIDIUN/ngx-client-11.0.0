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
export function CuePointCloneActionArgs() { }
/** @type {?} */
CuePointCloneActionArgs.prototype.id;
/** @type {?} */
CuePointCloneActionArgs.prototype.entryId;
/**
 * Build request payload for service 'cuePoint' action 'clone'.
 *
 * Usage: Clone cuePoint with id to given entry
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'cuePoint' action 'clone'.
 *
 * Usage: Clone cuePoint with id to given entry
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
CuePointCloneAction = /** @class */ (function (_super) {
    tslib_1.__extends(CuePointCloneAction, _super);
    function CuePointCloneAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCuePoint', responseConstructor: KalturaCuePoint }) || this;
    }
    /**
     * @return {?}
     */
    CuePointCloneAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'cuepoint_cuepoint' },
            action: { type: 'c', default: 'clone' },
            id: { type: 's' },
            entryId: { type: 's' }
        });
        return result;
    };
    return CuePointCloneAction;
}(KalturaRequest));
/**
 * Build request payload for service 'cuePoint' action 'clone'.
 *
 * Usage: Clone cuePoint with id to given entry
 *
 * Server response type:         KalturaCuePoint
 * Server failure response type: KalturaAPIException
 */
export { CuePointCloneAction };
if (false) {
    /** @type {?} */
    CuePointCloneAction.prototype.id;
    /** @type {?} */
    CuePointCloneAction.prototype.entryId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VlUG9pbnRDbG9uZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ3VlUG9pbnRDbG9uZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUF5QywrQ0FBK0I7SUFLcEUsNkJBQVksSUFBOEI7ZUFFdEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUM7S0FDbEg7Ozs7SUFFUywwQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDMUMsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs4QkExQ0w7RUFtQnlDLGNBQWMsRUF3QnRELENBQUE7Ozs7Ozs7OztBQXhCRCwrQkF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUN1ZVBvaW50IH0gZnJvbSAnLi9LYWx0dXJhQ3VlUG9pbnQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDdWVQb2ludENsb25lQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogc3RyaW5nO1xuXHRlbnRyeUlkIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY3VlUG9pbnQnIGFjdGlvbiAnY2xvbmUnLlxuICpcbiAqIFVzYWdlOiBDbG9uZSBjdWVQb2ludCB3aXRoIGlkIHRvIGdpdmVuIGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUN1ZVBvaW50XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDdWVQb2ludENsb25lQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUN1ZVBvaW50PiB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0ZW50cnlJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBDdWVQb2ludENsb25lQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ3VlUG9pbnQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUN1ZVBvaW50ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjdWVwb2ludF9jdWVwb2ludCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Nsb25lJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==