/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorAssetSetContentActionArgs() { }
/** @type {?} */
FlavorAssetSetContentActionArgs.prototype.id;
/** @type {?} */
FlavorAssetSetContentActionArgs.prototype.contentResource;
/**
 * Build request payload for service 'flavorAsset' action 'setContent'.
 *
 * Usage: Update content of flavor asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'flavorAsset' action 'setContent'.
 *
 * Usage: Update content of flavor asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
FlavorAssetSetContentAction = /** @class */ (function (_super) {
    tslib_1.__extends(FlavorAssetSetContentAction, _super);
    function FlavorAssetSetContentAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaFlavorAsset', responseConstructor: KalturaFlavorAsset }) || this;
    }
    /**
     * @return {?}
     */
    FlavorAssetSetContentAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorasset' },
            action: { type: 'c', default: 'setContent' },
            id: { type: 's' },
            contentResource: { type: 'o', subTypeConstructor: KalturaContentResource, subType: 'KalturaContentResource' }
        });
        return result;
    };
    return FlavorAssetSetContentAction;
}(KalturaRequest));
/**
 * Build request payload for service 'flavorAsset' action 'setContent'.
 *
 * Usage: Update content of flavor asset
 *
 * Server response type:         KalturaFlavorAsset
 * Server failure response type: KalturaAPIException
 */
export { FlavorAssetSetContentAction };
if (false) {
    /** @type {?} */
    FlavorAssetSetContentAction.prototype.id;
    /** @type {?} */
    FlavorAssetSetContentAction.prototype.contentResource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yQXNzZXRTZXRDb250ZW50QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9GbGF2b3JBc3NldFNldENvbnRlbnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFpRCx1REFBa0M7SUFLL0UscUNBQVksSUFBc0M7ZUFFOUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUcsa0JBQWtCLEVBQUcsQ0FBQztLQUN4SDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGFBQWEsRUFBRTtZQUM3RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDL0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUN4RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3NDQTNDTDtFQW9CaUQsY0FBYyxFQXdCOUQsQ0FBQTs7Ozs7Ozs7O0FBeEJELHVDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRmxhdm9yQXNzZXQgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JBc3NldCc7XG5cbmltcG9ydCB7IEthbHR1cmFDb250ZW50UmVzb3VyY2UgfSBmcm9tICcuL0thbHR1cmFDb250ZW50UmVzb3VyY2UnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhdm9yQXNzZXRTZXRDb250ZW50QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogc3RyaW5nO1xuXHRjb250ZW50UmVzb3VyY2UgOiBLYWx0dXJhQ29udGVudFJlc291cmNlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZmxhdm9yQXNzZXQnIGFjdGlvbiAnc2V0Q29udGVudCcuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBjb250ZW50IG9mIGZsYXZvciBhc3NldFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFGbGF2b3JBc3NldFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRmxhdm9yQXNzZXRTZXRDb250ZW50QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUZsYXZvckFzc2V0PiB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0Y29udGVudFJlc291cmNlIDogS2FsdHVyYUNvbnRlbnRSZXNvdXJjZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBGbGF2b3JBc3NldFNldENvbnRlbnRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFGbGF2b3JBc3NldCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmxhdm9yQXNzZXQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2ZsYXZvcmFzc2V0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2V0Q29udGVudCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udGVudFJlc291cmNlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udGVudFJlc291cmNlLCBzdWJUeXBlIDogJ0thbHR1cmFDb250ZW50UmVzb3VyY2UnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==