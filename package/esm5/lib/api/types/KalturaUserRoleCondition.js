/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition } from './KalturaCondition';
/**
 * @record
 */
export function KalturaUserRoleConditionArgs() { }
/** @type {?|undefined} */
KalturaUserRoleConditionArgs.prototype.roleIds;
var KalturaUserRoleCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUserRoleCondition, _super);
    function KalturaUserRoleCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUserRoleCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUserRoleCondition' },
            roleIds: { type: 's' }
        });
        return result;
    };
    return KalturaUserRoleCondition;
}(KalturaCondition));
export { KalturaUserRoleCondition };
if (false) {
    /** @type {?} */
    KalturaUserRoleCondition.prototype.roleIds;
}
typesMappingStorage['KalturaUserRoleCondition'] = KalturaUserRoleCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJSb2xlQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXNlclJvbGVDb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUF3QixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7O0FBTzVFLElBQUE7SUFBOEMsb0RBQWdCO0lBSTFELGtDQUFZLElBQW9DO2VBRTVDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBN0JMO0VBUzhDLGdCQUFnQixFQXFCN0QsQ0FBQTtBQXJCRCxvQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29uZGl0aW9uLCBLYWx0dXJhQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVzZXJSb2xlQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZGl0aW9uQXJncyB7XG4gICAgcm9sZUlkcz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVc2VyUm9sZUNvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFDb25kaXRpb24ge1xuXG4gICAgcm9sZUlkcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVzZXJSb2xlQ29uZGl0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVc2VyUm9sZUNvbmRpdGlvbicgfSxcblx0XHRcdFx0cm9sZUlkcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXNlclJvbGVDb25kaXRpb24nXSA9IEthbHR1cmFVc2VyUm9sZUNvbmRpdGlvbjsiXX0=