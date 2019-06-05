/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ThumbParamsAddActionArgs() { }
/** @type {?} */
ThumbParamsAddActionArgs.prototype.thumbParams;
/**
 * Build request payload for service 'thumbParams' action 'add'.
 *
 * Usage: Add new Thumb Params
 *
 * Server response type:         KalturaThumbParams
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'thumbParams' action 'add'.
 *
 * Usage: Add new Thumb Params
 *
 * Server response type:         KalturaThumbParams
 * Server failure response type: KalturaAPIException
 */
ThumbParamsAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbParamsAddAction, _super);
    function ThumbParamsAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaThumbParams', responseConstructor: KalturaThumbParams }) || this;
    }
    /**
     * @return {?}
     */
    ThumbParamsAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbparams' },
            action: { type: 'c', default: 'add' },
            thumbParams: { type: 'o', subTypeConstructor: KalturaThumbParams, subType: 'KalturaThumbParams' }
        });
        return result;
    };
    return ThumbParamsAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'thumbParams' action 'add'.
 *
 * Usage: Add new Thumb Params
 *
 * Server response type:         KalturaThumbParams
 * Server failure response type: KalturaAPIException
 */
export { ThumbParamsAddAction };
if (false) {
    /** @type {?} */
    ThumbParamsAddAction.prototype.thumbParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJQYXJhbXNBZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1RodW1iUGFyYW1zQWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQTBDLGdEQUFrQztJQUl4RSw4QkFBWSxJQUErQjtlQUV2QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRyxrQkFBa0IsRUFBRyxDQUFDO0tBQ3hIOzs7O0lBRVMsMkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQzdELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUM1RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytCQXZDTDtFQWtCMEMsY0FBYyxFQXNCdkQsQ0FBQTs7Ozs7Ozs7O0FBdEJELGdDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVGh1bWJQYXJhbXMgfSBmcm9tICcuL0thbHR1cmFUaHVtYlBhcmFtcyc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRodW1iUGFyYW1zQWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHRodW1iUGFyYW1zIDogS2FsdHVyYVRodW1iUGFyYW1zO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndGh1bWJQYXJhbXMnIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBUaHVtYiBQYXJhbXNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhVGh1bWJQYXJhbXNcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFRodW1iUGFyYW1zQWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVRodW1iUGFyYW1zPiB7XG5cbiAgICB0aHVtYlBhcmFtcyA6IEthbHR1cmFUaHVtYlBhcmFtcztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBUaHVtYlBhcmFtc0FkZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVRodW1iUGFyYW1zJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFUaHVtYlBhcmFtcyAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndGh1bWJwYXJhbXMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdHRodW1iUGFyYW1zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhVGh1bWJQYXJhbXMsIHN1YlR5cGUgOiAnS2FsdHVyYVRodW1iUGFyYW1zJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=