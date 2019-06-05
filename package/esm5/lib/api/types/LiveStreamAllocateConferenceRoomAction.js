/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRoomDetails } from './KalturaRoomDetails';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStreamAllocateConferenceRoomActionArgs() { }
/** @type {?} */
LiveStreamAllocateConferenceRoomActionArgs.prototype.entryId;
/**
 * Build request payload for service 'liveStream' action 'allocateConferenceRoom'.
 *
 * Usage: Allocates a conference room or returns ones that has already been allocated
 *
 * Server response type:         KalturaRoomDetails
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveStream' action 'allocateConferenceRoom'.
 *
 * Usage: Allocates a conference room or returns ones that has already been allocated
 *
 * Server response type:         KalturaRoomDetails
 * Server failure response type: KalturaAPIException
 */
LiveStreamAllocateConferenceRoomAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStreamAllocateConferenceRoomAction, _super);
    function LiveStreamAllocateConferenceRoomAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaRoomDetails', responseConstructor: KalturaRoomDetails }) || this;
    }
    /**
     * @return {?}
     */
    LiveStreamAllocateConferenceRoomAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'allocateConferenceRoom' },
            entryId: { type: 's' }
        });
        return result;
    };
    return LiveStreamAllocateConferenceRoomAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveStream' action 'allocateConferenceRoom'.
 *
 * Usage: Allocates a conference room or returns ones that has already been allocated
 *
 * Server response type:         KalturaRoomDetails
 * Server failure response type: KalturaAPIException
 */
export { LiveStreamAllocateConferenceRoomAction };
if (false) {
    /** @type {?} */
    LiveStreamAllocateConferenceRoomAction.prototype.entryId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbUFsbG9jYXRlQ29uZmVyZW5jZVJvb21BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVTdHJlYW1BbGxvY2F0ZUNvbmZlcmVuY2VSb29tQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQTRELGtFQUFrQztJQUkxRixnREFBWSxJQUFpRDtlQUV6RCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRyxrQkFBa0IsRUFBRyxDQUFDO0tBQ3hIOzs7O0lBRVMsNkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQzVELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lEQXZDTDtFQWtCNEQsY0FBYyxFQXNCekUsQ0FBQTs7Ozs7Ozs7O0FBdEJELGtEQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUm9vbURldGFpbHMgfSBmcm9tICcuL0thbHR1cmFSb29tRGV0YWlscyc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpdmVTdHJlYW1BbGxvY2F0ZUNvbmZlcmVuY2VSb29tQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdsaXZlU3RyZWFtJyBhY3Rpb24gJ2FsbG9jYXRlQ29uZmVyZW5jZVJvb20nLlxuICpcbiAqIFVzYWdlOiBBbGxvY2F0ZXMgYSBjb25mZXJlbmNlIHJvb20gb3IgcmV0dXJucyBvbmVzIHRoYXQgaGFzIGFscmVhZHkgYmVlbiBhbGxvY2F0ZWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUm9vbURldGFpbHNcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW1BbGxvY2F0ZUNvbmZlcmVuY2VSb29tQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVJvb21EZXRhaWxzPiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IExpdmVTdHJlYW1BbGxvY2F0ZUNvbmZlcmVuY2VSb29tQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUm9vbURldGFpbHMnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJvb21EZXRhaWxzICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXZlc3RyZWFtJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWxsb2NhdGVDb25mZXJlbmNlUm9vbScgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=