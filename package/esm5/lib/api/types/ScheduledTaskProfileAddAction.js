/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduledTaskProfileAddActionArgs() { }
/** @type {?} */
ScheduledTaskProfileAddActionArgs.prototype.scheduledTaskProfile;
/**
 * Build request payload for service 'scheduledTaskProfile' action 'add'.
 *
 * Usage: Add a new scheduled task profile
 *
 * Server response type:         KalturaScheduledTaskProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduledTaskProfile' action 'add'.
 *
 * Usage: Add a new scheduled task profile
 *
 * Server response type:         KalturaScheduledTaskProfile
 * Server failure response type: KalturaAPIException
 */
ScheduledTaskProfileAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduledTaskProfileAddAction, _super);
    function ScheduledTaskProfileAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaScheduledTaskProfile', responseConstructor: KalturaScheduledTaskProfile }) || this;
    }
    /**
     * @return {?}
     */
    ScheduledTaskProfileAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'scheduledtask_scheduledtaskprofile' },
            action: { type: 'c', default: 'add' },
            scheduledTaskProfile: { type: 'o', subTypeConstructor: KalturaScheduledTaskProfile, subType: 'KalturaScheduledTaskProfile' }
        });
        return result;
    };
    return ScheduledTaskProfileAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduledTaskProfile' action 'add'.
 *
 * Usage: Add a new scheduled task profile
 *
 * Server response type:         KalturaScheduledTaskProfile
 * Server failure response type: KalturaAPIException
 */
export { ScheduledTaskProfileAddAction };
if (false) {
    /** @type {?} */
    ScheduledTaskProfileAddAction.prototype.scheduledTaskProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVkVGFza1Byb2ZpbGVBZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1NjaGVkdWxlZFRhc2tQcm9maWxlQWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQW1ELHlEQUEyQztJQUkxRix1Q0FBWSxJQUF3QztlQUVoRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw2QkFBNkIsRUFBRSxtQkFBbUIsRUFBRywyQkFBMkIsRUFBRyxDQUFDO0tBQzFJOzs7O0lBRVMsb0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDcEYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7U0FDdkgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0F2Q0w7RUFrQm1ELGNBQWMsRUFzQmhFLENBQUE7Ozs7Ozs7OztBQXRCRCx5Q0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZWRUYXNrUHJvZmlsZUFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzY2hlZHVsZWRUYXNrUHJvZmlsZSA6IEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3NjaGVkdWxlZFRhc2tQcm9maWxlJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZCBhIG5ldyBzY2hlZHVsZWQgdGFzayBwcm9maWxlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZWRUYXNrUHJvZmlsZUFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZT4ge1xuXG4gICAgc2NoZWR1bGVkVGFza1Byb2ZpbGUgOiBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2NoZWR1bGVkVGFza1Byb2ZpbGVBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NjaGVkdWxlZHRhc2tfc2NoZWR1bGVkdGFza3Byb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdHNjaGVkdWxlZFRhc2tQcm9maWxlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=