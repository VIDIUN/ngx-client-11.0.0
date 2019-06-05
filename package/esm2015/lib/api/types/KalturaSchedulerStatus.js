/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobType } from './KalturaBatchJobType';
import { KalturaSchedulerStatusType } from './KalturaSchedulerStatusType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaSchedulerStatusArgs() { }
/** @type {?|undefined} */
KalturaSchedulerStatusArgs.prototype.schedulerConfiguredId;
/** @type {?|undefined} */
KalturaSchedulerStatusArgs.prototype.workerConfiguredId;
/** @type {?|undefined} */
KalturaSchedulerStatusArgs.prototype.workerType;
/** @type {?|undefined} */
KalturaSchedulerStatusArgs.prototype.type;
/** @type {?|undefined} */
KalturaSchedulerStatusArgs.prototype.value;
export class KalturaSchedulerStatus extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaSchedulerStatus' },
            id: { type: 'n', readOnly: true },
            schedulerConfiguredId: { type: 'n' },
            workerConfiguredId: { type: 'n' },
            workerType: { type: 'es', subTypeConstructor: KalturaBatchJobType, subType: 'KalturaBatchJobType' },
            type: { type: 'en', subTypeConstructor: KalturaSchedulerStatusType, subType: 'KalturaSchedulerStatusType' },
            value: { type: 'n' },
            schedulerId: { type: 'n', readOnly: true },
            workerId: { type: 'n', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSchedulerStatus.prototype.id;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.schedulerConfiguredId;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.workerConfiguredId;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.workerType;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.type;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.value;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.schedulerId;
    /** @type {?} */
    KalturaSchedulerStatus.prototype.workerId;
}
typesMappingStorage['KalturaSchedulerStatus'] = KalturaSchedulerStatus;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlclN0YXR1cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNjaGVkdWxlclN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLE1BQU0sNkJBQThCLFNBQVEsaUJBQWlCOzs7O0lBV3pELFlBQVksSUFBa0M7UUFFMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUJBQW1CLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3ZHLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9HLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzdDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUNqQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXRjaEpvYlR5cGUgfSBmcm9tICcuL0thbHR1cmFCYXRjaEpvYlR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlclN0YXR1c1R5cGUgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZXJTdGF0dXNUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2NoZWR1bGVyU3RhdHVzQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHNjaGVkdWxlckNvbmZpZ3VyZWRJZD8gOiBudW1iZXI7XG5cdHdvcmtlckNvbmZpZ3VyZWRJZD8gOiBudW1iZXI7XG5cdHdvcmtlclR5cGU/IDogS2FsdHVyYUJhdGNoSm9iVHlwZTtcblx0dHlwZT8gOiBLYWx0dXJhU2NoZWR1bGVyU3RhdHVzVHlwZTtcblx0dmFsdWU/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2NoZWR1bGVyU3RhdHVzIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHNjaGVkdWxlckNvbmZpZ3VyZWRJZCA6IG51bWJlcjtcblx0d29ya2VyQ29uZmlndXJlZElkIDogbnVtYmVyO1xuXHR3b3JrZXJUeXBlIDogS2FsdHVyYUJhdGNoSm9iVHlwZTtcblx0dHlwZSA6IEthbHR1cmFTY2hlZHVsZXJTdGF0dXNUeXBlO1xuXHR2YWx1ZSA6IG51bWJlcjtcblx0cmVhZG9ubHkgc2NoZWR1bGVySWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHdvcmtlcklkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2NoZWR1bGVyU3RhdHVzQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY2hlZHVsZXJTdGF0dXMnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c2NoZWR1bGVyQ29uZmlndXJlZElkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdvcmtlckNvbmZpZ3VyZWRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3b3JrZXJUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhdGNoSm9iVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQmF0Y2hKb2JUeXBlJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlclN0YXR1c1R5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlclN0YXR1c1R5cGUnIH0sXG5cdFx0XHRcdHZhbHVlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNjaGVkdWxlcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0d29ya2VySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NoZWR1bGVyU3RhdHVzJ10gPSBLYWx0dXJhU2NoZWR1bGVyU3RhdHVzOyJdfQ==