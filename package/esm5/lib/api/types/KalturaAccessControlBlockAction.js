/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaRuleAction } from './KalturaRuleAction';
/**
 * @record
 */
export function KalturaAccessControlBlockActionArgs() { }
var KalturaAccessControlBlockAction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAccessControlBlockAction, _super);
    function KalturaAccessControlBlockAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAccessControlBlockAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAccessControlBlockAction' }
        });
        return result;
    };
    return KalturaAccessControlBlockAction;
}(KalturaRuleAction));
export { KalturaAccessControlBlockAction };
typesMappingStorage['KalturaAccessControlBlockAction'] = KalturaAccessControlBlockAction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFjY2Vzc0NvbnRyb2xCbG9ja0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUFjY2Vzc0NvbnRyb2xCbG9ja0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBTy9FLElBQUE7SUFBcUQsMkRBQWlCO0lBSWxFLHlDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7U0FDM0UsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0E1Qkw7RUFTcUQsaUJBQWlCLEVBb0JyRSxDQUFBO0FBcEJELDJDQW9CQztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJ1bGVBY3Rpb24sIEthbHR1cmFSdWxlQWN0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYVJ1bGVBY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFBY2Nlc3NDb250cm9sQmxvY2tBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSdWxlQWN0aW9uQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBY2Nlc3NDb250cm9sQmxvY2tBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUnVsZUFjdGlvbiB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xCbG9ja0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbEJsb2NrQWN0aW9uJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQWNjZXNzQ29udHJvbEJsb2NrQWN0aW9uJ10gPSBLYWx0dXJhQWNjZXNzQ29udHJvbEJsb2NrQWN0aW9uOyJdfQ==