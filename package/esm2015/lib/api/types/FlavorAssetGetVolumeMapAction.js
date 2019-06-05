/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function FlavorAssetGetVolumeMapActionArgs() { }
/** @type {?} */
FlavorAssetGetVolumeMapActionArgs.prototype.flavorId;
/**
 * Build request payload for service 'flavorAsset' action 'getVolumeMap'.
 *
 * Usage: Get volume map by entry id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class FlavorAssetGetVolumeMapAction extends KalturaFileRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorasset' },
            action: { type: 'c', default: 'getVolumeMap' },
            flavorId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    FlavorAssetGetVolumeMapAction.prototype.flavorId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yQXNzZXRHZXRWb2x1bWVNYXBBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0ZsYXZvckFzc2V0R2V0Vm9sdW1lTWFwQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWNyRixNQUFNLG9DQUFxQyxTQUFRLGtCQUFrQjs7OztJQUlqRSxZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1lBQ2pELFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhRmlsZVJlcXVlc3QsIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhdm9yQXNzZXRHZXRWb2x1bWVNYXBBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3Mge1xuICAgIGZsYXZvcklkIDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZmxhdm9yQXNzZXQnIGFjdGlvbiAnZ2V0Vm9sdW1lTWFwJy5cbiAqXG4gKiBVc2FnZTogR2V0IHZvbHVtZSBtYXAgYnkgZW50cnkgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEZsYXZvckFzc2V0R2V0Vm9sdW1lTWFwQWN0aW9uIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0IHtcblxuICAgIGZsYXZvcklkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEZsYXZvckFzc2V0R2V0Vm9sdW1lTWFwQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2ZsYXZvcmFzc2V0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0Vm9sdW1lTWFwJyB9LFxuXHRcdFx0XHRmbGF2b3JJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=