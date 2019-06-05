/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderStatus } from './KalturaGenericDistributionProviderStatus';
import { KalturaDistributionThumbDimensions } from './KalturaDistributionThumbDimensions';
import { KalturaDistributionProvider } from './KalturaDistributionProvider';
/**
 * @record
 */
export function KalturaGenericDistributionProviderArgs() { }
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.isDefault;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.optionalFlavorParamsIds;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.requiredFlavorParamsIds;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.optionalThumbDimensions;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.requiredThumbDimensions;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.editableFields;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.mandatoryFields;
var KalturaGenericDistributionProvider = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaGenericDistributionProvider, _super);
    function KalturaGenericDistributionProvider(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.optionalThumbDimensions === 'undefined')
            _this.optionalThumbDimensions = [];
        if (typeof _this.requiredThumbDimensions === 'undefined')
            _this.requiredThumbDimensions = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaGenericDistributionProvider.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericDistributionProvider' },
            id: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            isDefault: { type: 'b' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaGenericDistributionProviderStatus, subType: 'KalturaGenericDistributionProviderStatus' },
            optionalFlavorParamsIds: { type: 's' },
            requiredFlavorParamsIds: { type: 's' },
            optionalThumbDimensions: { type: 'a', subTypeConstructor: KalturaDistributionThumbDimensions, subType: 'KalturaDistributionThumbDimensions' },
            requiredThumbDimensions: { type: 'a', subTypeConstructor: KalturaDistributionThumbDimensions, subType: 'KalturaDistributionThumbDimensions' },
            editableFields: { type: 's' },
            mandatoryFields: { type: 's' }
        });
        return result;
    };
    return KalturaGenericDistributionProvider;
}(KalturaDistributionProvider));
export { KalturaGenericDistributionProvider };
if (false) {
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.id;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.createdAt;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.updatedAt;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.partnerId;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.isDefault;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.status;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.optionalFlavorParamsIds;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.requiredFlavorParamsIds;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.optionalThumbDimensions;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.requiredThumbDimensions;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.editableFields;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.mandatoryFields;
}
typesMappingStorage['KalturaGenericDistributionProvider'] = KalturaGenericDistributionProvider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsMkJBQTJCLEVBQW1DLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhN0csSUFBQTtJQUF3RCw4REFBMkI7SUFlL0UsNENBQVksSUFBOEM7UUFBMUQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FHZDtRQUZHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLHVCQUF1QixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDakcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsdUJBQXVCLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLHVCQUF1QixHQUFHLEVBQUUsQ0FBQzs7S0FDeEY7Ozs7SUFFUyx5REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2RixFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsd0NBQXdDLEVBQUUsT0FBTyxFQUFHLDBDQUEwQyxFQUFFO1lBQzlKLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4Qyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUNqSix1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ2pKLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN2QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZDQTdETDtFQWlCd0QsMkJBQTJCLEVBNkNsRixDQUFBO0FBN0NELDhDQTZDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsb0NBQW9DLENBQUMsR0FBRyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnMgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyLCBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckFyZ3Mge1xuICAgIGlzRGVmYXVsdD8gOiBib29sZWFuO1xuXHRvcHRpb25hbEZsYXZvclBhcmFtc0lkcz8gOiBzdHJpbmc7XG5cdHJlcXVpcmVkRmxhdm9yUGFyYW1zSWRzPyA6IHN0cmluZztcblx0b3B0aW9uYWxUaHVtYkRpbWVuc2lvbnM/IDogS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9uc1tdO1xuXHRyZXF1aXJlZFRodW1iRGltZW5zaW9ucz8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uVGh1bWJEaW1lbnNpb25zW107XG5cdGVkaXRhYmxlRmllbGRzPyA6IHN0cmluZztcblx0bWFuZGF0b3J5RmllbGRzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlciBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlciB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRpc0RlZmF1bHQgOiBib29sZWFuO1xuXHRyZWFkb25seSBzdGF0dXMgOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyU3RhdHVzO1xuXHRvcHRpb25hbEZsYXZvclBhcmFtc0lkcyA6IHN0cmluZztcblx0cmVxdWlyZWRGbGF2b3JQYXJhbXNJZHMgOiBzdHJpbmc7XG5cdG9wdGlvbmFsVGh1bWJEaW1lbnNpb25zIDogS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9uc1tdO1xuXHRyZXF1aXJlZFRodW1iRGltZW5zaW9ucyA6IEthbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnNbXTtcblx0ZWRpdGFibGVGaWVsZHMgOiBzdHJpbmc7XG5cdG1hbmRhdG9yeUZpZWxkcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbmFsVGh1bWJEaW1lbnNpb25zID09PSAndW5kZWZpbmVkJykgdGhpcy5vcHRpb25hbFRodW1iRGltZW5zaW9ucyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5yZXF1aXJlZFRodW1iRGltZW5zaW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMucmVxdWlyZWRUaHVtYkRpbWVuc2lvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGlzRGVmYXVsdCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlclN0YXR1cycgfSxcblx0XHRcdFx0b3B0aW9uYWxGbGF2b3JQYXJhbXNJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cmVxdWlyZWRGbGF2b3JQYXJhbXNJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3B0aW9uYWxUaHVtYkRpbWVuc2lvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnMsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9ucycgfSxcblx0XHRcdFx0cmVxdWlyZWRUaHVtYkRpbWVuc2lvbnMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnMsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9ucycgfSxcblx0XHRcdFx0ZWRpdGFibGVGaWVsZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWFuZGF0b3J5RmllbGRzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXInXSA9IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXI7Il19