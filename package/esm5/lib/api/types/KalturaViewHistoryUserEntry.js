/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';
/**
 * @record
 */
export function KalturaViewHistoryUserEntryArgs() { }
/** @type {?|undefined} */
KalturaViewHistoryUserEntryArgs.prototype.playbackContext;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryArgs.prototype.lastTimeReached;
/** @type {?|undefined} */
KalturaViewHistoryUserEntryArgs.prototype.lastUpdateTime;
var KalturaViewHistoryUserEntry = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaViewHistoryUserEntry, _super);
    function KalturaViewHistoryUserEntry(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaViewHistoryUserEntry.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaViewHistoryUserEntry' },
            playbackContext: { type: 's' },
            lastTimeReached: { type: 'n' },
            lastUpdateTime: { type: 'd' }
        });
        return result;
    };
    return KalturaViewHistoryUserEntry;
}(KalturaUserEntry));
export { KalturaViewHistoryUserEntry };
if (false) {
    /** @type {?} */
    KalturaViewHistoryUserEntry.prototype.playbackContext;
    /** @type {?} */
    KalturaViewHistoryUserEntry.prototype.lastTimeReached;
    /** @type {?} */
    KalturaViewHistoryUserEntry.prototype.lastUpdateTime;
}
typesMappingStorage['KalturaViewHistoryUserEntry'] = KalturaViewHistoryUserEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVmlld0hpc3RvcnlVc2VyRW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUF3QixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7OztBQVM1RSxJQUFBO0lBQWlELHVEQUFnQjtJQU03RCxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3RCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBbkNMO0VBV2lELGdCQUFnQixFQXlCaEUsQ0FBQTtBQXpCRCx1Q0F5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDZCQUE2QixDQUFDLEdBQUcsMkJBQTJCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJFbnRyeSwgS2FsdHVyYVVzZXJFbnRyeUFyZ3MgfSBmcm9tICcuL0thbHR1cmFVc2VyRW50cnknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFWaWV3SGlzdG9yeVVzZXJFbnRyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVzZXJFbnRyeUFyZ3Mge1xuICAgIHBsYXliYWNrQ29udGV4dD8gOiBzdHJpbmc7XG5cdGxhc3RUaW1lUmVhY2hlZD8gOiBudW1iZXI7XG5cdGxhc3RVcGRhdGVUaW1lPyA6IERhdGU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFWaWV3SGlzdG9yeVVzZXJFbnRyeSBleHRlbmRzIEthbHR1cmFVc2VyRW50cnkge1xuXG4gICAgcGxheWJhY2tDb250ZXh0IDogc3RyaW5nO1xuXHRsYXN0VGltZVJlYWNoZWQgOiBudW1iZXI7XG5cdGxhc3RVcGRhdGVUaW1lIDogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVZpZXdIaXN0b3J5VXNlckVudHJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFWaWV3SGlzdG9yeVVzZXJFbnRyeScgfSxcblx0XHRcdFx0cGxheWJhY2tDb250ZXh0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGxhc3RUaW1lUmVhY2hlZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsYXN0VXBkYXRlVGltZSA6IHsgdHlwZSA6ICdkJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVmlld0hpc3RvcnlVc2VyRW50cnknXSA9IEthbHR1cmFWaWV3SGlzdG9yeVVzZXJFbnRyeTsiXX0=