/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MediaAddFromUrlActionArgs() { }
/** @type {?} */
MediaAddFromUrlActionArgs.prototype.mediaEntry;
/** @type {?} */
MediaAddFromUrlActionArgs.prototype.url;
/**
 * Build request payload for service 'media' action 'addFromUrl'.
 *
 * Usage: Adds new media entry by importing an HTTP or FTP URL.
 * The entry will be queued for import and then for conversion
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export class MediaAddFromUrlAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'addFromUrl' },
            mediaEntry: { type: 'o', subTypeConstructor: KalturaMediaEntry, subType: 'KalturaMediaEntry' },
            url: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    MediaAddFromUrlAction.prototype.mediaEntry;
    /** @type {?} */
    MediaAddFromUrlAction.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFBZGRGcm9tVXJsQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZWRpYUFkZEZyb21VcmxBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEUsTUFBTSw0QkFBNkIsU0FBUSxjQUFpQzs7OztJQUt4RSxZQUFZLElBQWdDO1FBRXhDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDLENBQUM7S0FDdkg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUN2RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDL0MsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbEcsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNYLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWVkaWFFbnRyeSB9IGZyb20gJy4vS2FsdHVyYU1lZGlhRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUFkZEZyb21VcmxBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbWVkaWFFbnRyeSA6IEthbHR1cmFNZWRpYUVudHJ5O1xuXHR1cmwgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdtZWRpYScgYWN0aW9uICdhZGRGcm9tVXJsJy5cbiAqXG4gKiBVc2FnZTogQWRkcyBuZXcgbWVkaWEgZW50cnkgYnkgaW1wb3J0aW5nIGFuIEhUVFAgb3IgRlRQIFVSTC5cbiAqIFRoZSBlbnRyeSB3aWxsIGJlIHF1ZXVlZCBmb3IgaW1wb3J0IGFuZCB0aGVuIGZvciBjb252ZXJzaW9uXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYU1lZGlhRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1lZGlhQWRkRnJvbVVybEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFNZWRpYUVudHJ5PiB7XG5cbiAgICBtZWRpYUVudHJ5IDogS2FsdHVyYU1lZGlhRW50cnk7XG5cdHVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZWRpYUFkZEZyb21VcmxBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYUVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdtZWRpYScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZEZyb21VcmwnIH0sXG5cdFx0XHRcdG1lZGlhRW50cnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYUVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5JyB9LFxuXHRcdFx0XHR1cmwgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19