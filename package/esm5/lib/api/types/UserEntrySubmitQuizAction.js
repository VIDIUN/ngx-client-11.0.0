/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaQuizUserEntry } from './KalturaQuizUserEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserEntrySubmitQuizActionArgs() { }
/** @type {?} */
UserEntrySubmitQuizActionArgs.prototype.id;
/**
 * Build request payload for service 'userEntry' action 'submitQuiz'.
 *
 * Usage: Submits the quiz so that it's status will be submitted and calculates the score for the quiz
 *
 * Server response type:         KalturaQuizUserEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'userEntry' action 'submitQuiz'.
 *
 * Usage: Submits the quiz so that it's status will be submitted and calculates the score for the quiz
 *
 * Server response type:         KalturaQuizUserEntry
 * Server failure response type: KalturaAPIException
 */
UserEntrySubmitQuizAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserEntrySubmitQuizAction, _super);
    function UserEntrySubmitQuizAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaQuizUserEntry', responseConstructor: KalturaQuizUserEntry }) || this;
    }
    /**
     * @return {?}
     */
    UserEntrySubmitQuizAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'userentry' },
            action: { type: 'c', default: 'submitQuiz' },
            id: { type: 'n' }
        });
        return result;
    };
    return UserEntrySubmitQuizAction;
}(KalturaRequest));
/**
 * Build request payload for service 'userEntry' action 'submitQuiz'.
 *
 * Usage: Submits the quiz so that it's status will be submitted and calculates the score for the quiz
 *
 * Server response type:         KalturaQuizUserEntry
 * Server failure response type: KalturaAPIException
 */
export { UserEntrySubmitQuizAction };
if (false) {
    /** @type {?} */
    UserEntrySubmitQuizAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckVudHJ5U3VibWl0UXVpekFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVXNlckVudHJ5U3VibWl0UXVpekFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUErQyxxREFBb0M7SUFJL0UsbUNBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUcsb0JBQW9CLEVBQUcsQ0FBQztLQUM1SDs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDL0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNWLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBdkNMO0VBa0IrQyxjQUFjLEVBc0I1RCxDQUFBOzs7Ozs7Ozs7QUF0QkQscUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFRdWl6VXNlckVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhUXVpelVzZXJFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJFbnRyeVN1Ym1pdFF1aXpBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd1c2VyRW50cnknIGFjdGlvbiAnc3VibWl0UXVpeicuXG4gKlxuICogVXNhZ2U6IFN1Ym1pdHMgdGhlIHF1aXogc28gdGhhdCBpdCdzIHN0YXR1cyB3aWxsIGJlIHN1Ym1pdHRlZCBhbmQgY2FsY3VsYXRlcyB0aGUgc2NvcmUgZm9yIHRoZSBxdWl6XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVF1aXpVc2VyRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJFbnRyeVN1Ym1pdFF1aXpBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUXVpelVzZXJFbnRyeT4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVXNlckVudHJ5U3VibWl0UXVpekFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVF1aXpVc2VyRW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVF1aXpVc2VyRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VzZXJlbnRyeScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3N1Ym1pdFF1aXonIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==