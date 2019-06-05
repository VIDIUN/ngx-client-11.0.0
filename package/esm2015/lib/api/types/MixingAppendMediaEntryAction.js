/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaMixEntry } from './KalturaMixEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MixingAppendMediaEntryActionArgs() { }
/** @type {?} */
MixingAppendMediaEntryActionArgs.prototype.mixEntryId;
/** @type {?} */
MixingAppendMediaEntryActionArgs.prototype.mediaEntryId;
/**
 * Build request payload for service 'mixing' action 'appendMediaEntry'.
 *
 * Usage: Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 */
export class MixingAppendMediaEntryAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaMixEntry', responseConstructor: KalturaMixEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'mixing' },
            action: { type: 'c', default: 'appendMediaEntry' },
            mixEntryId: { type: 's' },
            mediaEntryId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    MixingAppendMediaEntryAction.prototype.mixEntryId;
    /** @type {?} */
    MixingAppendMediaEntryAction.prototype.mediaEntryId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWl4aW5nQXBwZW5kTWVkaWFFbnRyeUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTWl4aW5nQXBwZW5kTWVkaWFFbnRyeUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0sbUNBQW9DLFNBQVEsY0FBK0I7Ozs7SUFLN0UsWUFBWSxJQUF1QztRQUUvQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUMsQ0FBQztLQUNuSDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQ3hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JELFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1peEVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhTWl4RW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNaXhpbmdBcHBlbmRNZWRpYUVudHJ5QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIG1peEVudHJ5SWQgOiBzdHJpbmc7XG5cdG1lZGlhRW50cnlJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21peGluZycgYWN0aW9uICdhcHBlbmRNZWRpYUVudHJ5Jy5cbiAqXG4gKiBVc2FnZTogQXBwZW5kcyBhIG1lZGlhIGVudHJ5IHRvIGEgdGhlIGVuZCBvZiB0aGUgbWl4IHRpbWVsaW5lLCB0aGlzIHdpbGwgc2F2ZSB0aGUgbWl4IHRpbWVsaW5lIGFzIGEgbmV3IHZlcnNpb25cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTWl4RW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1peGluZ0FwcGVuZE1lZGlhRW50cnlBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWl4RW50cnk+IHtcblxuICAgIG1peEVudHJ5SWQgOiBzdHJpbmc7XG5cdG1lZGlhRW50cnlJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNaXhpbmdBcHBlbmRNZWRpYUVudHJ5QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTWl4RW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1peEVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdtaXhpbmcnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhcHBlbmRNZWRpYUVudHJ5JyB9LFxuXHRcdFx0XHRtaXhFbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhRW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=