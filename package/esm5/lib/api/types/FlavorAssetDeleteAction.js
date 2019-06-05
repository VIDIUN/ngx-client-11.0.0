/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorAssetDeleteActionArgs() { }
/** @type {?} */
FlavorAssetDeleteActionArgs.prototype.id;
/**
 * Build request payload for service 'flavorAsset' action 'delete'.
 *
 * Usage: Delete Flavor Asset by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'flavorAsset' action 'delete'.
 *
 * Usage: Delete Flavor Asset by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
FlavorAssetDeleteAction = /** @class */ (function (_super) {
    tslib_1.__extends(FlavorAssetDeleteAction, _super);
    function FlavorAssetDeleteAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    FlavorAssetDeleteAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorasset' },
            action: { type: 'c', default: 'delete' },
            id: { type: 's' }
        });
        return result;
    };
    return FlavorAssetDeleteAction;
}(KalturaRequest));
/**
 * Build request payload for service 'flavorAsset' action 'delete'.
 *
 * Usage: Delete Flavor Asset by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { FlavorAssetDeleteAction };
if (false) {
    /** @type {?} */
    FlavorAssetDeleteAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yQXNzZXREZWxldGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0ZsYXZvckFzc2V0RGVsZXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQTZDLG1EQUFvQjtJQUk3RCxpQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyw4Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDVixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQXZDTDtFQWtCNkMsY0FBYyxFQXNCMUQsQ0FBQTs7Ozs7Ozs7O0FBdEJELG1DQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhdm9yQXNzZXREZWxldGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdmbGF2b3JBc3NldCcgYWN0aW9uICdkZWxldGUnLlxuICpcbiAqIFVzYWdlOiBEZWxldGUgRmxhdm9yIEFzc2V0IGJ5IElEXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgdm9pZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRmxhdm9yQXNzZXREZWxldGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDx2b2lkPiB7XG5cbiAgICBpZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBGbGF2b3JBc3NldERlbGV0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3YnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZmxhdm9yYXNzZXQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkZWxldGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==