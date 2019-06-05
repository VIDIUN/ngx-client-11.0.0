/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaMediaEntryFilter } from './KalturaMediaEntryFilter';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MixingCountActionArgs() { }
/** @type {?|undefined} */
MixingCountActionArgs.prototype.filter;
/**
 * Build request payload for service 'mixing' action 'count'.
 *
 * Usage: Count mix entries by filter
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export class MixingCountAction extends KalturaRequest {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data, { responseType: 'n', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'mixing' },
            action: { type: 'c', default: 'count' },
            filter: { type: 'o', subTypeConstructor: KalturaMediaEntryFilter, subType: 'KalturaMediaEntryFilter' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    MixingCountAction.prototype.filter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4aW5nQ291bnRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL01peGluZ0NvdW50QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEUsTUFBTSx3QkFBeUIsU0FBUSxjQUFzQjs7OztJQUl6RCxZQUFZLElBQTZCO1FBRXJDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUN4Rjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQ3hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUMxQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtTQUNqRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhTWVkaWFFbnRyeUZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNaXhpbmdDb3VudEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmaWx0ZXI/IDogS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdtaXhpbmcnIGFjdGlvbiAnY291bnQnLlxuICpcbiAqIFVzYWdlOiBDb3VudCBtaXggZW50cmllcyBieSBmaWx0ZXJcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBudW1iZXJcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1peGluZ0NvdW50QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8bnVtYmVyPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogTWl4aW5nQ291bnRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICduJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ21peGluZycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvdW50JyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5RmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=