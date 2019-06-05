/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaCondition } from './KalturaCondition';
/**
 * @record
 */
export function KalturaCompareConditionArgs() { }
/** @type {?|undefined} */
KalturaCompareConditionArgs.prototype.value;
/** @type {?|undefined} */
KalturaCompareConditionArgs.prototype.comparison;
var KalturaCompareCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCompareCondition, _super);
    function KalturaCompareCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCompareCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCompareCondition' },
            value: { type: 'o', subTypeConstructor: KalturaIntegerValue, subType: 'KalturaIntegerValue' },
            comparison: { type: 'es', subTypeConstructor: KalturaSearchConditionComparison, subType: 'KalturaSearchConditionComparison' }
        });
        return result;
    };
    return KalturaCompareCondition;
}(KalturaCondition));
export { KalturaCompareCondition };
if (false) {
    /** @type {?} */
    KalturaCompareCondition.prototype.value;
    /** @type {?} */
    KalturaCompareCondition.prototype.comparison;
}
typesMappingStorage['KalturaCompareCondition'] = KalturaCompareCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbXBhcmVDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb21wYXJlQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7O0FBUTVFLElBQUE7SUFBNkMsbURBQWdCO0lBS3pELGlDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7WUFDNUUsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDakcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7U0FDeEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrQ0FsQ0w7RUFZNkMsZ0JBQWdCLEVBdUI1RCxDQUFBO0FBdkJELG1DQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHlCQUF5QixDQUFDLEdBQUcsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVnZXJWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUludGVnZXJWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbiB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaENvbmRpdGlvbkNvbXBhcmlzb24nO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmRpdGlvbiwgS2FsdHVyYUNvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb21wYXJlQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZGl0aW9uQXJncyB7XG4gICAgdmFsdWU/IDogS2FsdHVyYUludGVnZXJWYWx1ZTtcblx0Y29tcGFyaXNvbj8gOiBLYWx0dXJhU2VhcmNoQ29uZGl0aW9uQ29tcGFyaXNvbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbXBhcmVDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhQ29uZGl0aW9uIHtcblxuICAgIHZhbHVlIDogS2FsdHVyYUludGVnZXJWYWx1ZTtcblx0Y29tcGFyaXNvbiA6IEthbHR1cmFTZWFyY2hDb25kaXRpb25Db21wYXJpc29uO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbicgfSxcblx0XHRcdFx0dmFsdWUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFJbnRlZ2VyVmFsdWUsIHN1YlR5cGUgOiAnS2FsdHVyYUludGVnZXJWYWx1ZScgfSxcblx0XHRcdFx0Y29tcGFyaXNvbiA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTZWFyY2hDb25kaXRpb25Db21wYXJpc29uLCBzdWJUeXBlIDogJ0thbHR1cmFTZWFyY2hDb25kaXRpb25Db21wYXJpc29uJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbiddID0gS2FsdHVyYUNvbXBhcmVDb25kaXRpb247Il19