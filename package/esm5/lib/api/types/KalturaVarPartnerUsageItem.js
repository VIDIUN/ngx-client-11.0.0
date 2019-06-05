/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaVarPartnerUsageItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaVarPartnerUsageItem, _super);
    function KalturaVarPartnerUsageItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaVarPartnerUsageItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaVarPartnerUsageItem;
}(KalturaObjectBase));
export { KalturaVarPartnerUsageItem };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCbEYsSUFBQTtJQUFnRCxzREFBaUI7SUF5QjdELG9DQUFZLElBQXNDO2VBRTlDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQzVHLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNkLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cUNBN0ZMO0VBK0JnRCxpQkFBaUIsRUErRGhFLENBQUE7QUEvREQsc0NBK0RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDRCQUE0QixDQUFDLEdBQUcsMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFQYXJ0bmVyU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVmFyUGFydG5lclVzYWdlSXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBwYXJ0bmVySWQ/IDogbnVtYmVyO1xuXHRwYXJ0bmVyTmFtZT8gOiBzdHJpbmc7XG5cdHBhcnRuZXJTdGF0dXM/IDogS2FsdHVyYVBhcnRuZXJTdGF0dXM7XG5cdHBhcnRuZXJQYWNrYWdlPyA6IG51bWJlcjtcblx0cGFydG5lckNyZWF0ZWRBdD8gOiBudW1iZXI7XG5cdHZpZXdzPyA6IG51bWJlcjtcblx0cGxheXM/IDogbnVtYmVyO1xuXHRlbnRyaWVzQ291bnQ/IDogbnVtYmVyO1xuXHR0b3RhbEVudHJpZXNDb3VudD8gOiBudW1iZXI7XG5cdHZpZGVvRW50cmllc0NvdW50PyA6IG51bWJlcjtcblx0aW1hZ2VFbnRyaWVzQ291bnQ/IDogbnVtYmVyO1xuXHRhdWRpb0VudHJpZXNDb3VudD8gOiBudW1iZXI7XG5cdG1peEVudHJpZXNDb3VudD8gOiBudW1iZXI7XG5cdGJhbmR3aWR0aD8gOiBudW1iZXI7XG5cdHRvdGFsU3RvcmFnZT8gOiBudW1iZXI7XG5cdHN0b3JhZ2U/IDogbnVtYmVyO1xuXHRkZWxldGVkU3RvcmFnZT8gOiBudW1iZXI7XG5cdHBlYWtTdG9yYWdlPyA6IG51bWJlcjtcblx0YXZnU3RvcmFnZT8gOiBudW1iZXI7XG5cdGNvbWJpbmVkU3RvcmFnZUJhbmR3aWR0aD8gOiBudW1iZXI7XG5cdHRyYW5zY29kaW5nVXNhZ2U/IDogbnVtYmVyO1xuXHRkYXRlSWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVmFyUGFydG5lclVzYWdlSXRlbSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cGFydG5lck5hbWUgOiBzdHJpbmc7XG5cdHBhcnRuZXJTdGF0dXMgOiBLYWx0dXJhUGFydG5lclN0YXR1cztcblx0cGFydG5lclBhY2thZ2UgOiBudW1iZXI7XG5cdHBhcnRuZXJDcmVhdGVkQXQgOiBudW1iZXI7XG5cdHZpZXdzIDogbnVtYmVyO1xuXHRwbGF5cyA6IG51bWJlcjtcblx0ZW50cmllc0NvdW50IDogbnVtYmVyO1xuXHR0b3RhbEVudHJpZXNDb3VudCA6IG51bWJlcjtcblx0dmlkZW9FbnRyaWVzQ291bnQgOiBudW1iZXI7XG5cdGltYWdlRW50cmllc0NvdW50IDogbnVtYmVyO1xuXHRhdWRpb0VudHJpZXNDb3VudCA6IG51bWJlcjtcblx0bWl4RW50cmllc0NvdW50IDogbnVtYmVyO1xuXHRiYW5kd2lkdGggOiBudW1iZXI7XG5cdHRvdGFsU3RvcmFnZSA6IG51bWJlcjtcblx0c3RvcmFnZSA6IG51bWJlcjtcblx0ZGVsZXRlZFN0b3JhZ2UgOiBudW1iZXI7XG5cdHBlYWtTdG9yYWdlIDogbnVtYmVyO1xuXHRhdmdTdG9yYWdlIDogbnVtYmVyO1xuXHRjb21iaW5lZFN0b3JhZ2VCYW5kd2lkdGggOiBudW1iZXI7XG5cdHRyYW5zY29kaW5nVXNhZ2UgOiBudW1iZXI7XG5cdGRhdGVJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW0nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVyTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVyU3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXJTdGF0dXMnIH0sXG5cdFx0XHRcdHBhcnRuZXJQYWNrYWdlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJDcmVhdGVkQXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dmlld3MgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGxheXMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW50cmllc0NvdW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHRvdGFsRW50cmllc0NvdW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHZpZGVvRW50cmllc0NvdW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGltYWdlRW50cmllc0NvdW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGF1ZGlvRW50cmllc0NvdW50IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1peEVudHJpZXNDb3VudCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRiYW5kd2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dG90YWxTdG9yYWdlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0b3JhZ2UgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGVsZXRlZFN0b3JhZ2UgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cGVha1N0b3JhZ2UgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YXZnU3RvcmFnZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjb21iaW5lZFN0b3JhZ2VCYW5kd2lkdGggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dHJhbnNjb2RpbmdVc2FnZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkYXRlSWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVZhclBhcnRuZXJVc2FnZUl0ZW0nXSA9IEthbHR1cmFWYXJQYXJ0bmVyVXNhZ2VJdGVtOyJdfQ==