/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFlavorAssetWithParams } from './KalturaFlavorAssetWithParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorAssetGetFlavorAssetsWithParamsActionArgs() { }
/** @type {?} */
FlavorAssetGetFlavorAssetsWithParamsActionArgs.prototype.entryId;
/**
 * Build request payload for service 'flavorAsset' action 'getFlavorAssetsWithParams'.
 *
 * Usage: Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa)
 *
 * Server response type:         KalturaFlavorAssetWithParams[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'flavorAsset' action 'getFlavorAssetsWithParams'.
 *
 * Usage: Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa)
 *
 * Server response type:         KalturaFlavorAssetWithParams[]
 * Server failure response type: KalturaAPIException
 */
FlavorAssetGetFlavorAssetsWithParamsAction = /** @class */ (function (_super) {
    tslib_1.__extends(FlavorAssetGetFlavorAssetsWithParamsAction, _super);
    function FlavorAssetGetFlavorAssetsWithParamsAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaFlavorAssetWithParams', responseConstructor: KalturaFlavorAssetWithParams }) || this;
    }
    /**
     * @return {?}
     */
    FlavorAssetGetFlavorAssetsWithParamsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorasset' },
            action: { type: 'c', default: 'getFlavorAssetsWithParams' },
            entryId: { type: 's' }
        });
        return result;
    };
    return FlavorAssetGetFlavorAssetsWithParamsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'flavorAsset' action 'getFlavorAssetsWithParams'.
 *
 * Usage: Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa)
 *
 * Server response type:         KalturaFlavorAssetWithParams[]
 * Server failure response type: KalturaAPIException
 */
export { FlavorAssetGetFlavorAssetsWithParamsAction };
if (false) {
    /** @type {?} */
    FlavorAssetGetFlavorAssetsWithParamsAction.prototype.entryId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yQXNzZXRHZXRGbGF2b3JBc3NldHNXaXRoUGFyYW1zQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9GbGF2b3JBc3NldEdldEZsYXZvckFzc2V0c1dpdGhQYXJhbXNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBZ0Usc0VBQThDO0lBSTFHLG9EQUFZLElBQXFEO2VBRTdELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDhCQUE4QixFQUFFLG1CQUFtQixFQUFHLDRCQUE0QixFQUFHLENBQUM7S0FDNUk7Ozs7SUFFUyxpRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDOUQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBdkNMO0VBa0JnRSxjQUFjLEVBc0I3RSxDQUFBOzs7Ozs7Ozs7QUF0QkQsc0RBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JBc3NldFdpdGhQYXJhbXMgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JBc3NldFdpdGhQYXJhbXMnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGbGF2b3JBc3NldEdldEZsYXZvckFzc2V0c1dpdGhQYXJhbXNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2ZsYXZvckFzc2V0JyBhY3Rpb24gJ2dldEZsYXZvckFzc2V0c1dpdGhQYXJhbXMnLlxuICpcbiAqIFVzYWdlOiBHZXQgRmxhdm9yIEFzc2V0IHdpdGggdGhlIHJlbGV2YW50IEZsYXZvciBQYXJhbXMgKEZsYXZvciBQYXJhbXMgY2FuIGV4aXN0IHdpdGhvdXQgRmxhdm9yIEFzc2V0ICYgdmljZSB2ZXJzYSlcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRmxhdm9yQXNzZXRXaXRoUGFyYW1zW11cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEZsYXZvckFzc2V0R2V0Rmxhdm9yQXNzZXRzV2l0aFBhcmFtc0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFGbGF2b3JBc3NldFdpdGhQYXJhbXNbXT4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBGbGF2b3JBc3NldEdldEZsYXZvckFzc2V0c1dpdGhQYXJhbXNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdhJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFGbGF2b3JBc3NldFdpdGhQYXJhbXMnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZsYXZvckFzc2V0V2l0aFBhcmFtcyAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZmxhdm9yYXNzZXQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRGbGF2b3JBc3NldHNXaXRoUGFyYW1zJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==