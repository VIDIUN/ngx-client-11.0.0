/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPlaylist } from './KalturaPlaylist';
import { KalturaPlaylistType } from './KalturaPlaylistType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PlaylistGetStatsFromContentActionArgs() { }
/** @type {?} */
PlaylistGetStatsFromContentActionArgs.prototype.playlistType;
/** @type {?} */
PlaylistGetStatsFromContentActionArgs.prototype.playlistContent;
/**
 * Build request payload for service 'playlist' action 'getStatsFromContent'.
 *
 * Usage: Retrieve playlist statistics
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'playlist' action 'getStatsFromContent'.
 *
 * Usage: Retrieve playlist statistics
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
PlaylistGetStatsFromContentAction = /** @class */ (function (_super) {
    tslib_1.__extends(PlaylistGetStatsFromContentAction, _super);
    function PlaylistGetStatsFromContentAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPlaylist', responseConstructor: KalturaPlaylist }) || this;
    }
    /**
     * @return {?}
     */
    PlaylistGetStatsFromContentAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playlist' },
            action: { type: 'c', default: 'getStatsFromContent' },
            playlistType: { type: 'en', subTypeConstructor: KalturaPlaylistType, subType: 'KalturaPlaylistType' },
            playlistContent: { type: 's' }
        });
        return result;
    };
    return PlaylistGetStatsFromContentAction;
}(KalturaRequest));
/**
 * Build request payload for service 'playlist' action 'getStatsFromContent'.
 *
 * Usage: Retrieve playlist statistics
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
export { PlaylistGetStatsFromContentAction };
if (false) {
    /** @type {?} */
    PlaylistGetStatsFromContentAction.prototype.playlistType;
    /** @type {?} */
    PlaylistGetStatsFromContentAction.prototype.playlistContent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RHZXRTdGF0c0Zyb21Db250ZW50QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9QbGF5bGlzdEdldFN0YXRzRnJvbUNvbnRlbnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBdUQsNkRBQStCO0lBS2xGLDJDQUFZLElBQTRDO2VBRXBELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGlCQUFpQixFQUFFLG1CQUFtQixFQUFHLGVBQWUsRUFBRyxDQUFDO0tBQ2xIOzs7O0lBRVMsd0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsVUFBVSxFQUFFO1lBQzFELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3hELFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3pHLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0EzQ0w7RUFvQnVELGNBQWMsRUF3QnBFLENBQUE7Ozs7Ozs7OztBQXhCRCw2Q0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlsaXN0IH0gZnJvbSAnLi9LYWx0dXJhUGxheWxpc3QnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUGxheWxpc3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUGxheWxpc3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXlsaXN0R2V0U3RhdHNGcm9tQ29udGVudEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBwbGF5bGlzdFR5cGUgOiBLYWx0dXJhUGxheWxpc3RUeXBlO1xuXHRwbGF5bGlzdENvbnRlbnQgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwbGF5bGlzdCcgYWN0aW9uICdnZXRTdGF0c0Zyb21Db250ZW50Jy5cbiAqXG4gKiBVc2FnZTogUmV0cmlldmUgcGxheWxpc3Qgc3RhdGlzdGljc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQbGF5bGlzdFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGxheWxpc3RHZXRTdGF0c0Zyb21Db250ZW50QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVBsYXlsaXN0PiB7XG5cbiAgICBwbGF5bGlzdFR5cGUgOiBLYWx0dXJhUGxheWxpc3RUeXBlO1xuXHRwbGF5bGlzdENvbnRlbnQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUGxheWxpc3RHZXRTdGF0c0Zyb21Db250ZW50QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUGxheWxpc3QnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlsaXN0ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdwbGF5bGlzdCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldFN0YXRzRnJvbUNvbnRlbnQnIH0sXG5cdFx0XHRcdHBsYXlsaXN0VHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQbGF5bGlzdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXlsaXN0VHlwZScgfSxcblx0XHRcdFx0cGxheWxpc3RDb250ZW50IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==