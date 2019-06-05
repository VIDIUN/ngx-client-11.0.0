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
export function ScheduledTaskProfileUpdateActionArgs() { }
/** @type {?} */
ScheduledTaskProfileUpdateActionArgs.prototype.id;
/** @type {?} */
ScheduledTaskProfileUpdateActionArgs.prototype.scheduledTaskProfile;
/**
 * Build request payload for service 'scheduledTaskProfile' action 'update'.
 *
 * Usage: Update an existing scheduled task profile
 *
 * Server response type:         KalturaScheduledTaskProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduledTaskProfile' action 'update'.
 *
 * Usage: Update an existing scheduled task profile
 *
 * Server response type:         KalturaScheduledTaskProfile
 * Server failure response type: KalturaAPIException
 */
ScheduledTaskProfileUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduledTaskProfileUpdateAction, _super);
    function ScheduledTaskProfileUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaScheduledTaskProfile', responseConstructor: KalturaScheduledTaskProfile }) || this;
    }
    /**
     * @return {?}
     */
    ScheduledTaskProfileUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'scheduledtask_scheduledtaskprofile' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            scheduledTaskProfile: { type: 'o', subTypeConstructor: KalturaScheduledTaskProfile, subType: 'KalturaScheduledTaskProfile' }
        });
        return result;
    };
    return ScheduledTaskProfileUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduledTaskProfile' action 'update'.
 *
 * Usage: Update an existing scheduled task profile
 *
 * Server response type:         KalturaScheduledTaskProfile
 * Server failure response type: KalturaAPIException
 */
export { ScheduledTaskProfileUpdateAction };
if (false) {
    /** @type {?} */
    ScheduledTaskProfileUpdateAction.prototype.id;
    /** @type {?} */
    ScheduledTaskProfileUpdateAction.prototype.scheduledTaskProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVkVGFza1Byb2ZpbGVVcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1NjaGVkdWxlZFRhc2tQcm9maWxlVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBc0QsNERBQTJDO0lBSzdGLDBDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDZCQUE2QixFQUFFLG1CQUFtQixFQUFHLDJCQUEyQixFQUFHLENBQUM7S0FDMUk7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUNwRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQ3ZILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBMUNMO0VBbUJzRCxjQUFjLEVBd0JuRSxDQUFBOzs7Ozs7Ozs7QUF4QkQsNENBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZWR1bGVkVGFza1Byb2ZpbGVVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdHNjaGVkdWxlZFRhc2tQcm9maWxlIDogS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2NoZWR1bGVkVGFza1Byb2ZpbGUnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGFuIGV4aXN0aW5nIHNjaGVkdWxlZCB0YXNrIHByb2ZpbGVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNjaGVkdWxlZFRhc2tQcm9maWxlVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0c2NoZWR1bGVkVGFza1Byb2ZpbGUgOiBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2NoZWR1bGVkVGFza1Byb2ZpbGVVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NjaGVkdWxlZHRhc2tfc2NoZWR1bGVkdGFza3Byb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNjaGVkdWxlZFRhc2tQcm9maWxlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=