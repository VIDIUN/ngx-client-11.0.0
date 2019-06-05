/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaResource } from './KalturaResource';
/**
 * @record
 */
export function KalturaAssetParamsResourceContainerArgs() { }
/** @type {?|undefined} */
KalturaAssetParamsResourceContainerArgs.prototype.resource;
/** @type {?|undefined} */
KalturaAssetParamsResourceContainerArgs.prototype.assetParamsId;
var KalturaAssetParamsResourceContainer = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAssetParamsResourceContainer, _super);
    function KalturaAssetParamsResourceContainer(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAssetParamsResourceContainer.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAssetParamsResourceContainer' },
            resource: { type: 'o', subTypeConstructor: KalturaContentResource, subType: 'KalturaContentResource' },
            assetParamsId: { type: 'n' }
        });
        return result;
    };
    return KalturaAssetParamsResourceContainer;
}(KalturaResource));
export { KalturaAssetParamsResourceContainer };
if (false) {
    /** @type {?} */
    KalturaAssetParamsResourceContainer.prototype.resource;
    /** @type {?} */
    KalturaAssetParamsResourceContainer.prototype.assetParamsId;
}
typesMappingStorage['KalturaAssetParamsResourceContainer'] = KalturaAssetParamsResourceContainer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFzc2V0UGFyYW1zUmVzb3VyY2VDb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBc3NldFBhcmFtc1Jlc291cmNlQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQXVCLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7OztBQVF6RSxJQUFBO0lBQXlELCtEQUFlO0lBS3BFLDZDQUFZLElBQStDO2VBRXZELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMERBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7WUFDeEYsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDMUcsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhDQWpDTDtFQVd5RCxlQUFlLEVBdUJ2RSxDQUFBO0FBdkJELCtDQXVCQzs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFDQUFxQyxDQUFDLEdBQUcsbUNBQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSB9IGZyb20gJy4vS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVzb3VyY2UsIEthbHR1cmFSZXNvdXJjZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZXNvdXJjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFzc2V0UGFyYW1zUmVzb3VyY2VDb250YWluZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZXNvdXJjZUFyZ3Mge1xuICAgIHJlc291cmNlPyA6IEthbHR1cmFDb250ZW50UmVzb3VyY2U7XG5cdGFzc2V0UGFyYW1zSWQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXNzZXRQYXJhbXNSZXNvdXJjZUNvbnRhaW5lciBleHRlbmRzIEthbHR1cmFSZXNvdXJjZSB7XG5cbiAgICByZXNvdXJjZSA6IEthbHR1cmFDb250ZW50UmVzb3VyY2U7XG5cdGFzc2V0UGFyYW1zSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBc3NldFBhcmFtc1Jlc291cmNlQ29udGFpbmVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBc3NldFBhcmFtc1Jlc291cmNlQ29udGFpbmVyJyB9LFxuXHRcdFx0XHRyZXNvdXJjZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnRlbnRSZXNvdXJjZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udGVudFJlc291cmNlJyB9LFxuXHRcdFx0XHRhc3NldFBhcmFtc0lkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBc3NldFBhcmFtc1Jlc291cmNlQ29udGFpbmVyJ10gPSBLYWx0dXJhQXNzZXRQYXJhbXNSZXNvdXJjZUNvbnRhaW5lcjsiXX0=