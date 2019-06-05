/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaThumbParamsOutput } from './KalturaThumbParamsOutput';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ThumbParamsOutputGetActionArgs() { }
/** @type {?} */
ThumbParamsOutputGetActionArgs.prototype.id;
/**
 * Build request payload for service 'thumbParamsOutput' action 'get'.
 *
 * Usage: Get thumb params output object by ID
 *
 * Server response type:         KalturaThumbParamsOutput
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'thumbParamsOutput' action 'get'.
 *
 * Usage: Get thumb params output object by ID
 *
 * Server response type:         KalturaThumbParamsOutput
 * Server failure response type: KalturaAPIException
 */
ThumbParamsOutputGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbParamsOutputGetAction, _super);
    function ThumbParamsOutputGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaThumbParamsOutput', responseConstructor: KalturaThumbParamsOutput }) || this;
    }
    /**
     * @return {?}
     */
    ThumbParamsOutputGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbparamsoutput' },
            action: { type: 'c', default: 'get' },
            id: { type: 'n' }
        });
        return result;
    };
    return ThumbParamsOutputGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'thumbParamsOutput' action 'get'.
 *
 * Usage: Get thumb params output object by ID
 *
 * Server response type:         KalturaThumbParamsOutput
 * Server failure response type: KalturaAPIException
 */
export { ThumbParamsOutputGetAction };
if (false) {
    /** @type {?} */
    ThumbParamsOutputGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJQYXJhbXNPdXRwdXRHZXRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1RodW1iUGFyYW1zT3V0cHV0R2V0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQWdELHNEQUF3QztJQUlwRixvQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRyx3QkFBd0IsRUFBRyxDQUFDO0tBQ3BJOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDVixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FDQXZDTDtFQWtCZ0QsY0FBYyxFQXNCN0QsQ0FBQTs7Ozs7Ozs7O0FBdEJELHNDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXQgfSBmcm9tICcuL0thbHR1cmFUaHVtYlBhcmFtc091dHB1dCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRodW1iUGFyYW1zT3V0cHV0R2V0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndGh1bWJQYXJhbXNPdXRwdXQnIGFjdGlvbiAnZ2V0Jy5cbiAqXG4gKiBVc2FnZTogR2V0IHRodW1iIHBhcmFtcyBvdXRwdXQgb2JqZWN0IGJ5IElEXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVRodW1iUGFyYW1zT3V0cHV0XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUaHVtYlBhcmFtc091dHB1dEdldEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFUaHVtYlBhcmFtc091dHB1dD4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVGh1bWJQYXJhbXNPdXRwdXRHZXRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFUaHVtYlBhcmFtc091dHB1dCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhVGh1bWJQYXJhbXNPdXRwdXQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3RodW1icGFyYW1zb3V0cHV0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=