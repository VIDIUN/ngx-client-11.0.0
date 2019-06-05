/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorParamsUpdateActionArgs() { }
/** @type {?} */
FlavorParamsUpdateActionArgs.prototype.id;
/** @type {?} */
FlavorParamsUpdateActionArgs.prototype.flavorParams;
/**
 * Build request payload for service 'flavorParams' action 'update'.
 *
 * Usage: Update Flavor Params by ID
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'flavorParams' action 'update'.
 *
 * Usage: Update Flavor Params by ID
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 */
FlavorParamsUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(FlavorParamsUpdateAction, _super);
    function FlavorParamsUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaFlavorParams', responseConstructor: KalturaFlavorParams }) || this;
    }
    /**
     * @return {?}
     */
    FlavorParamsUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorparams' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            flavorParams: { type: 'o', subTypeConstructor: KalturaFlavorParams, subType: 'KalturaFlavorParams' }
        });
        return result;
    };
    return FlavorParamsUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'flavorParams' action 'update'.
 *
 * Usage: Update Flavor Params by ID
 *
 * Server response type:         KalturaFlavorParams
 * Server failure response type: KalturaAPIException
 */
export { FlavorParamsUpdateAction };
if (false) {
    /** @type {?} */
    FlavorParamsUpdateAction.prototype.id;
    /** @type {?} */
    FlavorParamsUpdateAction.prototype.flavorParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yUGFyYW1zVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9GbGF2b3JQYXJhbXNVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUE4QyxvREFBbUM7SUFLN0Usa0NBQVksSUFBbUM7ZUFFM0Msa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUcsbUJBQW1CLEVBQUcsQ0FBQztLQUMxSDs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtZQUM5RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtTQUMvRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQTFDTDtFQW1COEMsY0FBYyxFQXdCM0QsQ0FBQTs7Ozs7Ozs7O0FBeEJELG9DQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yUGFyYW1zIH0gZnJvbSAnLi9LYWx0dXJhRmxhdm9yUGFyYW1zJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhdm9yUGFyYW1zVXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xuXHRmbGF2b3JQYXJhbXMgOiBLYWx0dXJhRmxhdm9yUGFyYW1zO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZmxhdm9yUGFyYW1zJyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBGbGF2b3IgUGFyYW1zIGJ5IElEXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUZsYXZvclBhcmFtc1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRmxhdm9yUGFyYW1zVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUZsYXZvclBhcmFtcz4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdGZsYXZvclBhcmFtcyA6IEthbHR1cmFGbGF2b3JQYXJhbXM7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRmxhdm9yUGFyYW1zVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRmxhdm9yUGFyYW1zJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JQYXJhbXMgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2ZsYXZvcnBhcmFtcycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmxhdm9yUGFyYW1zLCBzdWJUeXBlIDogJ0thbHR1cmFGbGF2b3JQYXJhbXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==