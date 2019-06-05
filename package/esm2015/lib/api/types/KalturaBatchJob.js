/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaBatchJob extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.history === 'undefined')
            this.history = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhdGNoSm9iLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQmF0Y2hKb2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ2xGLE1BQU0sc0JBQXVCLFNBQVEsaUJBQWlCOzs7O0lBeUNsRCxZQUFZLElBQTJCO1FBRW5DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztLQUM5RDs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDcEUsRUFBRSxFQUFHLEVBQUUs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LEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNyQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hKb2JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hKb2JTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFCYXRjaEpvYlN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hIaXN0b3J5RGF0YSB9IGZyb20gJy4vS2FsdHVyYUJhdGNoSGlzdG9yeURhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcyB9IGZyb20gJy4vS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJhdGNoSm9iQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGVudHJ5SWQ/IDogc3RyaW5nO1xuXHRlbnRyeU5hbWU/IDogc3RyaW5nO1xuXHRqb2JTdWJUeXBlPyA6IG51bWJlcjtcblx0ZGF0YT8gOiBLYWx0dXJhSm9iRGF0YTtcblx0c3RhdHVzPyA6IEthbHR1cmFCYXRjaEpvYlN0YXR1cztcblx0YWJvcnQ/IDogbnVtYmVyO1xuXHRjaGVja0FnYWluVGltZW91dD8gOiBudW1iZXI7XG5cdG1lc3NhZ2U/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHByaW9yaXR5PyA6IG51bWJlcjtcblx0aGlzdG9yeT8gOiBLYWx0dXJhQmF0Y2hIaXN0b3J5RGF0YVtdO1xuXHRidWxrSm9iSWQ/IDogbnVtYmVyO1xuXHRiYXRjaFZlcnNpb24/IDogbnVtYmVyO1xuXHRwYXJlbnRKb2JJZD8gOiBudW1iZXI7XG5cdHJvb3RKb2JJZD8gOiBudW1iZXI7XG5cdHF1ZXVlVGltZT8gOiBudW1iZXI7XG5cdGZpbmlzaFRpbWU/IDogbnVtYmVyO1xuXHRlcnJUeXBlPyA6IEthbHR1cmFCYXRjaEpvYkVycm9yVHlwZXM7XG5cdGVyck51bWJlcj8gOiBudW1iZXI7XG5cdGVzdGltYXRlZEVmZm9ydD8gOiBudW1iZXI7XG5cdHVyZ2VuY3k/IDogbnVtYmVyO1xuXHRzY2hlZHVsZXJJZD8gOiBudW1iZXI7XG5cdHdvcmtlcklkPyA6IG51bWJlcjtcblx0YmF0Y2hJbmRleD8gOiBudW1iZXI7XG5cdGxhc3RTY2hlZHVsZXJJZD8gOiBudW1iZXI7XG5cdGxhc3RXb3JrZXJJZD8gOiBudW1iZXI7XG5cdGRjPyA6IG51bWJlcjtcblx0am9iT2JqZWN0SWQ/IDogc3RyaW5nO1xuXHRqb2JPYmplY3RUeXBlPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJhdGNoSm9iIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgY3JlYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgdXBkYXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgZGVsZXRlZEF0IDogRGF0ZTtcblx0cmVhZG9ubHkgbG9ja0V4cGlyYXRpb24gOiBudW1iZXI7XG5cdHJlYWRvbmx5IGV4ZWN1dGlvbkF0dGVtcHRzIDogbnVtYmVyO1xuXHRyZWFkb25seSBsb2NrVmVyc2lvbiA6IG51bWJlcjtcblx0ZW50cnlJZCA6IHN0cmluZztcblx0ZW50cnlOYW1lIDogc3RyaW5nO1xuXHRyZWFkb25seSBqb2JUeXBlIDogS2FsdHVyYUJhdGNoSm9iVHlwZTtcblx0am9iU3ViVHlwZSA6IG51bWJlcjtcblx0ZGF0YSA6IEthbHR1cmFKb2JEYXRhO1xuXHRzdGF0dXMgOiBLYWx0dXJhQmF0Y2hKb2JTdGF0dXM7XG5cdGFib3J0IDogbnVtYmVyO1xuXHRjaGVja0FnYWluVGltZW91dCA6IG51bWJlcjtcblx0bWVzc2FnZSA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHByaW9yaXR5IDogbnVtYmVyO1xuXHRoaXN0b3J5IDogS2FsdHVyYUJhdGNoSGlzdG9yeURhdGFbXTtcblx0YnVsa0pvYklkIDogbnVtYmVyO1xuXHRiYXRjaFZlcnNpb24gOiBudW1iZXI7XG5cdHBhcmVudEpvYklkIDogbnVtYmVyO1xuXHRyb290Sm9iSWQgOiBudW1iZXI7XG5cdHF1ZXVlVGltZSA6IG51bWJlcjtcblx0ZmluaXNoVGltZSA6IG51bWJlcjtcblx0ZXJyVHlwZSA6IEthbHR1cmFCYXRjaEpvYkVycm9yVHlwZXM7XG5cdGVyck51bWJlciA6IG51bWJlcjtcblx0ZXN0aW1hdGVkRWZmb3J0IDogbnVtYmVyO1xuXHR1cmdlbmN5IDogbnVtYmVyO1xuXHRzY2hlZHVsZXJJZCA6IG51bWJlcjtcblx0d29ya2VySWQgOiBudW1iZXI7XG5cdGJhdGNoSW5kZXggOiBudW1iZXI7XG5cdGxhc3RTY2hlZHVsZXJJZCA6IG51bWJlcjtcblx0bGFzdFdvcmtlcklkIDogbnVtYmVyO1xuXHRkYyA6IG51bWJlcjtcblx0am9iT2JqZWN0SWQgOiBzdHJpbmc7XG5cdGpvYk9iamVjdFR5cGUgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCYXRjaEpvYkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB0aGlzLmhpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQmF0Y2hKb2InIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZGVsZXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bG9ja0V4cGlyYXRpb24gOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRleGVjdXRpb25BdHRlbXB0cyA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGxvY2tWZXJzaW9uIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0am9iVHlwZSA6IHsgdHlwZSA6ICdlcycsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhdGNoSm9iVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQmF0Y2hKb2JUeXBlJyB9LFxuXHRcdFx0XHRqb2JTdWJUeXBlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFKb2JEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFKb2JEYXRhJyB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmF0Y2hKb2JTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUJhdGNoSm9iU3RhdHVzJyB9LFxuXHRcdFx0XHRhYm9ydCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjaGVja0FnYWluVGltZW91dCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtZXNzYWdlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByaW9yaXR5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGhpc3RvcnkgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXRjaEhpc3RvcnlEYXRhLCBzdWJUeXBlIDogJ0thbHR1cmFCYXRjaEhpc3RvcnlEYXRhJyB9LFxuXHRcdFx0XHRidWxrSm9iSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YmF0Y2hWZXJzaW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcmVudEpvYklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHJvb3RKb2JJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRxdWV1ZVRpbWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmluaXNoVGltZSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlcnJUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcywgc3ViVHlwZSA6ICdLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzJyB9LFxuXHRcdFx0XHRlcnJOdW1iZXIgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXN0aW1hdGVkRWZmb3J0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVyZ2VuY3kgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2NoZWR1bGVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d29ya2VySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YmF0Y2hJbmRleCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsYXN0U2NoZWR1bGVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdFdvcmtlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRjIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGpvYk9iamVjdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGpvYk9iamVjdFR5cGUgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJhdGNoSm9iJ10gPSBLYWx0dXJhQmF0Y2hKb2I7Il19