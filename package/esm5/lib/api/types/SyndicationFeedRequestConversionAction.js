/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SyndicationFeedRequestConversionActionArgs() { }
/** @type {?} */
SyndicationFeedRequestConversionActionArgs.prototype.feedId;
/**
 * Build request payload for service 'syndicationFeed' action 'requestConversion'.
 *
 * Usage: request conversion for all entries that doesnt have the required flavor param
 * returns a comma-separated ids of conversion jobs
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'syndicationFeed' action 'requestConversion'.
 *
 * Usage: request conversion for all entries that doesnt have the required flavor param
 * returns a comma-separated ids of conversion jobs
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
SyndicationFeedRequestConversionAction = /** @class */ (function (_super) {
    tslib_1.__extends(SyndicationFeedRequestConversionAction, _super);
    function SyndicationFeedRequestConversionAction(data) {
        return _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    SyndicationFeedRequestConversionAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'syndicationfeed' },
            action: { type: 'c', default: 'requestConversion' },
            feedId: { type: 's' }
        });
        return result;
    };
    return SyndicationFeedRequestConversionAction;
}(KalturaRequest));
/**
 * Build request payload for service 'syndicationFeed' action 'requestConversion'.
 *
 * Usage: request conversion for all entries that doesnt have the required flavor param
 * returns a comma-separated ids of conversion jobs
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { SyndicationFeedRequestConversionAction };
if (false) {
    /** @type {?} */
    SyndicationFeedRequestConversionAction.prototype.feedId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luZGljYXRpb25GZWVkUmVxdWVzdENvbnZlcnNpb25BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1N5bmRpY2F0aW9uRmVlZFJlcXVlc3RDb252ZXJzaW9uQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7O0FBQUE7SUFBNEQsa0VBQXNCO0lBSTlFLGdEQUFZLElBQWlEO2VBRXpELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQztLQUN2Rjs7OztJQUVTLDZEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQ3RELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lEQXhDTDtFQW1CNEQsY0FBYyxFQXNCekUsQ0FBQTs7Ozs7Ozs7OztBQXRCRCxrREFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN5bmRpY2F0aW9uRmVlZFJlcXVlc3RDb252ZXJzaW9uQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZlZWRJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3N5bmRpY2F0aW9uRmVlZCcgYWN0aW9uICdyZXF1ZXN0Q29udmVyc2lvbicuXG4gKlxuICogVXNhZ2U6IHJlcXVlc3QgY29udmVyc2lvbiBmb3IgYWxsIGVudHJpZXMgdGhhdCBkb2VzbnQgaGF2ZSB0aGUgcmVxdWlyZWQgZmxhdm9yIHBhcmFtXG4gKiByZXR1cm5zIGEgY29tbWEtc2VwYXJhdGVkIGlkcyBvZiBjb252ZXJzaW9uIGpvYnNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBzdHJpbmdcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN5bmRpY2F0aW9uRmVlZFJlcXVlc3RDb252ZXJzaW9uQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8c3RyaW5nPiB7XG5cbiAgICBmZWVkSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU3luZGljYXRpb25GZWVkUmVxdWVzdENvbnZlcnNpb25BY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3N5bmRpY2F0aW9uZmVlZCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3JlcXVlc3RDb252ZXJzaW9uJyB9LFxuXHRcdFx0XHRmZWVkSWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19