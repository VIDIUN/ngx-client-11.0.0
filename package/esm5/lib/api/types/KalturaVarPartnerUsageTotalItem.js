/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaVarPartnerUsageItem } from './KalturaVarPartnerUsageItem';
/**
 * @record
 */
export function KalturaVarPartnerUsageTotalItemArgs() { }
var KalturaVarPartnerUsageTotalItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaVarPartnerUsageTotalItem, _super);
    function KalturaVarPartnerUsageTotalItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaVarPartnerUsageTotalItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaVarPartnerUsageTotalItem' }
        });
        return result;
    };
    return KalturaVarPartnerUsageTotalItem;
}(KalturaVarPartnerUsageItem));
export { KalturaVarPartnerUsageTotalItem };
typesMappingStorage['KalturaVarPartnerUsageTotalItem'] = KalturaVarPartnerUsageTotalItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZhclBhcnRuZXJVc2FnZVRvdGFsSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVZhclBhcnRuZXJVc2FnZVRvdGFsSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBTzFHLElBQUE7SUFBcUQsMkRBQTBCO0lBSTNFLHlDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7U0FDM0UsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0E1Qkw7RUFTcUQsMEJBQTBCLEVBb0I5RSxDQUFBO0FBcEJELDJDQW9CQztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW0sIEthbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFWYXJQYXJ0bmVyVXNhZ2VUb3RhbEl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFWYXJQYXJ0bmVyVXNhZ2VUb3RhbEl0ZW0gZXh0ZW5kcyBLYWx0dXJhVmFyUGFydG5lclVzYWdlSXRlbSB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVZhclBhcnRuZXJVc2FnZVRvdGFsSXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVmFyUGFydG5lclVzYWdlVG90YWxJdGVtJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVmFyUGFydG5lclVzYWdlVG90YWxJdGVtJ10gPSBLYWx0dXJhVmFyUGFydG5lclVzYWdlVG90YWxJdGVtOyJdfQ==