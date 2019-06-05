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
export function PlaylistAddActionArgs() { }
/** @type {?} */
PlaylistAddActionArgs.prototype.playlist;
/** @type {?|undefined} */
PlaylistAddActionArgs.prototype.updateStats;
/**
 * Build request payload for service 'playlist' action 'add'.
 *
 * Usage: Add new playlist
 * Note that all entries used in a playlist will become public and may appear in KalturaNetwork
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'playlist' action 'add'.
 *
 * Usage: Add new playlist
 * Note that all entries used in a playlist will become public and may appear in KalturaNetwork
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
PlaylistAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(PlaylistAddAction, _super);
    function PlaylistAddAction(data) {
        var _this = _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPlaylist', responseConstructor: KalturaPlaylist }) || this;
        if (typeof _this.updateStats === 'undefined')
            _this.updateStats = false;
        return _this;
    }
    /**
     * @return {?}
     */
    PlaylistAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playlist' },
            action: { type: 'c', default: 'add' },
            playlist: { type: 'o', subTypeConstructor: KalturaPlaylist, subType: 'KalturaPlaylist' },
            updateStats: { type: 'b' }
        });
        return result;
    };
    return PlaylistAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'playlist' action 'add'.
 *
 * Usage: Add new playlist
 * Note that all entries used in a playlist will become public and may appear in KalturaNetwork
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
export { PlaylistAddAction };
if (false) {
    /** @type {?} */
    PlaylistAddAction.prototype.playlist;
    /** @type {?} */
    PlaylistAddAction.prototype.updateStats;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RBZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BsYXlsaXN0QWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEU7Ozs7Ozs7OztBQUFBO0lBQXVDLDZDQUErQjtJQUtsRSwyQkFBWSxJQUE0QjtRQUF4QyxZQUVJLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGlCQUFpQixFQUFFLG1CQUFtQixFQUFHLGVBQWUsRUFBRyxDQUFDLFNBRWxIO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDOztLQUN6RTs7OztJQUVTLHdDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUMxRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQzVGLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0QkE1Q0w7RUFvQnVDLGNBQWMsRUF5QnBELENBQUE7Ozs7Ozs7Ozs7QUF6QkQsNkJBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5bGlzdCB9IGZyb20gJy4vS2FsdHVyYVBsYXlsaXN0JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWxpc3RBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcGxheWxpc3QgOiBLYWx0dXJhUGxheWxpc3Q7XG5cdHVwZGF0ZVN0YXRzPyA6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwbGF5bGlzdCcgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBZGQgbmV3IHBsYXlsaXN0XG4gKiBOb3RlIHRoYXQgYWxsIGVudHJpZXMgdXNlZCBpbiBhIHBsYXlsaXN0IHdpbGwgYmVjb21lIHB1YmxpYyBhbmQgbWF5IGFwcGVhciBpbiBLYWx0dXJhTmV0d29ya1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQbGF5bGlzdFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGxheWxpc3RBZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUGxheWxpc3Q+IHtcblxuICAgIHBsYXlsaXN0IDogS2FsdHVyYVBsYXlsaXN0O1xuXHR1cGRhdGVTdGF0cyA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUGxheWxpc3RBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFQbGF5bGlzdCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWxpc3QgIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudXBkYXRlU3RhdHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnVwZGF0ZVN0YXRzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncGxheWxpc3QnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdHBsYXlsaXN0IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWxpc3QsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXlsaXN0JyB9LFxuXHRcdFx0XHR1cGRhdGVTdGF0cyA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=