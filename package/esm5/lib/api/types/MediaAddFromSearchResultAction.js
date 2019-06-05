/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMediaEntry } from './KalturaMediaEntry';
import { KalturaSearchResult } from './KalturaSearchResult';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MediaAddFromSearchResultActionArgs() { }
/** @type {?|undefined} */
MediaAddFromSearchResultActionArgs.prototype.mediaEntry;
/** @type {?|undefined} */
MediaAddFromSearchResultActionArgs.prototype.searchResult;
/**
 * Build request payload for service 'media' action 'addFromSearchResult'.
 *
 * Usage: Adds new media entry by importing the media file from a search provider.
 * This action should be used with the search service result
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'media' action 'addFromSearchResult'.
 *
 * Usage: Adds new media entry by importing the media file from a search provider.
 * This action should be used with the search service result
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
MediaAddFromSearchResultAction = /** @class */ (function (_super) {
    tslib_1.__extends(MediaAddFromSearchResultAction, _super);
    function MediaAddFromSearchResultAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMediaEntry', responseConstructor: KalturaMediaEntry }) || this;
    }
    /**
     * @return {?}
     */
    MediaAddFromSearchResultAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'media' },
            action: { type: 'c', default: 'addFromSearchResult' },
            mediaEntry: { type: 'o', subTypeConstructor: KalturaMediaEntry, subType: 'KalturaMediaEntry' },
            searchResult: { type: 'o', subTypeConstructor: KalturaSearchResult, subType: 'KalturaSearchResult' }
        });
        return result;
    };
    return MediaAddFromSearchResultAction;
}(KalturaRequest));
/**
 * Build request payload for service 'media' action 'addFromSearchResult'.
 *
 * Usage: Adds new media entry by importing the media file from a search provider.
 * This action should be used with the search service result
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 */
export { MediaAddFromSearchResultAction };
if (false) {
    /** @type {?} */
    MediaAddFromSearchResultAction.prototype.mediaEntry;
    /** @type {?} */
    MediaAddFromSearchResultAction.prototype.searchResult;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFBZGRGcm9tU2VhcmNoUmVzdWx0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9NZWRpYUFkZEZyb21TZWFyY2hSZXN1bHRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7Ozs7QUFBQTtJQUFvRCwwREFBaUM7SUFLakYsd0NBQVksSUFBMEM7ZUFFbEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUN2RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RCxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNsRyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtTQUMvRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQTVDTDtFQXFCb0QsY0FBYyxFQXdCakUsQ0FBQTs7Ozs7Ozs7OztBQXhCRCwwQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhRW50cnkgfSBmcm9tICcuL0thbHR1cmFNZWRpYUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaFJlc3VsdCB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaFJlc3VsdCc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUFkZEZyb21TZWFyY2hSZXN1bHRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgbWVkaWFFbnRyeT8gOiBLYWx0dXJhTWVkaWFFbnRyeTtcblx0c2VhcmNoUmVzdWx0PyA6IEthbHR1cmFTZWFyY2hSZXN1bHQ7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdtZWRpYScgYWN0aW9uICdhZGRGcm9tU2VhcmNoUmVzdWx0Jy5cbiAqXG4gKiBVc2FnZTogQWRkcyBuZXcgbWVkaWEgZW50cnkgYnkgaW1wb3J0aW5nIHRoZSBtZWRpYSBmaWxlIGZyb20gYSBzZWFyY2ggcHJvdmlkZXIuXG4gKiBUaGlzIGFjdGlvbiBzaG91bGQgYmUgdXNlZCB3aXRoIHRoZSBzZWFyY2ggc2VydmljZSByZXN1bHRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTWVkaWFFbnRyeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTWVkaWFBZGRGcm9tU2VhcmNoUmVzdWx0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYU1lZGlhRW50cnk+IHtcblxuICAgIG1lZGlhRW50cnkgOiBLYWx0dXJhTWVkaWFFbnRyeTtcblx0c2VhcmNoUmVzdWx0IDogS2FsdHVyYVNlYXJjaFJlc3VsdDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogTWVkaWFBZGRGcm9tU2VhcmNoUmVzdWx0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTWVkaWFFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbWVkaWEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRGcm9tU2VhcmNoUmVzdWx0JyB9LFxuXHRcdFx0XHRtZWRpYUVudHJ5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeSwgc3ViVHlwZSA6ICdLYWx0dXJhTWVkaWFFbnRyeScgfSxcblx0XHRcdFx0c2VhcmNoUmVzdWx0IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoUmVzdWx0LCBzdWJUeXBlIDogJ0thbHR1cmFTZWFyY2hSZXN1bHQnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==