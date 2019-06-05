/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaPlaylistType } from './KalturaPlaylistType';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PlaylistExecuteFromContentActionArgs() { }
/** @type {?} */
PlaylistExecuteFromContentActionArgs.prototype.playlistType;
/** @type {?} */
PlaylistExecuteFromContentActionArgs.prototype.playlistContent;
/** @type {?|undefined} */
PlaylistExecuteFromContentActionArgs.prototype.detailed;
/** @type {?|undefined} */
PlaylistExecuteFromContentActionArgs.prototype.pager;
/**
 * Build request payload for service 'playlist' action 'executeFromContent'.
 *
 * Usage: Retrieve playlist for playing purpose, based on content
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'playlist' action 'executeFromContent'.
 *
 * Usage: Retrieve playlist for playing purpose, based on content
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
PlaylistExecuteFromContentAction = /** @class */ (function (_super) {
    tslib_1.__extends(PlaylistExecuteFromContentAction, _super);
    function PlaylistExecuteFromContentAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaBaseEntry', responseConstructor: KalturaBaseEntry }) || this;
    }
    /**
     * @return {?}
     */
    PlaylistExecuteFromContentAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playlist' },
            action: { type: 'c', default: 'executeFromContent' },
            playlistType: { type: 'en', subTypeConstructor: KalturaPlaylistType, subType: 'KalturaPlaylistType' },
            playlistContent: { type: 's' },
            detailed: { type: 's' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return PlaylistExecuteFromContentAction;
}(KalturaRequest));
/**
 * Build request payload for service 'playlist' action 'executeFromContent'.
 *
 * Usage: Retrieve playlist for playing purpose, based on content
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
export { PlaylistExecuteFromContentAction };
if (false) {
    /** @type {?} */
    PlaylistExecuteFromContentAction.prototype.playlistType;
    /** @type {?} */
    PlaylistExecuteFromContentAction.prototype.playlistContent;
    /** @type {?} */
    PlaylistExecuteFromContentAction.prototype.detailed;
    /** @type {?} */
    PlaylistExecuteFromContentAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RFeGVjdXRlRnJvbUNvbnRlbnRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BsYXlsaXN0RXhlY3V0ZUZyb21Db250ZW50QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4RTs7Ozs7Ozs7QUFBQTtJQUFzRCw0REFBa0M7SUFPcEYsMENBQVksSUFBMkM7ZUFFbkQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQztLQUNwSDs7OztJQUVTLHVEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUMxRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN2RCxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN6RyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0FsREw7RUF1QnNELGNBQWMsRUE0Qm5FLENBQUE7Ozs7Ozs7OztBQTVCRCw0Q0E0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VFbnRyeSB9IGZyb20gJy4vS2FsdHVyYUJhc2VFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFQbGF5bGlzdFR5cGUgfSBmcm9tICcuL0thbHR1cmFQbGF5bGlzdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWxpc3RFeGVjdXRlRnJvbUNvbnRlbnRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcGxheWxpc3RUeXBlIDogS2FsdHVyYVBsYXlsaXN0VHlwZTtcblx0cGxheWxpc3RDb250ZW50IDogc3RyaW5nO1xuXHRkZXRhaWxlZD8gOiBzdHJpbmc7XG5cdHBhZ2VyPyA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3BsYXlsaXN0JyBhY3Rpb24gJ2V4ZWN1dGVGcm9tQ29udGVudCcuXG4gKlxuICogVXNhZ2U6IFJldHJpZXZlIHBsYXlsaXN0IGZvciBwbGF5aW5nIHB1cnBvc2UsIGJhc2VkIG9uIGNvbnRlbnRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQmFzZUVudHJ5W11cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFBsYXlsaXN0RXhlY3V0ZUZyb21Db250ZW50QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUJhc2VFbnRyeVtdPiB7XG5cbiAgICBwbGF5bGlzdFR5cGUgOiBLYWx0dXJhUGxheWxpc3RUeXBlO1xuXHRwbGF5bGlzdENvbnRlbnQgOiBzdHJpbmc7XG5cdGRldGFpbGVkIDogc3RyaW5nO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBQbGF5bGlzdEV4ZWN1dGVGcm9tQ29udGVudEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ2EnLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUJhc2VFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZUVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdwbGF5bGlzdCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2V4ZWN1dGVGcm9tQ29udGVudCcgfSxcblx0XHRcdFx0cGxheWxpc3RUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlsaXN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheWxpc3RUeXBlJyB9LFxuXHRcdFx0XHRwbGF5bGlzdENvbnRlbnQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGV0YWlsZWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==