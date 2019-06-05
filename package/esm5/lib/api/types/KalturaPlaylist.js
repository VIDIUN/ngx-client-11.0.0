/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaEntryFilterForPlaylist } from './KalturaMediaEntryFilterForPlaylist';
import { KalturaPlaylistType } from './KalturaPlaylistType';
import { KalturaBaseEntry } from './KalturaBaseEntry';
/**
 * @record
 */
export function KalturaPlaylistArgs() { }
/** @type {?|undefined} */
KalturaPlaylistArgs.prototype.playlistContent;
/** @type {?|undefined} */
KalturaPlaylistArgs.prototype.filters;
/** @type {?|undefined} */
KalturaPlaylistArgs.prototype.totalResults;
/** @type {?|undefined} */
KalturaPlaylistArgs.prototype.playlistType;
var KalturaPlaylist = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlaylist, _super);
    function KalturaPlaylist(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.filters === 'undefined')
            _this.filters = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaPlaylist.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlaylist' },
            playlistContent: { type: 's' },
            filters: { type: 'a', subTypeConstructor: KalturaMediaEntryFilterForPlaylist, subType: 'KalturaMediaEntryFilterForPlaylist' },
            totalResults: { type: 'n' },
            playlistType: { type: 'en', subTypeConstructor: KalturaPlaylistType, subType: 'KalturaPlaylistType' },
            plays: { type: 'n', readOnly: true },
            views: { type: 'n', readOnly: true },
            duration: { type: 'n', readOnly: true },
            executeUrl: { type: 's', readOnly: true }
        });
        return result;
    };
    return KalturaPlaylist;
}(KalturaBaseEntry));
export { KalturaPlaylist };
if (false) {
    /** @type {?} */
    KalturaPlaylist.prototype.playlistContent;
    /** @type {?} */
    KalturaPlaylist.prototype.filters;
    /** @type {?} */
    KalturaPlaylist.prototype.totalResults;
    /** @type {?} */
    KalturaPlaylist.prototype.playlistType;
    /** @type {?} */
    KalturaPlaylist.prototype.plays;
    /** @type {?} */
    KalturaPlaylist.prototype.views;
    /** @type {?} */
    KalturaPlaylist.prototype.duration;
    /** @type {?} */
    KalturaPlaylist.prototype.executeUrl;
}
typesMappingStorage['KalturaPlaylist'] = KalturaPlaylist;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlsaXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGxheWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUF3QixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVTVFLElBQUE7SUFBcUMsMkNBQWdCO0lBV2pELHlCQUFZLElBQTJCO1FBQXZDLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O0tBQzlEOzs7O0lBRVMsc0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDcEUsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUNqSSxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3pHLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN2QyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdkMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzFDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUNuQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBCQWpETDtFQWNxQyxnQkFBZ0IsRUFvQ3BELENBQUE7QUFwQ0QsMkJBb0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsR0FBRyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdCB9IGZyb20gJy4vS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdCc7XG5pbXBvcnQgeyBLYWx0dXJhUGxheWxpc3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhUGxheWxpc3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnksIEthbHR1cmFCYXNlRW50cnlBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGxheWxpc3RBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlRW50cnlBcmdzIHtcbiAgICBwbGF5bGlzdENvbnRlbnQ/IDogc3RyaW5nO1xuXHRmaWx0ZXJzPyA6IEthbHR1cmFNZWRpYUVudHJ5RmlsdGVyRm9yUGxheWxpc3RbXTtcblx0dG90YWxSZXN1bHRzPyA6IG51bWJlcjtcblx0cGxheWxpc3RUeXBlPyA6IEthbHR1cmFQbGF5bGlzdFR5cGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQbGF5bGlzdCBleHRlbmRzIEthbHR1cmFCYXNlRW50cnkge1xuXG4gICAgcGxheWxpc3RDb250ZW50IDogc3RyaW5nO1xuXHRmaWx0ZXJzIDogS2FsdHVyYU1lZGlhRW50cnlGaWx0ZXJGb3JQbGF5bGlzdFtdO1xuXHR0b3RhbFJlc3VsdHMgOiBudW1iZXI7XG5cdHBsYXlsaXN0VHlwZSA6IEthbHR1cmFQbGF5bGlzdFR5cGU7XG5cdHJlYWRvbmx5IHBsYXlzIDogbnVtYmVyO1xuXHRyZWFkb25seSB2aWV3cyA6IG51bWJlcjtcblx0cmVhZG9ubHkgZHVyYXRpb24gOiBudW1iZXI7XG5cdHJlYWRvbmx5IGV4ZWN1dGVVcmwgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQbGF5bGlzdEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlcnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUGxheWxpc3QnIH0sXG5cdFx0XHRcdHBsYXlsaXN0Q29udGVudCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWx0ZXJzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFFbnRyeUZpbHRlckZvclBsYXlsaXN0LCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYUVudHJ5RmlsdGVyRm9yUGxheWxpc3QnIH0sXG5cdFx0XHRcdHRvdGFsUmVzdWx0cyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwbGF5bGlzdFR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWxpc3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFQbGF5bGlzdFR5cGUnIH0sXG5cdFx0XHRcdHBsYXlzIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dmlld3MgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRkdXJhdGlvbiA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGV4ZWN1dGVVcmwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheWxpc3QnXSA9IEthbHR1cmFQbGF5bGlzdDsiXX0=