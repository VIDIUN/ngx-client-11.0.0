/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * Build request payload for service 'media' action 'getMrss'.
 *
 * Usage: Get MRSS by entry id
 * XML will return as an escaped string
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
MediaGetMrssAction = /** @class */ (function (_super) {
    tslib_1.__extends(MediaGetMrssAction, _super);
    function MediaGetMrssAction(data) {
        var _this = _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
        if (typeof _this.extendingItemsArray === 'undefined')
            _this.extendingItemsArray = [];
        return _this;
    }
    /**
     * @return {?}
     */
    MediaGetMrssAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'getMrss' },
            entryId: { type: 's' },
            extendingItemsArray: { type: 'a', subTypeConstructor: KalturaExtendingItemMrssParameter, subType: 'KalturaExtendingItemMrssParameter' },
            features: { type: 's' }
        });
        return result;
    };
    return MediaGetMrssAction;
}(KalturaRequest));
/**
 * Build request payload for service 'media' action 'getMrss'.
 *
 * Usage: Get MRSS by entry id
 * XML will return as an escaped string
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { MediaGetMrssAction };
if (false) {
    /** @type {?} */
    MediaGetMrssAction.prototype.entryId;
    /** @type {?} */
    MediaGetMrssAction.prototype.extendingItemsArray;
    /** @type {?} */
    MediaGetMrssAction.prototype.features;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFHZXRNcnNzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZWRpYUdldE1yc3NBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCeEU7Ozs7Ozs7OztBQUFBO0lBQXdDLDhDQUFzQjtJQU0xRCw0QkFBWSxJQUE2QjtRQUF6QyxZQUVJLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQyxTQUV2RjtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLG1CQUFtQixLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7O0tBQ3RGOzs7O0lBRVMseUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQ3ZELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUM1QyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxpQ0FBaUMsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDM0ksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZCQWhETDtFQXNCd0MsY0FBYyxFQTJCckQsQ0FBQTs7Ozs7Ozs7OztBQTNCRCw4QkEyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlciB9IGZyb20gJy4vS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhR2V0TXJzc0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRleHRlbmRpbmdJdGVtc0FycmF5PyA6IEthbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlcltdO1xuXHRmZWF0dXJlcz8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdtZWRpYScgYWN0aW9uICdnZXRNcnNzJy5cbiAqXG4gKiBVc2FnZTogR2V0IE1SU1MgYnkgZW50cnkgaWRcbiAqIFhNTCB3aWxsIHJldHVybiBhcyBhbiBlc2NhcGVkIHN0cmluZ1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHN0cmluZ1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTWVkaWFHZXRNcnNzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8c3RyaW5nPiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRleHRlbmRpbmdJdGVtc0FycmF5IDogS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyW107XG5cdGZlYXR1cmVzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IE1lZGlhR2V0TXJzc0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3MnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5leHRlbmRpbmdJdGVtc0FycmF5ID09PSAndW5kZWZpbmVkJykgdGhpcy5leHRlbmRpbmdJdGVtc0FycmF5ID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWVkaWEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRNcnNzJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGV4dGVuZGluZ0l0ZW1zQXJyYXkgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXInIH0sXG5cdFx0XHRcdGZlYXR1cmVzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==