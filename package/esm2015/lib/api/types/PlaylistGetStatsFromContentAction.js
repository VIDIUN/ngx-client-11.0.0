/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class PlaylistGetStatsFromContentAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaPlaylist', responseConstructor: KalturaPlaylist });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playlist' },
            action: { type: 'c', default: 'getStatsFromContent' },
            playlistType: { type: 'en', subTypeConstructor: KalturaPlaylistType, subType: 'KalturaPlaylistType' },
            playlistContent: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    PlaylistGetStatsFromContentAction.prototype.playlistType;
    /** @type {?} */
    PlaylistGetStatsFromContentAction.prototype.playlistContent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RHZXRTdGF0c0Zyb21Db250ZW50QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9QbGF5bGlzdEdldFN0YXRzRnJvbUNvbnRlbnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLHdDQUF5QyxTQUFRLGNBQStCOzs7O0lBS2xGLFlBQVksSUFBNEM7UUFFcEQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGlCQUFpQixFQUFFLG1CQUFtQixFQUFHLGVBQWUsRUFBRyxDQUFDLENBQUM7S0FDbkg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUMxRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RCxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN6RyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheWxpc3QgfSBmcm9tICcuL0thbHR1cmFQbGF5bGlzdCc7XG5cbmltcG9ydCB7IEthbHR1cmFQbGF5bGlzdFR5cGUgfSBmcm9tICcuL0thbHR1cmFQbGF5bGlzdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWxpc3RHZXRTdGF0c0Zyb21Db250ZW50QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHBsYXlsaXN0VHlwZSA6IEthbHR1cmFQbGF5bGlzdFR5cGU7XG5cdHBsYXlsaXN0Q29udGVudCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3BsYXlsaXN0JyBhY3Rpb24gJ2dldFN0YXRzRnJvbUNvbnRlbnQnLlxuICpcbiAqIFVzYWdlOiBSZXRyaWV2ZSBwbGF5bGlzdCBzdGF0aXN0aWNzXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVBsYXlsaXN0XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF5bGlzdEdldFN0YXRzRnJvbUNvbnRlbnRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUGxheWxpc3Q+IHtcblxuICAgIHBsYXlsaXN0VHlwZSA6IEthbHR1cmFQbGF5bGlzdFR5cGU7XG5cdHBsYXlsaXN0Q29udGVudCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBQbGF5bGlzdEdldFN0YXRzRnJvbUNvbnRlbnRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFQbGF5bGlzdCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWxpc3QgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BsYXlsaXN0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0U3RhdHNGcm9tQ29udGVudCcgfSxcblx0XHRcdFx0cGxheWxpc3RUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlsaXN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheWxpc3RUeXBlJyB9LFxuXHRcdFx0XHRwbGF5bGlzdENvbnRlbnQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19