/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ThumbParamsDeleteActionArgs() { }
/** @type {?} */
ThumbParamsDeleteActionArgs.prototype.id;
/**
 * Build request payload for service 'thumbParams' action 'delete'.
 *
 * Usage: Delete Thumb Params by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'thumbParams' action 'delete'.
 *
 * Usage: Delete Thumb Params by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
ThumbParamsDeleteAction = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbParamsDeleteAction, _super);
    function ThumbParamsDeleteAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    ThumbParamsDeleteAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbparams' },
            action: { type: 'c', default: 'delete' },
            id: { type: 'n' }
        });
        return result;
    };
    return ThumbParamsDeleteAction;
}(KalturaRequest));
/**
 * Build request payload for service 'thumbParams' action 'delete'.
 *
 * Usage: Delete Thumb Params by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { ThumbParamsDeleteAction };
if (false) {
    /** @type {?} */
    ThumbParamsDeleteAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJQYXJhbXNEZWxldGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1RodW1iUGFyYW1zRGVsZXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQTZDLG1EQUFvQjtJQUk3RCxpQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyw4Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDN0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDVixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQXZDTDtFQWtCNkMsY0FBYyxFQXNCMUQsQ0FBQTs7Ozs7Ozs7O0FBdEJELG1DQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGh1bWJQYXJhbXNEZWxldGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd0aHVtYlBhcmFtcycgYWN0aW9uICdkZWxldGUnLlxuICpcbiAqIFVzYWdlOiBEZWxldGUgVGh1bWIgUGFyYW1zIGJ5IElEXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgdm9pZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVGh1bWJQYXJhbXNEZWxldGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDx2b2lkPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBUaHVtYlBhcmFtc0RlbGV0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3YnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndGh1bWJwYXJhbXMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkZWxldGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==