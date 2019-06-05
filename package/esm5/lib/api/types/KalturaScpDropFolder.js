/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSshDropFolder } from './KalturaSshDropFolder';
/**
 * @record
 */
export function KalturaScpDropFolderArgs() { }
var KalturaScpDropFolder = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScpDropFolder, _super);
    function KalturaScpDropFolder(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaScpDropFolder.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaScpDropFolder' }
        });
        return result;
    };
    return KalturaScpDropFolder;
}(KalturaSshDropFolder));
export { KalturaScpDropFolder };
typesMappingStorage['KalturaScpDropFolder'] = KalturaScpDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjcERyb3BGb2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTY3BEcm9wRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFPeEYsSUFBQTtJQUEwQyxnREFBb0I7SUFJMUQsOEJBQVksSUFBZ0M7ZUFFeEMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtTQUNoRSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQTVCTDtFQVMwQyxvQkFBb0IsRUFvQjdELENBQUE7QUFwQkQsZ0NBb0JDO0FBRUQsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3NoRHJvcEZvbGRlciwgS2FsdHVyYVNzaERyb3BGb2xkZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU3NoRHJvcEZvbGRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNjcERyb3BGb2xkZXJBcmdzICBleHRlbmRzIEthbHR1cmFTc2hEcm9wRm9sZGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTY3BEcm9wRm9sZGVyIGV4dGVuZHMgS2FsdHVyYVNzaERyb3BGb2xkZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTY3BEcm9wRm9sZGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY3BEcm9wRm9sZGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NwRHJvcEZvbGRlciddID0gS2FsdHVyYVNjcERyb3BGb2xkZXI7Il19