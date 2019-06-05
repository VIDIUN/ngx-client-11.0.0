/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaGroupUser } from './KalturaGroupUser';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function GroupUserAddActionArgs() { }
/** @type {?} */
GroupUserAddActionArgs.prototype.groupUser;
/**
 * Build request payload for service 'groupUser' action 'add'.
 *
 * Usage: Add new GroupUser
 *
 * Server response type:         KalturaGroupUser
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'groupUser' action 'add'.
 *
 * Usage: Add new GroupUser
 *
 * Server response type:         KalturaGroupUser
 * Server failure response type: KalturaAPIException
 */
GroupUserAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(GroupUserAddAction, _super);
    function GroupUserAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaGroupUser', responseConstructor: KalturaGroupUser }) || this;
    }
    /**
     * @return {?}
     */
    GroupUserAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'groupuser' },
            action: { type: 'c', default: 'add' },
            groupUser: { type: 'o', subTypeConstructor: KalturaGroupUser, subType: 'KalturaGroupUser' }
        });
        return result;
    };
    return GroupUserAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'groupUser' action 'add'.
 *
 * Usage: Add new GroupUser
 *
 * Server response type:         KalturaGroupUser
 * Server failure response type: KalturaAPIException
 */
export { GroupUserAddAction };
if (false) {
    /** @type {?} */
    GroupUserAddAction.prototype.groupUser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBVc2VyQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Hcm91cFVzZXJBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBd0MsOENBQWdDO0lBSXBFLDRCQUFZLElBQTZCO2VBRXJDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGtCQUFrQixFQUFFLG1CQUFtQixFQUFHLGdCQUFnQixFQUFHLENBQUM7S0FDcEg7Ozs7SUFFUyx5Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDM0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NkJBdkNMO0VBa0J3QyxjQUFjLEVBc0JyRCxDQUFBOzs7Ozs7Ozs7QUF0QkQsOEJBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHcm91cFVzZXIgfSBmcm9tICcuL0thbHR1cmFHcm91cFVzZXInO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBHcm91cFVzZXJBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZ3JvdXBVc2VyIDogS2FsdHVyYUdyb3VwVXNlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2dyb3VwVXNlcicgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBZGQgbmV3IEdyb3VwVXNlclxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFHcm91cFVzZXJcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VwVXNlckFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFHcm91cFVzZXI+IHtcblxuICAgIGdyb3VwVXNlciA6IEthbHR1cmFHcm91cFVzZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogR3JvdXBVc2VyQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhR3JvdXBVc2VyJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFHcm91cFVzZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dyb3VwdXNlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0Z3JvdXBVc2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhR3JvdXBVc2VyLCBzdWJUeXBlIDogJ0thbHR1cmFHcm91cFVzZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==