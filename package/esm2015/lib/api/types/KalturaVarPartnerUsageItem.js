/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPartnerStatus } from './KalturaPartnerStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaVarPartnerUsageItemArgs() { }
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.partnerId;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.partnerName;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.partnerStatus;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.partnerPackage;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.partnerCreatedAt;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.views;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.plays;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.entriesCount;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.totalEntriesCount;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.videoEntriesCount;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.imageEntriesCount;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.audioEntriesCount;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.mixEntriesCount;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.bandwidth;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.totalStorage;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.storage;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.deletedStorage;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.peakStorage;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.avgStorage;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.combinedStorageBandwidth;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.transcodingUsage;
/** @type {?|undefined} */
KalturaVarPartnerUsageItemArgs.prototype.dateId;
export class KalturaVarPartnerUsageItem extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaVarPartnerUsageItem' },
            partnerId: { type: 'n' },
            partnerName: { type: 's' },
            partnerStatus: { type: 'en', subTypeConstructor: KalturaPartnerStatus, subType: 'KalturaPartnerStatus' },
            partnerPackage: { type: 'n' },
            partnerCreatedAt: { type: 'n' },
            views: { type: 'n' },
            plays: { type: 'n' },
            entriesCount: { type: 'n' },
            totalEntriesCount: { type: 'n' },
            videoEntriesCount: { type: 'n' },
            imageEntriesCount: { type: 'n' },
            audioEntriesCount: { type: 'n' },
            mixEntriesCount: { type: 'n' },
            bandwidth: { type: 'n' },
            totalStorage: { type: 'n' },
            storage: { type: 'n' },
            deletedStorage: { type: 'n' },
            peakStorage: { type: 'n' },
            avgStorage: { type: 'n' },
            combinedStorageBandwidth: { type: 'n' },
            transcodingUsage: { type: 'n' },
            dateId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.partnerId;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.partnerName;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.partnerStatus;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.partnerPackage;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.partnerCreatedAt;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.views;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.plays;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.entriesCount;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.totalEntriesCount;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.videoEntriesCount;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.imageEntriesCount;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.audioEntriesCount;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.mixEntriesCount;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.bandwidth;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.totalStorage;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.storage;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.deletedStorage;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.peakStorage;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.avgStorage;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.combinedStorageBandwidth;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.transcodingUsage;
    /** @type {?} */
    KalturaVarPartnerUsageItem.prototype.dateId;
}
typesMappingStorage['KalturaVarPartnerUsageItem'] = KalturaVarPartnerUsageItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJsRixNQUFNLGlDQUFrQyxTQUFRLGlCQUFpQjs7OztJQXlCN0QsWUFBWSxJQUFzQztRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQzVHLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNkLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQYXJ0bmVyU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhUGFydG5lclN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgcGFydG5lcklkPyA6IG51bWJlcjtcblx0cGFydG5lck5hbWU/IDogc3RyaW5nO1xuXHRwYXJ0bmVyU3RhdHVzPyA6IEthbHR1cmFQYXJ0bmVyU3RhdHVzO1xuXHRwYXJ0bmVyUGFja2FnZT8gOiBudW1iZXI7XG5cdHBhcnRuZXJDcmVhdGVkQXQ/IDogbnVtYmVyO1xuXHR2aWV3cz8gOiBudW1iZXI7XG5cdHBsYXlzPyA6IG51bWJlcjtcblx0ZW50cmllc0NvdW50PyA6IG51bWJlcjtcblx0dG90YWxFbnRyaWVzQ291bnQ/IDogbnVtYmVyO1xuXHR2aWRlb0VudHJpZXNDb3VudD8gOiBudW1iZXI7XG5cdGltYWdlRW50cmllc0NvdW50PyA6IG51bWJlcjtcblx0YXVkaW9FbnRyaWVzQ291bnQ/IDogbnVtYmVyO1xuXHRtaXhFbnRyaWVzQ291bnQ/IDogbnVtYmVyO1xuXHRiYW5kd2lkdGg/IDogbnVtYmVyO1xuXHR0b3RhbFN0b3JhZ2U/IDogbnVtYmVyO1xuXHRzdG9yYWdlPyA6IG51bWJlcjtcblx0ZGVsZXRlZFN0b3JhZ2U/IDogbnVtYmVyO1xuXHRwZWFrU3RvcmFnZT8gOiBudW1iZXI7XG5cdGF2Z1N0b3JhZ2U/IDogbnVtYmVyO1xuXHRjb21iaW5lZFN0b3JhZ2VCYW5kd2lkdGg/IDogbnVtYmVyO1xuXHR0cmFuc2NvZGluZ1VzYWdlPyA6IG51bWJlcjtcblx0ZGF0ZUlkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW0gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHBhcnRuZXJOYW1lIDogc3RyaW5nO1xuXHRwYXJ0bmVyU3RhdHVzIDogS2FsdHVyYVBhcnRuZXJTdGF0dXM7XG5cdHBhcnRuZXJQYWNrYWdlIDogbnVtYmVyO1xuXHRwYXJ0bmVyQ3JlYXRlZEF0IDogbnVtYmVyO1xuXHR2aWV3cyA6IG51bWJlcjtcblx0cGxheXMgOiBudW1iZXI7XG5cdGVudHJpZXNDb3VudCA6IG51bWJlcjtcblx0dG90YWxFbnRyaWVzQ291bnQgOiBudW1iZXI7XG5cdHZpZGVvRW50cmllc0NvdW50IDogbnVtYmVyO1xuXHRpbWFnZUVudHJpZXNDb3VudCA6IG51bWJlcjtcblx0YXVkaW9FbnRyaWVzQ291bnQgOiBudW1iZXI7XG5cdG1peEVudHJpZXNDb3VudCA6IG51bWJlcjtcblx0YmFuZHdpZHRoIDogbnVtYmVyO1xuXHR0b3RhbFN0b3JhZ2UgOiBudW1iZXI7XG5cdHN0b3JhZ2UgOiBudW1iZXI7XG5cdGRlbGV0ZWRTdG9yYWdlIDogbnVtYmVyO1xuXHRwZWFrU3RvcmFnZSA6IG51bWJlcjtcblx0YXZnU3RvcmFnZSA6IG51bWJlcjtcblx0Y29tYmluZWRTdG9yYWdlQmFuZHdpZHRoIDogbnVtYmVyO1xuXHR0cmFuc2NvZGluZ1VzYWdlIDogbnVtYmVyO1xuXHRkYXRlSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGFydG5lck5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFydG5lclN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQYXJ0bmVyU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFQYXJ0bmVyU3RhdHVzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyUGFja2FnZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVyQ3JlYXRlZEF0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHZpZXdzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBsYXlzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVudHJpZXNDb3VudCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0b3RhbEVudHJpZXNDb3VudCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR2aWRlb0VudHJpZXNDb3VudCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpbWFnZUVudHJpZXNDb3VudCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdWRpb0VudHJpZXNDb3VudCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtaXhFbnRyaWVzQ291bnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YmFuZHdpZHRoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRvdGFsU3RvcmFnZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzdG9yYWdlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRlbGV0ZWRTdG9yYWdlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBlYWtTdG9yYWdlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGF2Z1N0b3JhZ2UgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y29tYmluZWRTdG9yYWdlQmFuZHdpZHRoIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRyYW5zY29kaW5nVXNhZ2UgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGF0ZUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtJ10gPSBLYWx0dXJhVmFyUGFydG5lclVzYWdlSXRlbTsiXX0=