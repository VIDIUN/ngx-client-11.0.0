/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaExtendingItemMrssParameter } from './KalturaExtendingItemMrssParameter';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MediaGetMrssActionArgs() { }
/** @type {?} */
MediaGetMrssActionArgs.prototype.entryId;
/** @type {?|undefined} */
MediaGetMrssActionArgs.prototype.extendingItemsArray;
/** @type {?|undefined} */
MediaGetMrssActionArgs.prototype.features;
/**
 * Build request payload for service 'media' action 'getMrss'.
 *
 * Usage: Get MRSS by entry id
 * XML will return as an escaped string
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class MediaGetMrssAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 's', responseSubType: '', responseConstructor: null });
        if (typeof this.extendingItemsArray === 'undefined')
            this.extendingItemsArray = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'getMrss' },
            entryId: { type: 's' },
            extendingItemsArray: { type: 'a', subTypeConstructor: KalturaExtendingItemMrssParameter, subType: 'KalturaExtendingItemMrssParameter' },
            features: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    MediaGetMrssAction.prototype.entryId;
    /** @type {?} */
    MediaGetMrssAction.prototype.extendingItemsArray;
    /** @type {?} */
    MediaGetMrssAction.prototype.features;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFHZXRNcnNzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZWRpYUdldE1yc3NBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4RSxNQUFNLHlCQUEwQixTQUFRLGNBQXNCOzs7O0lBTTFELFlBQVksSUFBNkI7UUFFckMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7S0FDdEY7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUN2RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUU7WUFDNUMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQzNJLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXIgfSBmcm9tICcuL0thbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUdldE1yc3NBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0ZXh0ZW5kaW5nSXRlbXNBcnJheT8gOiBLYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXJbXTtcblx0ZmVhdHVyZXM/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbWVkaWEnIGFjdGlvbiAnZ2V0TXJzcycuXG4gKlxuICogVXNhZ2U6IEdldCBNUlNTIGJ5IGVudHJ5IGlkXG4gKiBYTUwgd2lsbCByZXR1cm4gYXMgYW4gZXNjYXBlZCBzdHJpbmdcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBzdHJpbmdcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1lZGlhR2V0TXJzc0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PHN0cmluZz4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0ZXh0ZW5kaW5nSXRlbXNBcnJheSA6IEthbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlcltdO1xuXHRmZWF0dXJlcyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZWRpYUdldE1yc3NBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXh0ZW5kaW5nSXRlbXNBcnJheSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZXh0ZW5kaW5nSXRlbXNBcnJheSA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ21lZGlhJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0TXJzcycgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRleHRlbmRpbmdJdGVtc0FycmF5IDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyJyB9LFxuXHRcdFx0XHRmZWF0dXJlcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=