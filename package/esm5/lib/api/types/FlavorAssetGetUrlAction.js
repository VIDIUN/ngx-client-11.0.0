/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFlavorAssetUrlOptions } from './KalturaFlavorAssetUrlOptions';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorAssetGetUrlActionArgs() { }
/** @type {?} */
FlavorAssetGetUrlActionArgs.prototype.id;
/** @type {?|undefined} */
FlavorAssetGetUrlActionArgs.prototype.storageId;
/** @type {?|undefined} */
FlavorAssetGetUrlActionArgs.prototype.forceProxy;
/** @type {?|undefined} */
FlavorAssetGetUrlActionArgs.prototype.options;
/**
 * Build request payload for service 'flavorAsset' action 'getUrl'.
 *
 * Usage: Get download URL for the asset
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'flavorAsset' action 'getUrl'.
 *
 * Usage: Get download URL for the asset
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
FlavorAssetGetUrlAction = /** @class */ (function (_super) {
    tslib_1.__extends(FlavorAssetGetUrlAction, _super);
    function FlavorAssetGetUrlAction(data) {
        var _this = _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
        if (typeof _this.forceProxy === 'undefined')
            _this.forceProxy = false;
        return _this;
    }
    /**
     * @return {?}
     */
    FlavorAssetGetUrlAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorasset' },
            action: { type: 'c', default: 'getUrl' },
            id: { type: 's' },
            storageId: { type: 'n' },
            forceProxy: { type: 'b' },
            options: { type: 'o', subTypeConstructor: KalturaFlavorAssetUrlOptions, subType: 'KalturaFlavorAssetUrlOptions' }
        });
        return result;
    };
    return FlavorAssetGetUrlAction;
}(KalturaRequest));
/**
 * Build request payload for service 'flavorAsset' action 'getUrl'.
 *
 * Usage: Get download URL for the asset
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { FlavorAssetGetUrlAction };
if (false) {
    /** @type {?} */
    FlavorAssetGetUrlAction.prototype.id;
    /** @type {?} */
    FlavorAssetGetUrlAction.prototype.storageId;
    /** @type {?} */
    FlavorAssetGetUrlAction.prototype.forceProxy;
    /** @type {?} */
    FlavorAssetGetUrlAction.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yQXNzZXRHZXRVcmxBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0ZsYXZvckFzc2V0R2V0VXJsQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4RTs7Ozs7Ozs7QUFBQTtJQUE2QyxtREFBc0I7SUFPL0QsaUNBQVksSUFBa0M7UUFBOUMsWUFFSSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsU0FFdkY7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7O0tBQ3ZFOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQzdELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtTQUM1RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQWxETDtFQXNCNkMsY0FBYyxFQTZCMUQsQ0FBQTs7Ozs7Ozs7O0FBN0JELG1DQTZCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUZsYXZvckFzc2V0VXJsT3B0aW9ucyB9IGZyb20gJy4vS2FsdHVyYUZsYXZvckFzc2V0VXJsT3B0aW9ucyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGbGF2b3JBc3NldEdldFVybEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcblx0c3RvcmFnZUlkPyA6IG51bWJlcjtcblx0Zm9yY2VQcm94eT8gOiBib29sZWFuO1xuXHRvcHRpb25zPyA6IEthbHR1cmFGbGF2b3JBc3NldFVybE9wdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdmbGF2b3JBc3NldCcgYWN0aW9uICdnZXRVcmwnLlxuICpcbiAqIFVzYWdlOiBHZXQgZG93bmxvYWQgVVJMIGZvciB0aGUgYXNzZXRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBzdHJpbmdcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEZsYXZvckFzc2V0R2V0VXJsQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8c3RyaW5nPiB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0c3RvcmFnZUlkIDogbnVtYmVyO1xuXHRmb3JjZVByb3h5IDogYm9vbGVhbjtcblx0b3B0aW9ucyA6IEthbHR1cmFGbGF2b3JBc3NldFVybE9wdGlvbnM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRmxhdm9yQXNzZXRHZXRVcmxBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZm9yY2VQcm94eSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZm9yY2VQcm94eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2ZsYXZvcmFzc2V0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0VXJsJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdG9yYWdlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zm9yY2VQcm94eSA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRvcHRpb25zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmxhdm9yQXNzZXRVcmxPcHRpb25zLCBzdWJUeXBlIDogJ0thbHR1cmFGbGF2b3JBc3NldFVybE9wdGlvbnMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==