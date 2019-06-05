/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MediaUpdateActionArgs() { }
/** @type {?} */
MediaUpdateActionArgs.prototype.entryId;
/** @type {?} */
MediaUpdateActionArgs.prototype.mediaEntry;
/**
 * Build request payload for service 'media' action 'update'.
 *
 * Usage: Update media entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'media' action 'update'.
 *
 * Usage: Update media entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
MediaUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(MediaUpdateAction, _super);
    function MediaUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry }) || this;
    }
    /**
     * @return {?}
     */
    MediaUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'update' },
            entryId: { type: 's' },
            mediaEntry: { type: 'o', subTypeConstructor: KalturaMediaEntry, subType: 'KalturaMediaEntry' }
        });
        return result;
    };
    return MediaUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'media' action 'update'.
 *
 * Usage: Update media entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export { MediaUpdateAction };
if (false) {
    /** @type {?} */
    MediaUpdateAction.prototype.entryId;
    /** @type {?} */
    MediaUpdateAction.prototype.mediaEntry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFVcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL01lZGlhVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBdUMsNkNBQWlDO0lBS3BFLDJCQUFZLElBQTRCO2VBRXBDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1CQUFtQixFQUFFLG1CQUFtQixFQUFHLGlCQUFpQixFQUFHLENBQUM7S0FDdEg7Ozs7SUFFUyx3Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDdkQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7U0FDekYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0QkExQ0w7RUFtQnVDLGNBQWMsRUF3QnBELENBQUE7Ozs7Ozs7OztBQXhCRCw2QkF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhRW50cnkgfSBmcm9tICcuL0thbHR1cmFNZWRpYUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0bWVkaWFFbnRyeSA6IEthbHR1cmFNZWRpYUVudHJ5O1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWVkaWEnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIG1lZGlhIGVudHJ5LiBPbmx5IHRoZSBwcm9wZXJ0aWVzIHRoYXQgd2VyZSBzZXQgd2lsbCBiZSB1cGRhdGVkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1lZGlhRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1lZGlhVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYU1lZGlhRW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdG1lZGlhRW50cnkgOiBLYWx0dXJhTWVkaWFFbnRyeTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZWRpYVVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1lZGlhRW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1lZGlhRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ21lZGlhJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhRW50cnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYUVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=