/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaSchedulerWorker extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.statuses === 'undefined')
            this.statuses = [];
        if (typeof this.configs === 'undefined')
            this.configs = [];
        if (typeof this.lockedJobs === 'undefined')
            this.lockedJobs = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlcldvcmtlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNjaGVkdWxlcldvcmtlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQmxGLE1BQU0sNkJBQThCLFNBQVEsaUJBQWlCOzs7O0lBaUJ6RCxZQUFZLElBQWtDO1FBRTFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuRSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDM0QsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0tBQzlEOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDcEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUNqRyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDMUcsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDekcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQzlGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hKb2JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlckNvbmZpZyB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlckNvbmZpZyc7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hKb2IgfSBmcm9tICcuL0thbHR1cmFCYXRjaEpvYic7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNjaGVkdWxlcldvcmtlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBjb25maWd1cmVkSWQ/IDogbnVtYmVyO1xuXHRzY2hlZHVsZXJJZD8gOiBudW1iZXI7XG5cdHNjaGVkdWxlckNvbmZpZ3VyZWRJZD8gOiBudW1iZXI7XG5cdHR5cGU/IDogS2FsdHVyYUJhdGNoSm9iVHlwZTtcblx0dHlwZU5hbWU/IDogc3RyaW5nO1xuXHRuYW1lPyA6IHN0cmluZztcblx0c3RhdHVzZXM/IDogS2FsdHVyYVNjaGVkdWxlclN0YXR1c1tdO1xuXHRjb25maWdzPyA6IEthbHR1cmFTY2hlZHVsZXJDb25maWdbXTtcblx0bG9ja2VkSm9icz8gOiBLYWx0dXJhQmF0Y2hKb2JbXTtcblx0YXZnV2FpdD8gOiBudW1iZXI7XG5cdGF2Z1dvcms/IDogbnVtYmVyO1xuXHRsYXN0U3RhdHVzPyA6IG51bWJlcjtcblx0bGFzdFN0YXR1c1N0cj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTY2hlZHVsZXJXb3JrZXIgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0Y29uZmlndXJlZElkIDogbnVtYmVyO1xuXHRzY2hlZHVsZXJJZCA6IG51bWJlcjtcblx0c2NoZWR1bGVyQ29uZmlndXJlZElkIDogbnVtYmVyO1xuXHR0eXBlIDogS2FsdHVyYUJhdGNoSm9iVHlwZTtcblx0dHlwZU5hbWUgOiBzdHJpbmc7XG5cdG5hbWUgOiBzdHJpbmc7XG5cdHN0YXR1c2VzIDogS2FsdHVyYVNjaGVkdWxlclN0YXR1c1tdO1xuXHRjb25maWdzIDogS2FsdHVyYVNjaGVkdWxlckNvbmZpZ1tdO1xuXHRsb2NrZWRKb2JzIDogS2FsdHVyYUJhdGNoSm9iW107XG5cdGF2Z1dhaXQgOiBudW1iZXI7XG5cdGF2Z1dvcmsgOiBudW1iZXI7XG5cdGxhc3RTdGF0dXMgOiBudW1iZXI7XG5cdGxhc3RTdGF0dXNTdHIgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTY2hlZHVsZXJXb3JrZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0dXNlcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuc3RhdHVzZXMgPSBbXTtcblx0XHRpZiAodHlwZW9mIHRoaXMuY29uZmlncyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY29uZmlncyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy5sb2NrZWRKb2JzID09PSAndW5kZWZpbmVkJykgdGhpcy5sb2NrZWRKb2JzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNjaGVkdWxlcldvcmtlcicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjb25maWd1cmVkSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2NoZWR1bGVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2NoZWR1bGVyQ29uZmlndXJlZElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmF0Y2hKb2JUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFCYXRjaEpvYlR5cGUnIH0sXG5cdFx0XHRcdHR5cGVOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzZXMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZXJTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlclN0YXR1cycgfSxcblx0XHRcdFx0Y29uZmlncyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlckNvbmZpZywgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVyQ29uZmlnJyB9LFxuXHRcdFx0XHRsb2NrZWRKb2JzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmF0Y2hKb2IsIHN1YlR5cGUgOiAnS2FsdHVyYUJhdGNoSm9iJyB9LFxuXHRcdFx0XHRhdmdXYWl0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGF2Z1dvcmsgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bGFzdFN0YXR1cyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsYXN0U3RhdHVzU3RyIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTY2hlZHVsZXJXb3JrZXInXSA9IEthbHR1cmFTY2hlZHVsZXJXb3JrZXI7Il19