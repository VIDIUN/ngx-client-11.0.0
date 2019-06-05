/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUserEntry } from './KalturaUserEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserEntryAddActionArgs() { }
/** @type {?} */
UserEntryAddActionArgs.prototype.userEntry;
/**
 * Build request payload for service 'userEntry' action 'add'.
 *
 * Usage: Adds a user_entry to the Kaltura DB
 *
 * Server response type:         KalturaUserEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'userEntry' action 'add'.
 *
 * Usage: Adds a user_entry to the Kaltura DB
 *
 * Server response type:         KalturaUserEntry
 * Server failure response type: KalturaAPIException
 */
UserEntryAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserEntryAddAction, _super);
    function UserEntryAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaUserEntry', responseConstructor: KalturaUserEntry }) || this;
    }
    /**
     * @return {?}
     */
    UserEntryAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'userentry' },
            action: { type: 'c', default: 'add' },
            userEntry: { type: 'o', subTypeConstructor: KalturaUserEntry, subType: 'KalturaUserEntry' }
        });
        return result;
    };
    return UserEntryAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'userEntry' action 'add'.
 *
 * Usage: Adds a user_entry to the Kaltura DB
 *
 * Server response type:         KalturaUserEntry
 * Server failure response type: KalturaAPIException
 */
export { UserEntryAddAction };
if (false) {
    /** @type {?} */
    UserEntryAddAction.prototype.userEntry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckVudHJ5QWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Vc2VyRW50cnlBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBd0MsOENBQWdDO0lBSXBFLDRCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGtCQUFrQixFQUFFLG1CQUFtQixFQUFHLGdCQUFnQixFQUFHLENBQUM7S0FDcEg7Ozs7SUFFUyx5Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDM0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkJBdkNMO0VBa0J3QyxjQUFjLEVBc0JyRCxDQUFBOzs7Ozs7Ozs7QUF0QkQsOEJBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyRW50cnkgfSBmcm9tICcuL0thbHR1cmFVc2VyRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRW50cnlBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgdXNlckVudHJ5IDogS2FsdHVyYVVzZXJFbnRyeTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VzZXJFbnRyeScgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBZGRzIGEgdXNlcl9lbnRyeSB0byB0aGUgS2FsdHVyYSBEQlxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFVc2VyRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJFbnRyeUFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFVc2VyRW50cnk+IHtcblxuICAgIHVzZXJFbnRyeSA6IEthbHR1cmFVc2VyRW50cnk7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVXNlckVudHJ5QWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVXNlckVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VzZXJlbnRyeScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0dXNlckVudHJ5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVXNlckVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyRW50cnknIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==