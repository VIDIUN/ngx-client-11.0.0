/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaContext } from './KalturaContext';
import { KalturaMediaEntryFilterForPlaylist } from './KalturaMediaEntryFilterForPlaylist';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PlaylistExecuteActionArgs() { }
/** @type {?} */
PlaylistExecuteActionArgs.prototype.id;
/** @type {?|undefined} */
PlaylistExecuteActionArgs.prototype.detailed;
/** @type {?|undefined} */
PlaylistExecuteActionArgs.prototype.playlistContext;
/** @type {?|undefined} */
PlaylistExecuteActionArgs.prototype.filter;
/** @type {?|undefined} */
PlaylistExecuteActionArgs.prototype.pager;
/**
 * Build request payload for service 'playlist' action 'execute'.
 *
 * Usage: Retrieve playlist for playing purpose
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'playlist' action 'execute'.
 *
 * Usage: Retrieve playlist for playing purpose
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
PlaylistExecuteAction = /** @class */ (function (_super) {
    tslib_1.__extends(PlaylistExecuteAction, _super);
    function PlaylistExecuteAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaBaseEntry', responseConstructor: KalturaBaseEntry }) || this;
    }
    /**
     * @return {?}
     */
    PlaylistExecuteAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playlist' },
            action: { type: 'c', default: 'execute' },
            id: { type: 's' },
            detailed: { type: 's' },
            playlistContext: { type: 'o', subTypeConstructor: KalturaContext, subType: 'KalturaContext' },
            filter: { type: 'o', subTypeConstructor: KalturaMediaEntryFilterForPlaylist, subType: 'KalturaMediaEntryFilterForPlaylist' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return PlaylistExecuteAction;
}(KalturaRequest));
/**
 * Build request payload for service 'playlist' action 'execute'.
 *
 * Usage: Retrieve playlist for playing purpose
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
export { PlaylistExecuteAction };
if (false) {
    /** @type {?} */
    PlaylistExecuteAction.prototype.id;
    /** @type {?} */
    PlaylistExecuteAction.prototype.detailed;
    /** @type {?} */
    PlaylistExecuteAction.prototype.playlistContext;
    /** @type {?} */
    PlaylistExecuteAction.prototype.filter;
    /** @type {?} */
    PlaylistExecuteAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RFeGVjdXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9QbGF5bGlzdEV4ZWN1dGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnhFOzs7Ozs7OztBQUFBO0lBQTJDLGlEQUFrQztJQVF6RSwrQkFBWSxJQUFnQztlQUV4QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRyxnQkFBZ0IsRUFBRyxDQUFDO0tBQ3BIOzs7O0lBRVMsNENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsVUFBVSxFQUFFO1lBQzFELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUM1QyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxjQUFjLEVBQUUsT0FBTyxFQUFHLGdCQUFnQixFQUFFO1lBQ2pHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ2hJLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBdERMO0VBeUIyQyxjQUFjLEVBOEJ4RCxDQUFBOzs7Ozs7Ozs7QUE5QkQsaUNBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnkgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhQ29udGV4dCB9IGZyb20gJy4vS2FsdHVyYUNvbnRleHQnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdCB9IGZyb20gJy4vS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdCc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBQbGF5bGlzdEV4ZWN1dGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBzdHJpbmc7XG5cdGRldGFpbGVkPyA6IHN0cmluZztcblx0cGxheWxpc3RDb250ZXh0PyA6IEthbHR1cmFDb250ZXh0O1xuXHRmaWx0ZXI/IDogS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdDtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAncGxheWxpc3QnIGFjdGlvbiAnZXhlY3V0ZScuXG4gKlxuICogVXNhZ2U6IFJldHJpZXZlIHBsYXlsaXN0IGZvciBwbGF5aW5nIHB1cnBvc2VcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQmFzZUVudHJ5W11cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFBsYXlsaXN0RXhlY3V0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCYXNlRW50cnlbXT4ge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cdGRldGFpbGVkIDogc3RyaW5nO1xuXHRwbGF5bGlzdENvbnRleHQgOiBLYWx0dXJhQ29udGV4dDtcblx0ZmlsdGVyIDogS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdDtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUGxheWxpc3RFeGVjdXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnYScsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQmFzZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BsYXlsaXN0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZXhlY3V0ZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGV0YWlsZWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGxheWxpc3RDb250ZXh0IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udGV4dCwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udGV4dCcgfSxcblx0XHRcdFx0ZmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckZvclBsYXlsaXN0LCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5RmlsdGVyRm9yUGxheWxpc3QnIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=