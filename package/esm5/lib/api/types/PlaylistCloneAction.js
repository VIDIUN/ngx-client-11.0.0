/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPlaylist } from './KalturaPlaylist';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PlaylistCloneActionArgs() { }
/** @type {?} */
PlaylistCloneActionArgs.prototype.id;
/** @type {?|undefined} */
PlaylistCloneActionArgs.prototype.newPlaylist;
/**
 * Build request payload for service 'playlist' action 'clone'.
 *
 * Usage: Clone an existing playlist
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'playlist' action 'clone'.
 *
 * Usage: Clone an existing playlist
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
PlaylistCloneAction = /** @class */ (function (_super) {
    tslib_1.__extends(PlaylistCloneAction, _super);
    function PlaylistCloneAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPlaylist', responseConstructor: KalturaPlaylist }) || this;
    }
    /**
     * @return {?}
     */
    PlaylistCloneAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playlist' },
            action: { type: 'c', default: 'clone' },
            id: { type: 's' },
            newPlaylist: { type: 'o', subTypeConstructor: KalturaPlaylist, subType: 'KalturaPlaylist' }
        });
        return result;
    };
    return PlaylistCloneAction;
}(KalturaRequest));
/**
 * Build request payload for service 'playlist' action 'clone'.
 *
 * Usage: Clone an existing playlist
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
export { PlaylistCloneAction };
if (false) {
    /** @type {?} */
    PlaylistCloneAction.prototype.id;
    /** @type {?} */
    PlaylistCloneAction.prototype.newPlaylist;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RDbG9uZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvUGxheWxpc3RDbG9uZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUF5QywrQ0FBK0I7SUFLcEUsNkJBQVksSUFBOEI7ZUFFdEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUM7S0FDbEg7Ozs7SUFFUywwQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxVQUFVLEVBQUU7WUFDMUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQzFDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OEJBMUNMO0VBbUJ5QyxjQUFjLEVBd0J0RCxDQUFBOzs7Ozs7Ozs7QUF4QkQsK0JBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5bGlzdCB9IGZyb20gJy4vS2FsdHVyYVBsYXlsaXN0JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWxpc3RDbG9uZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcblx0bmV3UGxheWxpc3Q/IDogS2FsdHVyYVBsYXlsaXN0O1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncGxheWxpc3QnIGFjdGlvbiAnY2xvbmUnLlxuICpcbiAqIFVzYWdlOiBDbG9uZSBhbiBleGlzdGluZyBwbGF5bGlzdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQbGF5bGlzdFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGxheWxpc3RDbG9uZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFQbGF5bGlzdD4ge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cdG5ld1BsYXlsaXN0IDogS2FsdHVyYVBsYXlsaXN0O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFBsYXlsaXN0Q2xvbmVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFQbGF5bGlzdCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWxpc3QgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BsYXlsaXN0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2xvbmUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5ld1BsYXlsaXN0IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWxpc3QsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXlsaXN0JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=