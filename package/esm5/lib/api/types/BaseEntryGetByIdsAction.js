/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryGetByIdsActionArgs() { }
/** @type {?} */
BaseEntryGetByIdsActionArgs.prototype.entryIds;
/**
 * Build request payload for service 'baseEntry' action 'getByIds'.
 *
 * Usage: Get an array of KalturaBaseEntry objects by a comma-separated list of ids
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'baseEntry' action 'getByIds'.
 *
 * Usage: Get an array of KalturaBaseEntry objects by a comma-separated list of ids
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
BaseEntryGetByIdsAction = /** @class */ (function (_super) {
    tslib_1.__extends(BaseEntryGetByIdsAction, _super);
    function BaseEntryGetByIdsAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaBaseEntry', responseConstructor: KalturaBaseEntry }) || this;
    }
    /**
     * @return {?}
     */
    BaseEntryGetByIdsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'getByIds' },
            entryIds: { type: 's' }
        });
        return result;
    };
    return BaseEntryGetByIdsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'baseEntry' action 'getByIds'.
 *
 * Usage: Get an array of KalturaBaseEntry objects by a comma-separated list of ids
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
export { BaseEntryGetByIdsAction };
if (false) {
    /** @type {?} */
    BaseEntryGetByIdsAction.prototype.entryIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5R2V0QnlJZHNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Jhc2VFbnRyeUdldEJ5SWRzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQTZDLG1EQUFrQztJQUkzRSxpQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRyxnQkFBZ0IsRUFBRyxDQUFDO0tBQ3BIOzs7O0lBRVMsOENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsV0FBVyxFQUFFO1lBQzNELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUM3QyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0NBdkNMO0VBa0I2QyxjQUFjLEVBc0IxRCxDQUFBOzs7Ozs7Ozs7QUF0QkQsbUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnkgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlRW50cnlHZXRCeUlkc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkcyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2Jhc2VFbnRyeScgYWN0aW9uICdnZXRCeUlkcycuXG4gKlxuICogVXNhZ2U6IEdldCBhbiBhcnJheSBvZiBLYWx0dXJhQmFzZUVudHJ5IG9iamVjdHMgYnkgYSBjb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBpZHNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQmFzZUVudHJ5W11cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VFbnRyeUdldEJ5SWRzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUJhc2VFbnRyeVtdPiB7XG5cbiAgICBlbnRyeUlkcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBCYXNlRW50cnlHZXRCeUlkc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ2EnLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUJhc2VFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZUVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdiYXNlZW50cnknIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRCeUlkcycgfSxcblx0XHRcdFx0ZW50cnlJZHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19