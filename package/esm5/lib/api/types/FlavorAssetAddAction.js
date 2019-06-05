/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorAssetAddActionArgs() { }
/** @type {?} */
FlavorAssetAddActionArgs.prototype.entryId;
/** @type {?} */
FlavorAssetAddActionArgs.prototype.flavorAsset;
/**
 * Build request payload for service 'flavorAsset' action 'add'.
 *
 * Usage: Add flavor asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'flavorAsset' action 'add'.
 *
 * Usage: Add flavor asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
FlavorAssetAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(FlavorAssetAddAction, _super);
    function FlavorAssetAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaFlavorAsset', responseConstructor: KalturaFlavorAsset }) || this;
    }
    /**
     * @return {?}
     */
    FlavorAssetAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorasset' },
            action: { type: 'c', default: 'add' },
            entryId: { type: 's' },
            flavorAsset: { type: 'o', subTypeConstructor: KalturaFlavorAsset, subType: 'KalturaFlavorAsset' }
        });
        return result;
    };
    return FlavorAssetAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'flavorAsset' action 'add'.
 *
 * Usage: Add flavor asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
export { FlavorAssetAddAction };
if (false) {
    /** @type {?} */
    FlavorAssetAddAction.prototype.entryId;
    /** @type {?} */
    FlavorAssetAddAction.prototype.flavorAsset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yQXNzZXRBZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0ZsYXZvckFzc2V0QWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBMEMsZ0RBQWtDO0lBS3hFLDhCQUFZLElBQStCO2VBRXZDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG9CQUFvQixFQUFFLG1CQUFtQixFQUFHLGtCQUFrQixFQUFHLENBQUM7S0FDeEg7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDNUYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkExQ0w7RUFtQjBDLGNBQWMsRUF3QnZELENBQUE7Ozs7Ozs7OztBQXhCRCxnQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvckFzc2V0IH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yQXNzZXQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGbGF2b3JBc3NldEFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldCA6IEthbHR1cmFGbGF2b3JBc3NldDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2ZsYXZvckFzc2V0JyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZCBmbGF2b3IgYXNzZXRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRmxhdm9yQXNzZXRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEZsYXZvckFzc2V0QWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUZsYXZvckFzc2V0PiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldCA6IEthbHR1cmFGbGF2b3JBc3NldDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBGbGF2b3JBc3NldEFkZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUZsYXZvckFzc2V0JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JBc3NldCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZmxhdm9yYXNzZXQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXQgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JBc3NldCwgc3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yQXNzZXQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==