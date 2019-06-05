/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaKeyValueArgs() { }
/** @type {?|undefined} */
KalturaKeyValueArgs.prototype.key;
/** @type {?|undefined} */
KalturaKeyValueArgs.prototype.value;
var KalturaKeyValue = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaKeyValue, _super);
    function KalturaKeyValue(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaKeyValue.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaKeyValue' },
            key: { type: 's' },
            value: { type: 's' }
        });
        return result;
    };
    return KalturaKeyValue;
}(KalturaObjectBase));
export { KalturaKeyValue };
if (false) {
    /** @type {?} */
    KalturaKeyValue.prototype.key;
    /** @type {?} */
    KalturaKeyValue.prototype.value;
}
typesMappingStorage['KalturaKeyValue'] = KalturaKeyValue;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUtleVZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhS2V5VmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFRbEYsSUFBQTtJQUFxQywyQ0FBaUI7SUFLbEQseUJBQVksSUFBMkI7ZUFFbkMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxzQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNwRSxHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDYixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBCQWhDTDtFQVVxQyxpQkFBaUIsRUF1QnJELENBQUE7QUF2QkQsMkJBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsR0FBRyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFLZXlWYWx1ZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBrZXk/IDogc3RyaW5nO1xuXHR2YWx1ZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFLZXlWYWx1ZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGtleSA6IHN0cmluZztcblx0dmFsdWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFLZXlWYWx1ZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhS2V5VmFsdWUnIH0sXG5cdFx0XHRcdGtleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2YWx1ZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhS2V5VmFsdWUnXSA9IEthbHR1cmFLZXlWYWx1ZTsiXX0=