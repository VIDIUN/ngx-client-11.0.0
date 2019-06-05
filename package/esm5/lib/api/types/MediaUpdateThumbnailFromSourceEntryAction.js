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
export function MediaUpdateThumbnailFromSourceEntryActionArgs() { }
/** @type {?} */
MediaUpdateThumbnailFromSourceEntryActionArgs.prototype.entryId;
/** @type {?} */
MediaUpdateThumbnailFromSourceEntryActionArgs.prototype.sourceEntryId;
/** @type {?} */
MediaUpdateThumbnailFromSourceEntryActionArgs.prototype.timeOffset;
/** @type {?|undefined} */
MediaUpdateThumbnailFromSourceEntryActionArgs.prototype.flavorParamsId;
/**
 * Build request payload for service 'media' action 'updateThumbnailFromSourceEntry'.
 *
 * Usage: Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'media' action 'updateThumbnailFromSourceEntry'.
 *
 * Usage: Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
MediaUpdateThumbnailFromSourceEntryAction = /** @class */ (function (_super) {
    tslib_1.__extends(MediaUpdateThumbnailFromSourceEntryAction, _super);
    function MediaUpdateThumbnailFromSourceEntryAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry }) || this;
    }
    /**
     * @return {?}
     */
    MediaUpdateThumbnailFromSourceEntryAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'updateThumbnailFromSourceEntry' },
            entryId: { type: 's' },
            sourceEntryId: { type: 's' },
            timeOffset: { type: 'n' },
            flavorParamsId: { type: 'n' }
        });
        return result;
    };
    return MediaUpdateThumbnailFromSourceEntryAction;
}(KalturaRequest));
/**
 * Build request payload for service 'media' action 'updateThumbnailFromSourceEntry'.
 *
 * Usage: Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 * If flavor params id not specified, source flavor will be used by default
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export { MediaUpdateThumbnailFromSourceEntryAction };
if (false) {
    /** @type {?} */
    MediaUpdateThumbnailFromSourceEntryAction.prototype.entryId;
    /** @type {?} */
    MediaUpdateThumbnailFromSourceEntryAction.prototype.sourceEntryId;
    /** @type {?} */
    MediaUpdateThumbnailFromSourceEntryAction.prototype.timeOffset;
    /** @type {?} */
    MediaUpdateThumbnailFromSourceEntryAction.prototype.flavorParamsId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFVcGRhdGVUaHVtYm5haWxGcm9tU291cmNlRW50cnlBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL01lZGlhVXBkYXRlVGh1bWJuYWlsRnJvbVNvdXJjZUVudHJ5QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCeEU7Ozs7Ozs7OztBQUFBO0lBQStELHFFQUFpQztJQU81RixtREFBWSxJQUFvRDtlQUU1RCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDO0tBQ3RIOzs7O0lBRVMsZ0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQ3ZELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25FLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvREFqREw7RUFzQitELGNBQWMsRUE0QjVFLENBQUE7Ozs7Ozs7Ozs7QUE1QkQscURBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhTWVkaWFFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhVXBkYXRlVGh1bWJuYWlsRnJvbVNvdXJjZUVudHJ5QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHNvdXJjZUVudHJ5SWQgOiBzdHJpbmc7XG5cdHRpbWVPZmZzZXQgOiBudW1iZXI7XG5cdGZsYXZvclBhcmFtc0lkPyA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21lZGlhJyBhY3Rpb24gJ3VwZGF0ZVRodW1ibmFpbEZyb21Tb3VyY2VFbnRyeScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBtZWRpYSBlbnRyeSB0aHVtYm5haWwgZnJvbSBhIGRpZmZlcmVudCBlbnRyeSBieSBhIHNwZWNpZmllZCB0aW1lIG9mZnNldCAoSW4gc2Vjb25kcylcbiAqIElmIGZsYXZvciBwYXJhbXMgaWQgbm90IHNwZWNpZmllZCwgc291cmNlIGZsYXZvciB3aWxsIGJlIHVzZWQgYnkgZGVmYXVsdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFNZWRpYUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBNZWRpYVVwZGF0ZVRodW1ibmFpbEZyb21Tb3VyY2VFbnRyeUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFNZWRpYUVudHJ5PiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRzb3VyY2VFbnRyeUlkIDogc3RyaW5nO1xuXHR0aW1lT2Zmc2V0IDogbnVtYmVyO1xuXHRmbGF2b3JQYXJhbXNJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBNZWRpYVVwZGF0ZVRodW1ibmFpbEZyb21Tb3VyY2VFbnRyeUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1lZGlhRW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1lZGlhRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ21lZGlhJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlVGh1bWJuYWlsRnJvbVNvdXJjZUVudHJ5JyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNvdXJjZUVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGltZU9mZnNldCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=