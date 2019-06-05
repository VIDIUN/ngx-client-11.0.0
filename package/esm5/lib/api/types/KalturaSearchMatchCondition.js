/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchCondition } from './KalturaSearchCondition';
/**
 * @record
 */
export function KalturaSearchMatchConditionArgs() { }
/** @type {?|undefined} */
KalturaSearchMatchConditionArgs.prototype.not;
var KalturaSearchMatchCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSearchMatchCondition, _super);
    function KalturaSearchMatchCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSearchMatchCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSearchMatchCondition' },
            not: { type: 'b' }
        });
        return result;
    };
    return KalturaSearchMatchCondition;
}(KalturaSearchCondition));
export { KalturaSearchMatchCondition };
if (false) {
    /** @type {?} */
    KalturaSearchMatchCondition.prototype.not;
}
typesMappingStorage['KalturaSearchMatchCondition'] = KalturaSearchMatchCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlYXJjaE1hdGNoQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2VhcmNoTWF0Y2hDb25kaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0FBTzlGLElBQUE7SUFBaUQsdURBQXNCO0lBSW5FLHFDQUFZLElBQXVDO2VBRS9DLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsa0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDaEYsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNYLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBN0JMO0VBU2lELHNCQUFzQixFQXFCdEUsQ0FBQTtBQXJCRCx1Q0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uLCBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaENvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNlYXJjaE1hdGNoQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQXJncyB7XG4gICAgbm90PyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTZWFyY2hNYXRjaENvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFTZWFyY2hDb25kaXRpb24ge1xuXG4gICAgbm90IDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNlYXJjaE1hdGNoQ29uZGl0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTZWFyY2hNYXRjaENvbmRpdGlvbicgfSxcblx0XHRcdFx0bm90IDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTZWFyY2hNYXRjaENvbmRpdGlvbiddID0gS2FsdHVyYVNlYXJjaE1hdGNoQ29uZGl0aW9uOyJdfQ==