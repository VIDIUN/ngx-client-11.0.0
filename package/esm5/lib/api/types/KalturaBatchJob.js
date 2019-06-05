/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobType } from './KalturaBatchJobType';
import { KalturaJobData } from './KalturaJobData';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBatchHistoryData } from './KalturaBatchHistoryData';
import { KalturaBatchJobErrorTypes } from './KalturaBatchJobErrorTypes';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBatchJobArgs() { }
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.entryName;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.jobSubType;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.data;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.status;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.abort;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.checkAgainTimeout;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.message;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.description;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.priority;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.history;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.bulkJobId;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.batchVersion;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.parentJobId;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.rootJobId;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.queueTime;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.finishTime;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.errType;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.errNumber;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.estimatedEffort;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.urgency;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.schedulerId;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.workerId;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.batchIndex;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.lastSchedulerId;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.lastWorkerId;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.dc;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.jobObjectId;
/** @type {?|undefined} */
KalturaBatchJobArgs.prototype.jobObjectType;
var KalturaBatchJob = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBatchJob, _super);
    function KalturaBatchJob(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.history === 'undefined')
            _this.history = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaBatchJob.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBatchJob' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            deletedAt: { type: 'd', readOnly: true },
            lockExpiration: { type: 'n', readOnly: true },
            executionAttempts: { type: 'n', readOnly: true },
            lockVersion: { type: 'n', readOnly: true },
            entryId: { type: 's' },
            entryName: { type: 's' },
            jobType: { type: 'es', readOnly: true, subTypeConstructor: KalturaBatchJobType, subType: 'KalturaBatchJobType' },
            jobSubType: { type: 'n' },
            data: { type: 'o', subTypeConstructor: KalturaJobData, subType: 'KalturaJobData' },
            status: { type: 'en', subTypeConstructor: KalturaBatchJobStatus, subType: 'KalturaBatchJobStatus' },
            abort: { type: 'n' },
            checkAgainTimeout: { type: 'n' },
            message: { type: 's' },
            description: { type: 's' },
            priority: { type: 'n' },
            history: { type: 'a', subTypeConstructor: KalturaBatchHistoryData, subType: 'KalturaBatchHistoryData' },
            bulkJobId: { type: 'n' },
            batchVersion: { type: 'n' },
            parentJobId: { type: 'n' },
            rootJobId: { type: 'n' },
            queueTime: { type: 'n' },
            finishTime: { type: 'n' },
            errType: { type: 'en', subTypeConstructor: KalturaBatchJobErrorTypes, subType: 'KalturaBatchJobErrorTypes' },
            errNumber: { type: 'n' },
            estimatedEffort: { type: 'n' },
            urgency: { type: 'n' },
            schedulerId: { type: 'n' },
            workerId: { type: 'n' },
            batchIndex: { type: 'n' },
            lastSchedulerId: { type: 'n' },
            lastWorkerId: { type: 'n' },
            dc: { type: 'n' },
            jobObjectId: { type: 's' },
            jobObjectType: { type: 'n' }
        });
        return result;
    };
    return KalturaBatchJob;
}(KalturaObjectBase));
export { KalturaBatchJob };
if (false) {
    /** @type {?} */
    KalturaBatchJob.prototype.id;
    /** @type {?} */
    KalturaBatchJob.prototype.partnerId;
    /** @type {?} */
    KalturaBatchJob.prototype.createdAt;
    /** @type {?} */
    KalturaBatchJob.prototype.updatedAt;
    /** @type {?} */
    KalturaBatchJob.prototype.deletedAt;
    /** @type {?} */
    KalturaBatchJob.prototype.lockExpiration;
    /** @type {?} */
    KalturaBatchJob.prototype.executionAttempts;
    /** @type {?} */
    KalturaBatchJob.prototype.lockVersion;
    /** @type {?} */
    KalturaBatchJob.prototype.entryId;
    /** @type {?} */
    KalturaBatchJob.prototype.entryName;
    /** @type {?} */
    KalturaBatchJob.prototype.jobType;
    /** @type {?} */
    KalturaBatchJob.prototype.jobSubType;
    /** @type {?} */
    KalturaBatchJob.prototype.data;
    /** @type {?} */
    KalturaBatchJob.prototype.status;
    /** @type {?} */
    KalturaBatchJob.prototype.abort;
    /** @type {?} */
    KalturaBatchJob.prototype.checkAgainTimeout;
    /** @type {?} */
    KalturaBatchJob.prototype.message;
    /** @type {?} */
    KalturaBatchJob.prototype.description;
    /** @type {?} */
    KalturaBatchJob.prototype.priority;
    /** @type {?} */
    KalturaBatchJob.prototype.history;
    /** @type {?} */
    KalturaBatchJob.prototype.bulkJobId;
    /** @type {?} */
    KalturaBatchJob.prototype.batchVersion;
    /** @type {?} */
    KalturaBatchJob.prototype.parentJobId;
    /** @type {?} */
    KalturaBatchJob.prototype.rootJobId;
    /** @type {?} */
    KalturaBatchJob.prototype.queueTime;
    /** @type {?} */
    KalturaBatchJob.prototype.finishTime;
    /** @type {?} */
    KalturaBatchJob.prototype.errType;
    /** @type {?} */
    KalturaBatchJob.prototype.errNumber;
    /** @type {?} */
    KalturaBatchJob.prototype.estimatedEffort;
    /** @type {?} */
    KalturaBatchJob.prototype.urgency;
    /** @type {?} */
    KalturaBatchJob.prototype.schedulerId;
    /** @type {?} */
    KalturaBatchJob.prototype.workerId;
    /** @type {?} */
    KalturaBatchJob.prototype.batchIndex;
    /** @type {?} */
    KalturaBatchJob.prototype.lastSchedulerId;
    /** @type {?} */
    KalturaBatchJob.prototype.lastWorkerId;
    /** @type {?} */
    KalturaBatchJob.prototype.dc;
    /** @type {?} */
    KalturaBatchJob.prototype.jobObjectId;
    /** @type {?} */
    KalturaBatchJob.prototype.jobObjectType;
}
typesMappingStorage['KalturaBatchJob'] = KalturaBatchJob;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhdGNoSm9iLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQmF0Y2hKb2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUNsRixJQUFBO0lBQXFDLDJDQUFpQjtJQXlDbEQseUJBQVksSUFBMkI7UUFBdkMsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzs7S0FDOUQ7Ozs7SUFFUyxzQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNwRSxFQUFFLEVBQUcsRUFBRSxJ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RUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MEJBeklMO0VBMENxQyxpQkFBaUIsRUFnR3JELENBQUE7QUFoR0QsMkJBZ0dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsR0FBRyxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhdGNoSm9iVHlwZSB9IGZyb20gJy4vS2FsdHVyYUJhdGNoSm9iVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYUJhdGNoSm9iU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2JTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUJhdGNoSGlzdG9yeURhdGEgfSBmcm9tICcuL0thbHR1cmFCYXRjaEhpc3RvcnlEYXRhJztcbmltcG9ydCB7IEthbHR1cmFCYXRjaEpvYkVycm9yVHlwZXMgfSBmcm9tICcuL0thbHR1cmFCYXRjaEpvYkVycm9yVHlwZXMnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCYXRjaEpvYkFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBlbnRyeUlkPyA6IHN0cmluZztcblx0ZW50cnlOYW1lPyA6IHN0cmluZztcblx0am9iU3ViVHlwZT8gOiBudW1iZXI7XG5cdGRhdGE/IDogS2FsdHVyYUpvYkRhdGE7XG5cdHN0YXR1cz8gOiBLYWx0dXJhQmF0Y2hKb2JTdGF0dXM7XG5cdGFib3J0PyA6IG51bWJlcjtcblx0Y2hlY2tBZ2FpblRpbWVvdXQ/IDogbnVtYmVyO1xuXHRtZXNzYWdlPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRwcmlvcml0eT8gOiBudW1iZXI7XG5cdGhpc3Rvcnk/IDogS2FsdHVyYUJhdGNoSGlzdG9yeURhdGFbXTtcblx0YnVsa0pvYklkPyA6IG51bWJlcjtcblx0YmF0Y2hWZXJzaW9uPyA6IG51bWJlcjtcblx0cGFyZW50Sm9iSWQ/IDogbnVtYmVyO1xuXHRyb290Sm9iSWQ/IDogbnVtYmVyO1xuXHRxdWV1ZVRpbWU/IDogbnVtYmVyO1xuXHRmaW5pc2hUaW1lPyA6IG51bWJlcjtcblx0ZXJyVHlwZT8gOiBLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzO1xuXHRlcnJOdW1iZXI/IDogbnVtYmVyO1xuXHRlc3RpbWF0ZWRFZmZvcnQ/IDogbnVtYmVyO1xuXHR1cmdlbmN5PyA6IG51bWJlcjtcblx0c2NoZWR1bGVySWQ/IDogbnVtYmVyO1xuXHR3b3JrZXJJZD8gOiBudW1iZXI7XG5cdGJhdGNoSW5kZXg/IDogbnVtYmVyO1xuXHRsYXN0U2NoZWR1bGVySWQ/IDogbnVtYmVyO1xuXHRsYXN0V29ya2VySWQ/IDogbnVtYmVyO1xuXHRkYz8gOiBudW1iZXI7XG5cdGpvYk9iamVjdElkPyA6IHN0cmluZztcblx0am9iT2JqZWN0VHlwZT8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCYXRjaEpvYiBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IGRlbGV0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IGxvY2tFeHBpcmF0aW9uIDogbnVtYmVyO1xuXHRyZWFkb25seSBleGVjdXRpb25BdHRlbXB0cyA6IG51bWJlcjtcblx0cmVhZG9ubHkgbG9ja1ZlcnNpb24gOiBudW1iZXI7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdGVudHJ5TmFtZSA6IHN0cmluZztcblx0cmVhZG9ubHkgam9iVHlwZSA6IEthbHR1cmFCYXRjaEpvYlR5cGU7XG5cdGpvYlN1YlR5cGUgOiBudW1iZXI7XG5cdGRhdGEgOiBLYWx0dXJhSm9iRGF0YTtcblx0c3RhdHVzIDogS2FsdHVyYUJhdGNoSm9iU3RhdHVzO1xuXHRhYm9ydCA6IG51bWJlcjtcblx0Y2hlY2tBZ2FpblRpbWVvdXQgOiBudW1iZXI7XG5cdG1lc3NhZ2UgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRwcmlvcml0eSA6IG51bWJlcjtcblx0aGlzdG9yeSA6IEthbHR1cmFCYXRjaEhpc3RvcnlEYXRhW107XG5cdGJ1bGtKb2JJZCA6IG51bWJlcjtcblx0YmF0Y2hWZXJzaW9uIDogbnVtYmVyO1xuXHRwYXJlbnRKb2JJZCA6IG51bWJlcjtcblx0cm9vdEpvYklkIDogbnVtYmVyO1xuXHRxdWV1ZVRpbWUgOiBudW1iZXI7XG5cdGZpbmlzaFRpbWUgOiBudW1iZXI7XG5cdGVyclR5cGUgOiBLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzO1xuXHRlcnJOdW1iZXIgOiBudW1iZXI7XG5cdGVzdGltYXRlZEVmZm9ydCA6IG51bWJlcjtcblx0dXJnZW5jeSA6IG51bWJlcjtcblx0c2NoZWR1bGVySWQgOiBudW1iZXI7XG5cdHdvcmtlcklkIDogbnVtYmVyO1xuXHRiYXRjaEluZGV4IDogbnVtYmVyO1xuXHRsYXN0U2NoZWR1bGVySWQgOiBudW1iZXI7XG5cdGxhc3RXb3JrZXJJZCA6IG51bWJlcjtcblx0ZGMgOiBudW1iZXI7XG5cdGpvYk9iamVjdElkIDogc3RyaW5nO1xuXHRqb2JPYmplY3RUeXBlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQmF0Y2hKb2JBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJhdGNoSm9iJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGRlbGV0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGxvY2tFeHBpcmF0aW9uIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZXhlY3V0aW9uQXR0ZW1wdHMgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRsb2NrVmVyc2lvbiA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGpvYlR5cGUgOiB7IHR5cGUgOiAnZXMnLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXRjaEpvYlR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUJhdGNoSm9iVHlwZScgfSxcblx0XHRcdFx0am9iU3ViVHlwZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkYXRhIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSm9iRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhSm9iRGF0YScgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhdGNoSm9iU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFCYXRjaEpvYlN0YXR1cycgfSxcblx0XHRcdFx0YWJvcnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2hlY2tBZ2FpblRpbWVvdXQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWVzc2FnZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcmlvcml0eSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRoaXN0b3J5IDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmF0Y2hIaXN0b3J5RGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhQmF0Y2hIaXN0b3J5RGF0YScgfSxcblx0XHRcdFx0YnVsa0pvYklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJhdGNoVmVyc2lvbiA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJlbnRKb2JJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyb290Sm9iSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cXVldWVUaW1lIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpbmlzaFRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXJyVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXRjaEpvYkVycm9yVHlwZXMsIHN1YlR5cGUgOiAnS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcycgfSxcblx0XHRcdFx0ZXJyTnVtYmVyIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVzdGltYXRlZEVmZm9ydCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1cmdlbmN5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNjaGVkdWxlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdvcmtlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJhdGNoSW5kZXggOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdFNjaGVkdWxlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxhc3RXb3JrZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkYyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRqb2JPYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRqb2JPYmplY3RUeXBlIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCYXRjaEpvYiddID0gS2FsdHVyYUJhdGNoSm9iOyJdfQ==