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
export function PlaylistUpdateActionArgs() { }
/** @type {?} */
PlaylistUpdateActionArgs.prototype.id;
/** @type {?} */
PlaylistUpdateActionArgs.prototype.playlist;
/** @type {?|undefined} */
PlaylistUpdateActionArgs.prototype.updateStats;
/**
 * Build request payload for service 'playlist' action 'update'.
 *
 * Usage: Update existing playlist
 * Note - you cannot change playlist type. updated playlist must be of the same type
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'playlist' action 'update'.
 *
 * Usage: Update existing playlist
 * Note - you cannot change playlist type. updated playlist must be of the same type
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
PlaylistUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(PlaylistUpdateAction, _super);
    function PlaylistUpdateAction(data) {
        var _this = _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPlaylist', responseConstructor: KalturaPlaylist }) || this;
        if (typeof _this.updateStats === 'undefined')
            _this.updateStats = false;
        return _this;
    }
    /**
     * @return {?}
     */
    PlaylistUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playlist' },
            action: { type: 'c', default: 'update' },
            id: { type: 's' },
            playlist: { type: 'o', subTypeConstructor: KalturaPlaylist, subType: 'KalturaPlaylist' },
            updateStats: { type: 'b' }
        });
        return result;
    };
    return PlaylistUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'playlist' action 'update'.
 *
 * Usage: Update existing playlist
 * Note - you cannot change playlist type. updated playlist must be of the same type
 *
 * Server response type:         KalturaPlaylist
 * Server failure response type: KalturaAPIException
 */
export { PlaylistUpdateAction };
if (false) {
    /** @type {?} */
    PlaylistUpdateAction.prototype.id;
    /** @type {?} */
    PlaylistUpdateAction.prototype.playlist;
    /** @type {?} */
    PlaylistUpdateAction.prototype.updateStats;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RVcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BsYXlsaXN0VXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4RTs7Ozs7Ozs7O0FBQUE7SUFBMEMsZ0RBQStCO0lBTXJFLDhCQUFZLElBQStCO1FBQTNDLFlBRUksa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUcsZUFBZSxFQUFHLENBQUMsU0FFbEg7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7O0tBQ3pFOzs7O0lBRVMsMkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsVUFBVSxFQUFFO1lBQzFELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUM1RixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0JBL0NMO0VBcUIwQyxjQUFjLEVBMkJ2RCxDQUFBOzs7Ozs7Ozs7O0FBM0JELGdDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheWxpc3QgfSBmcm9tICcuL0thbHR1cmFQbGF5bGlzdCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXlsaXN0VXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogc3RyaW5nO1xuXHRwbGF5bGlzdCA6IEthbHR1cmFQbGF5bGlzdDtcblx0dXBkYXRlU3RhdHM/IDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3BsYXlsaXN0JyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBleGlzdGluZyBwbGF5bGlzdFxuICogTm90ZSAtIHlvdSBjYW5ub3QgY2hhbmdlIHBsYXlsaXN0IHR5cGUuIHVwZGF0ZWQgcGxheWxpc3QgbXVzdCBiZSBvZiB0aGUgc2FtZSB0eXBlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVBsYXlsaXN0XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF5bGlzdFVwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFQbGF5bGlzdD4ge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cdHBsYXlsaXN0IDogS2FsdHVyYVBsYXlsaXN0O1xuXHR1cGRhdGVTdGF0cyA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUGxheWxpc3RVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFQbGF5bGlzdCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWxpc3QgIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMudXBkYXRlU3RhdHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnVwZGF0ZVN0YXRzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncGxheWxpc3QnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBsYXlsaXN0IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWxpc3QsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXlsaXN0JyB9LFxuXHRcdFx0XHR1cGRhdGVTdGF0cyA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=