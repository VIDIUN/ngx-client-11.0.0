/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionFieldRequiredStatus } from './KalturaDistributionFieldRequiredStatus';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDistributionFieldConfigArgs() { }
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.fieldName;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.userFriendlyFieldName;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.entryMrssXslt;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.isRequired;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.type;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.updateOnChange;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.updateParams;
/** @type {?|undefined} */
KalturaDistributionFieldConfigArgs.prototype.triggerDeleteOnError;
var KalturaDistributionFieldConfig = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDistributionFieldConfig, _super);
    function KalturaDistributionFieldConfig(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.updateParams === 'undefined')
            _this.updateParams = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaDistributionFieldConfig.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionFieldConfig' },
            fieldName: { type: 's' },
            userFriendlyFieldName: { type: 's' },
            entryMrssXslt: { type: 's' },
            isRequired: { type: 'en', subTypeConstructor: KalturaDistributionFieldRequiredStatus, subType: 'KalturaDistributionFieldRequiredStatus' },
            type: { type: 's' },
            updateOnChange: { type: 'b' },
            updateParams: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            isDefault: { type: 'b', readOnly: true },
            triggerDeleteOnError: { type: 'b' }
        });
        return result;
    };
    return KalturaDistributionFieldConfig;
}(KalturaObjectBase));
export { KalturaDistributionFieldConfig };
if (false) {
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.fieldName;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.userFriendlyFieldName;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.entryMrssXslt;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.isRequired;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.type;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.updateOnChange;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.updateParams;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.isDefault;
    /** @type {?} */
    KalturaDistributionFieldConfig.prototype.triggerDeleteOnError;
}
typesMappingStorage['KalturaDistributionFieldConfig'] = KalturaDistributionFieldConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvbkZpZWxkQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY2xGLElBQUE7SUFBb0QsMERBQWlCO0lBWWpFLHdDQUFZLElBQTBDO1FBQXRELFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7O0tBQ3hFOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNDQUFzQyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUM3SSxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUM1RixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0Msb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzVCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eUNBdkRMO0VBa0JvRCxpQkFBaUIsRUFzQ3BFLENBQUE7QUF0Q0QsMENBc0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25GaWVsZFJlcXVpcmVkU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRSZXF1aXJlZFN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhU3RyaW5nIH0gZnJvbSAnLi9LYWx0dXJhU3RyaW5nJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRDb25maWdBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgZmllbGROYW1lPyA6IHN0cmluZztcblx0dXNlckZyaWVuZGx5RmllbGROYW1lPyA6IHN0cmluZztcblx0ZW50cnlNcnNzWHNsdD8gOiBzdHJpbmc7XG5cdGlzUmVxdWlyZWQ/IDogS2FsdHVyYURpc3RyaWJ1dGlvbkZpZWxkUmVxdWlyZWRTdGF0dXM7XG5cdHR5cGU/IDogc3RyaW5nO1xuXHR1cGRhdGVPbkNoYW5nZT8gOiBib29sZWFuO1xuXHR1cGRhdGVQYXJhbXM/IDogS2FsdHVyYVN0cmluZ1tdO1xuXHR0cmlnZ2VyRGVsZXRlT25FcnJvcj8gOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRDb25maWcgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBmaWVsZE5hbWUgOiBzdHJpbmc7XG5cdHVzZXJGcmllbmRseUZpZWxkTmFtZSA6IHN0cmluZztcblx0ZW50cnlNcnNzWHNsdCA6IHN0cmluZztcblx0aXNSZXF1aXJlZCA6IEthbHR1cmFEaXN0cmlidXRpb25GaWVsZFJlcXVpcmVkU3RhdHVzO1xuXHR0eXBlIDogc3RyaW5nO1xuXHR1cGRhdGVPbkNoYW5nZSA6IGJvb2xlYW47XG5cdHVwZGF0ZVBhcmFtcyA6IEthbHR1cmFTdHJpbmdbXTtcblx0cmVhZG9ubHkgaXNEZWZhdWx0IDogYm9vbGVhbjtcblx0dHJpZ2dlckRlbGV0ZU9uRXJyb3IgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRDb25maWdBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy51cGRhdGVQYXJhbXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnVwZGF0ZVBhcmFtcyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEaXN0cmlidXRpb25GaWVsZENvbmZpZycgfSxcblx0XHRcdFx0ZmllbGROYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJGcmllbmRseUZpZWxkTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeU1yc3NYc2x0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlzUmVxdWlyZWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRSZXF1aXJlZFN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRSZXF1aXJlZFN0YXR1cycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cGRhdGVPbkNoYW5nZSA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHR1cGRhdGVQYXJhbXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdHJpbmcsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZycgfSxcblx0XHRcdFx0aXNEZWZhdWx0IDogeyB0eXBlIDogJ2InLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dHJpZ2dlckRlbGV0ZU9uRXJyb3IgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURpc3RyaWJ1dGlvbkZpZWxkQ29uZmlnJ10gPSBLYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRDb25maWc7Il19