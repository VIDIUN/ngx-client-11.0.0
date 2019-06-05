/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaQuiz } from './KalturaQuiz';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function QuizAddActionArgs() { }
/** @type {?} */
QuizAddActionArgs.prototype.entryId;
/** @type {?} */
QuizAddActionArgs.prototype.quiz;
/**
 * Build request payload for service 'quiz' action 'add'.
 *
 * Usage: Allows to add a quiz to an entry
 *
 * Server response type:         KalturaQuiz
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'quiz' action 'add'.
 *
 * Usage: Allows to add a quiz to an entry
 *
 * Server response type:         KalturaQuiz
 * Server failure response type: KalturaAPIException
 */
QuizAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(QuizAddAction, _super);
    function QuizAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaQuiz', responseConstructor: KalturaQuiz }) || this;
    }
    /**
     * @return {?}
     */
    QuizAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'quiz_quiz' },
            action: { type: 'c', default: 'add' },
            entryId: { type: 's' },
            quiz: { type: 'o', subTypeConstructor: KalturaQuiz, subType: 'KalturaQuiz' }
        });
        return result;
    };
    return QuizAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'quiz' action 'add'.
 *
 * Usage: Allows to add a quiz to an entry
 *
 * Server response type:         KalturaQuiz
 * Server failure response type: KalturaAPIException
 */
export { QuizAddAction };
if (false) {
    /** @type {?} */
    QuizAddAction.prototype.entryId;
    /** @type {?} */
    QuizAddAction.prototype.quiz;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpekFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvUXVpekFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBbUMseUNBQTJCO0lBSzFELHVCQUFZLElBQXdCO2VBRWhDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGFBQWEsRUFBRSxtQkFBbUIsRUFBRyxXQUFXLEVBQUcsQ0FBQztLQUMxRzs7OztJQUVTLG9DQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLFdBQVcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1NBQ3ZFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0JBMUNMO0VBbUJtQyxjQUFjLEVBd0JoRCxDQUFBOzs7Ozs7Ozs7QUF4QkQseUJBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFRdWl6IH0gZnJvbSAnLi9LYWx0dXJhUXVpeic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1aXpBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cXVpeiA6IEthbHR1cmFRdWl6O1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncXVpeicgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBbGxvd3MgdG8gYWRkIGEgcXVpeiB0byBhbiBlbnRyeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFRdWl6XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWl6QWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVF1aXo+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHF1aXogOiBLYWx0dXJhUXVpejtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBRdWl6QWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUXVpeicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUXVpeiAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncXVpel9xdWl6JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHF1aXogOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFRdWl6LCBzdWJUeXBlIDogJ0thbHR1cmFRdWl6JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=