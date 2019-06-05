/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStats } from './KalturaLiveStats';
/**
 * @record
 */
export function KalturaEntryLiveStatsArgs() { }
/** @type {?|undefined} */
KalturaEntryLiveStatsArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaEntryLiveStatsArgs.prototype.peakAudience;
/** @type {?|undefined} */
KalturaEntryLiveStatsArgs.prototype.peakDvrAudience;
export class KalturaEntryLiveStats extends KalturaLiveStats {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryLiveStats' },
            entryId: { type: 's' },
            peakAudience: { type: 'n' },
            peakDvrAudience: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryLiveStats.prototype.entryId;
    /** @type {?} */
    KalturaEntryLiveStats.prototype.peakAudience;
    /** @type {?} */
    KalturaEntryLiveStats.prototype.peakDvrAudience;
}
typesMappingStorage['KalturaEntryLiveStats'] = KalturaEntryLiveStats;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5TGl2ZVN0YXRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW50cnlMaXZlU3RhdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7O0FBUzVFLE1BQU0sNEJBQTZCLFNBQVEsZ0JBQWdCOzs7O0lBTXZELFlBQVksSUFBaUM7UUFFekMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVN0YXRzLCBLYWx0dXJhTGl2ZVN0YXRzQXJncyB9IGZyb20gJy4vS2FsdHVyYUxpdmVTdGF0cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVudHJ5TGl2ZVN0YXRzQXJncyAgZXh0ZW5kcyBLYWx0dXJhTGl2ZVN0YXRzQXJncyB7XG4gICAgZW50cnlJZD8gOiBzdHJpbmc7XG5cdHBlYWtBdWRpZW5jZT8gOiBudW1iZXI7XG5cdHBlYWtEdnJBdWRpZW5jZT8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbnRyeUxpdmVTdGF0cyBleHRlbmRzIEthbHR1cmFMaXZlU3RhdHMge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cGVha0F1ZGllbmNlIDogbnVtYmVyO1xuXHRwZWFrRHZyQXVkaWVuY2UgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbnRyeUxpdmVTdGF0c0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW50cnlMaXZlU3RhdHMnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGVha0F1ZGllbmNlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBlYWtEdnJBdWRpZW5jZSA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW50cnlMaXZlU3RhdHMnXSA9IEthbHR1cmFFbnRyeUxpdmVTdGF0czsiXX0=