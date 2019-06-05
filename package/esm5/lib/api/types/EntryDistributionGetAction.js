/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EntryDistributionGetActionArgs() { }
/** @type {?} */
EntryDistributionGetActionArgs.prototype.id;
/**
 * Build request payload for service 'entryDistribution' action 'get'.
 *
 * Usage: Get Entry Distribution by id
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'entryDistribution' action 'get'.
 *
 * Usage: Get Entry Distribution by id
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
EntryDistributionGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(EntryDistributionGetAction, _super);
    function EntryDistributionGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaEntryDistribution', responseConstructor: KalturaEntryDistribution }) || this;
    }
    /**
     * @return {?}
     */
    EntryDistributionGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_entrydistribution' },
            action: { type: 'c', default: 'get' },
            id: { type: 'n' }
        });
        return result;
    };
    return EntryDistributionGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'entryDistribution' action 'get'.
 *
 * Usage: Get Entry Distribution by id
 *
 * Server response type:         KalturaEntryDistribution
 * Server failure response type: KalturaAPIException
 */
export { EntryDistributionGetAction };
if (false) {
    /** @type {?} */
    EntryDistributionGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlEaXN0cmlidXRpb25HZXRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0VudHJ5RGlzdHJpYnV0aW9uR2V0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQWdELHNEQUF3QztJQUlwRixvQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRyx3QkFBd0IsRUFBRyxDQUFDO0tBQ3BJOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUNBQXVDLEVBQUU7WUFDdkYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDVixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQXZDTDtFQWtCZ0QsY0FBYyxFQXNCN0QsQ0FBQTs7Ozs7Ozs7O0FBdEJELHNDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlEaXN0cmlidXRpb24gfSBmcm9tICcuL0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbic7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudHJ5RGlzdHJpYnV0aW9uR2V0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZW50cnlEaXN0cmlidXRpb24nIGFjdGlvbiAnZ2V0Jy5cbiAqXG4gKiBVc2FnZTogR2V0IEVudHJ5IERpc3RyaWJ1dGlvbiBieSBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRW50cnlEaXN0cmlidXRpb25HZXRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRW50cnlEaXN0cmlidXRpb24+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEVudHJ5RGlzdHJpYnV0aW9uR2V0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb24nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjb250ZW50ZGlzdHJpYnV0aW9uX2VudHJ5ZGlzdHJpYnV0aW9uJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=