/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaDistributionAction } from './KalturaDistributionAction';
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function EntryDistributionServeReturnedDataActionArgs() { }
/** @type {?} */
EntryDistributionServeReturnedDataActionArgs.prototype.id;
/** @type {?} */
EntryDistributionServeReturnedDataActionArgs.prototype.actionType;
/**
 * Build request payload for service 'entryDistribution' action 'serveReturnedData'.
 *
 * Usage: Serves entry distribution returned data
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class EntryDistributionServeReturnedDataAction extends KalturaFileRequest {
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
            service: { type: 'c', default: 'contentdistribution_entrydistribution' },
            action: { type: 'c', default: 'serveReturnedData' },
            id: { type: 'n' },
            actionType: { type: 'en', subTypeConstructor: KalturaDistributionAction, subType: 'KalturaDistributionAction' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    EntryDistributionServeReturnedDataAction.prototype.id;
    /** @type {?} */
    EntryDistributionServeReturnedDataAction.prototype.actionType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlEaXN0cmlidXRpb25TZXJ2ZVJldHVybmVkRGF0YUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRW50cnlEaXN0cmlidXRpb25TZXJ2ZVJldHVybmVkRGF0YUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVyRixNQUFNLCtDQUFnRCxTQUFRLGtCQUFrQjs7OztJQUs1RSxZQUFZLElBQW1EO1FBRTNELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUN2RixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUN0RCxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1NBQzFHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbiB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsZVJlcXVlc3QsIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLWZpbGUtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnlEaXN0cmlidXRpb25TZXJ2ZVJldHVybmVkRGF0YUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdGFjdGlvblR5cGUgOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZW50cnlEaXN0cmlidXRpb24nIGFjdGlvbiAnc2VydmVSZXR1cm5lZERhdGEnLlxuICpcbiAqIFVzYWdlOiBTZXJ2ZXMgZW50cnkgZGlzdHJpYnV0aW9uIHJldHVybmVkIGRhdGFcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEVudHJ5RGlzdHJpYnV0aW9uU2VydmVSZXR1cm5lZERhdGFBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3Qge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cdGFjdGlvblR5cGUgOiBLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEVudHJ5RGlzdHJpYnV0aW9uU2VydmVSZXR1cm5lZERhdGFBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udGVudGRpc3RyaWJ1dGlvbl9lbnRyeWRpc3RyaWJ1dGlvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlUmV0dXJuZWREYXRhJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhY3Rpb25UeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvbkFjdGlvbiwgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uQWN0aW9uJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=