/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCategoryUser } from './KalturaCategoryUser';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CategoryUserAddActionArgs() { }
/** @type {?} */
CategoryUserAddActionArgs.prototype.categoryUser;
/**
 * Build request payload for service 'categoryUser' action 'add'.
 *
 * Usage: Add new CategoryUser
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'categoryUser' action 'add'.
 *
 * Usage: Add new CategoryUser
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 */
CategoryUserAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryUserAddAction, _super);
    function CategoryUserAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCategoryUser', responseConstructor: KalturaCategoryUser }) || this;
    }
    /**
     * @return {?}
     */
    CategoryUserAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'categoryuser' },
            action: { type: 'c', default: 'add' },
            categoryUser: { type: 'o', subTypeConstructor: KalturaCategoryUser, subType: 'KalturaCategoryUser' }
        });
        return result;
    };
    return CategoryUserAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'categoryUser' action 'add'.
 *
 * Usage: Add new CategoryUser
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 */
export { CategoryUserAddAction };
if (false) {
    /** @type {?} */
    CategoryUserAddAction.prototype.categoryUser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlVc2VyQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9DYXRlZ29yeVVzZXJBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBMkMsaURBQW1DO0lBSTFFLCtCQUFZLElBQWdDO2VBRXhDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHFCQUFxQixFQUFFLG1CQUFtQixFQUFHLG1CQUFtQixFQUFHLENBQUM7S0FDMUg7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDOUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1NBQy9GLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBdkNMO0VBa0IyQyxjQUFjLEVBc0J4RCxDQUFBOzs7Ozs7Ozs7QUF0QkQsaUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeVVzZXIgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeVVzZXInO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeVVzZXJBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgY2F0ZWdvcnlVc2VyIDogS2FsdHVyYUNhdGVnb3J5VXNlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhdGVnb3J5VXNlcicgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBZGQgbmV3IENhdGVnb3J5VXNlclxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDYXRlZ29yeVVzZXJcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENhdGVnb3J5VXNlckFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFDYXRlZ29yeVVzZXI+IHtcblxuICAgIGNhdGVnb3J5VXNlciA6IEthbHR1cmFDYXRlZ29yeVVzZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ2F0ZWdvcnlVc2VyQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVVzZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhdGVnb3J5dXNlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0Y2F0ZWdvcnlVc2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyLCBzdWJUeXBlIDogJ0thbHR1cmFDYXRlZ29yeVVzZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==