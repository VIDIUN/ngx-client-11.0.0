/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaMediaEntryFilterForPlaylist } from './KalturaMediaEntryFilterForPlaylist';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PlaylistExecuteFromFiltersActionArgs() { }
/** @type {?} */
PlaylistExecuteFromFiltersActionArgs.prototype.filters;
/** @type {?} */
PlaylistExecuteFromFiltersActionArgs.prototype.totalResults;
/** @type {?|undefined} */
PlaylistExecuteFromFiltersActionArgs.prototype.detailed;
/** @type {?|undefined} */
PlaylistExecuteFromFiltersActionArgs.prototype.pager;
/**
 * Build request payload for service 'playlist' action 'executeFromFilters'.
 *
 * Usage: Revrieve playlist for playing purpose, based on media entry filters
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'playlist' action 'executeFromFilters'.
 *
 * Usage: Revrieve playlist for playing purpose, based on media entry filters
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
PlaylistExecuteFromFiltersAction = /** @class */ (function (_super) {
    tslib_1.__extends(PlaylistExecuteFromFiltersAction, _super);
    function PlaylistExecuteFromFiltersAction(data) {
        var _this = _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaBaseEntry', responseConstructor: KalturaBaseEntry }) || this;
        if (typeof _this.filters === 'undefined')
            _this.filters = [];
        if (typeof _this.detailed === 'undefined')
            _this.detailed = "1";
        return _this;
    }
    /**
     * @return {?}
     */
    PlaylistExecuteFromFiltersAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'playlist' },
            action: { type: 'c', default: 'executeFromFilters' },
            filters: { type: 'a', subTypeConstructor: KalturaMediaEntryFilterForPlaylist, subType: 'KalturaMediaEntryFilterForPlaylist' },
            totalResults: { type: 'n' },
            detailed: { type: 's' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return PlaylistExecuteFromFiltersAction;
}(KalturaRequest));
/**
 * Build request payload for service 'playlist' action 'executeFromFilters'.
 *
 * Usage: Revrieve playlist for playing purpose, based on media entry filters
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 */
export { PlaylistExecuteFromFiltersAction };
if (false) {
    /** @type {?} */
    PlaylistExecuteFromFiltersAction.prototype.filters;
    /** @type {?} */
    PlaylistExecuteFromFiltersAction.prototype.totalResults;
    /** @type {?} */
    PlaylistExecuteFromFiltersAction.prototype.detailed;
    /** @type {?} */
    PlaylistExecuteFromFiltersAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RFeGVjdXRlRnJvbUZpbHRlcnNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BsYXlsaXN0RXhlY3V0ZUZyb21GaWx0ZXJzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ4RTs7Ozs7Ozs7QUFBQTtJQUFzRCw0REFBa0M7SUFPcEYsMENBQVksSUFBMkM7UUFBdkQsWUFFSSxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRyxnQkFBZ0IsRUFBRyxDQUFDLFNBR3BIO1FBRkcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQzs7S0FDM0Q7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxVQUFVLEVBQUU7WUFDMUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdkQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQ0FBa0MsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDakksWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBcERMO0VBdUJzRCxjQUFjLEVBOEJuRSxDQUFBOzs7Ozs7Ozs7QUE5QkQsNENBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnkgfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckZvclBsYXlsaXN0IH0gZnJvbSAnLi9LYWx0dXJhTWVkaWFFbnRyeUZpbHRlckZvclBsYXlsaXN0JztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXlsaXN0RXhlY3V0ZUZyb21GaWx0ZXJzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZpbHRlcnMgOiBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckZvclBsYXlsaXN0W107XG5cdHRvdGFsUmVzdWx0cyA6IG51bWJlcjtcblx0ZGV0YWlsZWQ/IDogc3RyaW5nO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwbGF5bGlzdCcgYWN0aW9uICdleGVjdXRlRnJvbUZpbHRlcnMnLlxuICpcbiAqIFVzYWdlOiBSZXZyaWV2ZSBwbGF5bGlzdCBmb3IgcGxheWluZyBwdXJwb3NlLCBiYXNlZCBvbiBtZWRpYSBlbnRyeSBmaWx0ZXJzXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUJhc2VFbnRyeVtdXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF5bGlzdEV4ZWN1dGVGcm9tRmlsdGVyc0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCYXNlRW50cnlbXT4ge1xuXG4gICAgZmlsdGVycyA6IEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyRm9yUGxheWxpc3RbXTtcblx0dG90YWxSZXN1bHRzIDogbnVtYmVyO1xuXHRkZXRhaWxlZCA6IHN0cmluZztcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUGxheWxpc3RFeGVjdXRlRnJvbUZpbHRlcnNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdhJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFCYXNlRW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhc2VFbnRyeSAgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5maWx0ZXJzID09PSAndW5kZWZpbmVkJykgdGhpcy5maWx0ZXJzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRldGFpbGVkID09PSAndW5kZWZpbmVkJykgdGhpcy5kZXRhaWxlZCA9IFwiMVwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BsYXlsaXN0JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZXhlY3V0ZUZyb21GaWx0ZXJzJyB9LFxuXHRcdFx0XHRmaWx0ZXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckZvclBsYXlsaXN0LCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5RmlsdGVyRm9yUGxheWxpc3QnIH0sXG5cdFx0XHRcdHRvdGFsUmVzdWx0cyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkZXRhaWxlZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYWdlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlclBhZ2VyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWx0ZXJQYWdlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19