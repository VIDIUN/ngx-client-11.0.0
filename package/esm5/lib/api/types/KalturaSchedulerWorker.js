/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobType } from './KalturaBatchJobType';
import { KalturaSchedulerStatus } from './KalturaSchedulerStatus';
import { KalturaSchedulerConfig } from './KalturaSchedulerConfig';
import { KalturaBatchJob } from './KalturaBatchJob';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaSchedulerWorkerArgs() { }
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.configuredId;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.schedulerId;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.schedulerConfiguredId;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.type;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.typeName;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.name;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.statuses;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.configs;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.lockedJobs;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.avgWait;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.avgWork;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.lastStatus;
/** @type {?|undefined} */
KalturaSchedulerWorkerArgs.prototype.lastStatusStr;
var KalturaSchedulerWorker = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSchedulerWorker, _super);
    function KalturaSchedulerWorker(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.statuses === 'undefined')
            _this.statuses = [];
        if (typeof _this.configs === 'undefined')
            _this.configs = [];
        if (typeof _this.lockedJobs === 'undefined')
            _this.lockedJobs = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaSchedulerWorker.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSchedulerWorker' },
            id: { type: 'n', readOnly: true },
            configuredId: { type: 'n' },
            schedulerId: { type: 'n' },
            schedulerConfiguredId: { type: 'n' },
            type: { type: 'es', subTypeConstructor: KalturaBatchJobType, subType: 'KalturaBatchJobType' },
            typeName: { type: 's' },
            name: { type: 's' },
            statuses: { type: 'a', subTypeConstructor: KalturaSchedulerStatus, subType: 'KalturaSchedulerStatus' },
            configs: { type: 'a', subTypeConstructor: KalturaSchedulerConfig, subType: 'KalturaSchedulerConfig' },
            lockedJobs: { type: 'a', subTypeConstructor: KalturaBatchJob, subType: 'KalturaBatchJob' },
            avgWait: { type: 'n' },
            avgWork: { type: 'n' },
            lastStatus: { type: 'n' },
            lastStatusStr: { type: 's' }
        });
        return result;
    };
    return KalturaSchedulerWorker;
}(KalturaObjectBase));
export { KalturaSchedulerWorker };
if (false) {
    /** @type {?} */
    KalturaSchedulerWorker.prototype.id;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.configuredId;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.schedulerId;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.schedulerConfiguredId;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.type;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.typeName;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.name;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.statuses;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.configs;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.lockedJobs;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.avgWait;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.avgWork;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.lastStatus;
    /** @type {?} */
    KalturaSchedulerWorker.prototype.lastStatusStr;
}
typesMappingStorage['KalturaSchedulerWorker'] = KalturaSchedulerWorker;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlcldvcmtlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNjaGVkdWxlcldvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJsRixJQUFBO0lBQTRDLGtEQUFpQjtJQWlCekQsZ0NBQVksSUFBa0M7UUFBOUMsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FJZDtRQUhHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOztLQUM5RDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ2pHLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMxRyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN6RyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDOUYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQTFFTDtFQXlCNEMsaUJBQWlCLEVBa0Q1RCxDQUFBO0FBbERELGtDQWtEQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhdGNoSm9iVHlwZSB9IGZyb20gJy4vS2FsdHVyYUJhdGNoSm9iVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVyU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVyU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZXJDb25maWcgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZXJDb25maWcnO1xuaW1wb3J0IHsgS2FsdHVyYUJhdGNoSm9iIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2InO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTY2hlZHVsZXJXb3JrZXJBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgY29uZmlndXJlZElkPyA6IG51bWJlcjtcblx0c2NoZWR1bGVySWQ/IDogbnVtYmVyO1xuXHRzY2hlZHVsZXJDb25maWd1cmVkSWQ/IDogbnVtYmVyO1xuXHR0eXBlPyA6IEthbHR1cmFCYXRjaEpvYlR5cGU7XG5cdHR5cGVOYW1lPyA6IHN0cmluZztcblx0bmFtZT8gOiBzdHJpbmc7XG5cdHN0YXR1c2VzPyA6IEthbHR1cmFTY2hlZHVsZXJTdGF0dXNbXTtcblx0Y29uZmlncz8gOiBLYWx0dXJhU2NoZWR1bGVyQ29uZmlnW107XG5cdGxvY2tlZEpvYnM/IDogS2FsdHVyYUJhdGNoSm9iW107XG5cdGF2Z1dhaXQ/IDogbnVtYmVyO1xuXHRhdmdXb3JrPyA6IG51bWJlcjtcblx0bGFzdFN0YXR1cz8gOiBudW1iZXI7XG5cdGxhc3RTdGF0dXNTdHI/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2NoZWR1bGVyV29ya2VyIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdGNvbmZpZ3VyZWRJZCA6IG51bWJlcjtcblx0c2NoZWR1bGVySWQgOiBudW1iZXI7XG5cdHNjaGVkdWxlckNvbmZpZ3VyZWRJZCA6IG51bWJlcjtcblx0dHlwZSA6IEthbHR1cmFCYXRjaEpvYlR5cGU7XG5cdHR5cGVOYW1lIDogc3RyaW5nO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzdGF0dXNlcyA6IEthbHR1cmFTY2hlZHVsZXJTdGF0dXNbXTtcblx0Y29uZmlncyA6IEthbHR1cmFTY2hlZHVsZXJDb25maWdbXTtcblx0bG9ja2VkSm9icyA6IEthbHR1cmFCYXRjaEpvYltdO1xuXHRhdmdXYWl0IDogbnVtYmVyO1xuXHRhdmdXb3JrIDogbnVtYmVyO1xuXHRsYXN0U3RhdHVzIDogbnVtYmVyO1xuXHRsYXN0U3RhdHVzU3RyIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2NoZWR1bGVyV29ya2VyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc3RhdHVzZXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnN0YXR1c2VzID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmNvbmZpZ3MgPT09ICd1bmRlZmluZWQnKSB0aGlzLmNvbmZpZ3MgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMubG9ja2VkSm9icyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMubG9ja2VkSm9icyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY2hlZHVsZXJXb3JrZXInIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y29uZmlndXJlZElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNjaGVkdWxlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNjaGVkdWxlckNvbmZpZ3VyZWRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhdGNoSm9iVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQmF0Y2hKb2JUeXBlJyB9LFxuXHRcdFx0XHR0eXBlTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c2VzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVyU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZXJTdGF0dXMnIH0sXG5cdFx0XHRcdGNvbmZpZ3MgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZXJDb25maWcsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlckNvbmZpZycgfSxcblx0XHRcdFx0bG9ja2VkSm9icyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhdGNoSm9iLCBzdWJUeXBlIDogJ0thbHR1cmFCYXRjaEpvYicgfSxcblx0XHRcdFx0YXZnV2FpdCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhdmdXb3JrIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxhc3RTdGF0dXMgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdFN0YXR1c1N0ciA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NoZWR1bGVyV29ya2VyJ10gPSBLYWx0dXJhU2NoZWR1bGVyV29ya2VyOyJdfQ==