/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobType } from './KalturaBatchJobType';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBatchJobErrorTypes } from './KalturaBatchJobErrorTypes';
import { KalturaFilter } from './KalturaFilter';
/**
 * @record
 */
export function KalturaBatchJobBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.idGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.partnerIdEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.partnerIdIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.partnerIdNotIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.executionAttemptsGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.executionAttemptsLessThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.lockVersionGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.lockVersionLessThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.jobTypeEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.jobTypeIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.jobTypeNotIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.jobSubTypeEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.jobSubTypeIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.jobSubTypeNotIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.statusNotIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.priorityGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.priorityLessThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.priorityEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.priorityIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.priorityNotIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.batchVersionGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.batchVersionLessThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.batchVersionEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.queueTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.queueTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.finishTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.finishTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.errTypeEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.errTypeIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.errTypeNotIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.errNumberEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.errNumberIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.errNumberNotIn;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.estimatedEffortLessThan;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.estimatedEffortGreaterThan;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.urgencyLessThanOrEqual;
/** @type {?|undefined} */
KalturaBatchJobBaseFilterArgs.prototype.urgencyGreaterThanOrEqual;
export class KalturaBatchJobBaseFilter extends KalturaFilter {
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
            objectType: { type: 'c', default: 'KalturaBatchJobBaseFilter' },
            idEqual: { type: 'n' },
            idGreaterThanOrEqual: { type: 'n' },
            partnerIdEqual: { type: 'n' },
            partnerIdIn: { type: 's' },
            partnerIdNotIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            executionAttemptsGreaterThanOrEqual: { type: 'n' },
            executionAttemptsLessThanOrEqual: { type: 'n' },
            lockVersionGreaterThanOrEqual: { type: 'n' },
            lockVersionLessThanOrEqual: { type: 'n' },
            entryIdEqual: { type: 's' },
            jobTypeEqual: { type: 'es', subTypeConstructor: KalturaBatchJobType, subType: 'KalturaBatchJobType' },
            jobTypeIn: { type: 's' },
            jobTypeNotIn: { type: 's' },
            jobSubTypeEqual: { type: 'n' },
            jobSubTypeIn: { type: 's' },
            jobSubTypeNotIn: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaBatchJobStatus, subType: 'KalturaBatchJobStatus' },
            statusIn: { type: 's' },
            statusNotIn: { type: 's' },
            priorityGreaterThanOrEqual: { type: 'n' },
            priorityLessThanOrEqual: { type: 'n' },
            priorityEqual: { type: 'n' },
            priorityIn: { type: 's' },
            priorityNotIn: { type: 's' },
            batchVersionGreaterThanOrEqual: { type: 'n' },
            batchVersionLessThanOrEqual: { type: 'n' },
            batchVersionEqual: { type: 'n' },
            queueTimeGreaterThanOrEqual: { type: 'n' },
            queueTimeLessThanOrEqual: { type: 'n' },
            finishTimeGreaterThanOrEqual: { type: 'n' },
            finishTimeLessThanOrEqual: { type: 'n' },
            errTypeEqual: { type: 'en', subTypeConstructor: KalturaBatchJobErrorTypes, subType: 'KalturaBatchJobErrorTypes' },
            errTypeIn: { type: 's' },
            errTypeNotIn: { type: 's' },
            errNumberEqual: { type: 'n' },
            errNumberIn: { type: 's' },
            errNumberNotIn: { type: 's' },
            estimatedEffortLessThan: { type: 'n' },
            estimatedEffortGreaterThan: { type: 'n' },
            urgencyLessThanOrEqual: { type: 'n' },
            urgencyGreaterThanOrEqual: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.idGreaterThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.partnerIdEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.partnerIdIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.partnerIdNotIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.executionAttemptsGreaterThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.executionAttemptsLessThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.lockVersionGreaterThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.lockVersionLessThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.jobTypeEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.jobTypeIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.jobTypeNotIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.jobSubTypeEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.jobSubTypeIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.jobSubTypeNotIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.statusNotIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.priorityGreaterThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.priorityLessThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.priorityEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.priorityIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.priorityNotIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.batchVersionGreaterThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.batchVersionLessThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.batchVersionEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.queueTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.queueTimeLessThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.finishTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.finishTimeLessThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.errTypeEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.errTypeIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.errTypeNotIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.errNumberEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.errNumberIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.errNumberNotIn;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.estimatedEffortLessThan;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.estimatedEffortGreaterThan;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.urgencyLessThanOrEqual;
    /** @type {?} */
    KalturaBatchJobBaseFilter.prototype.urgencyGreaterThanOrEqual;
}
typesMappingStorage['KalturaBatchJobBaseFilter'] = KalturaBatchJobBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhdGNoSm9iQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJhdGNoSm9iQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURuRSxNQUFNLGdDQUFpQyxTQUFRLGFBQWE7Ozs7SUFnRHhELFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxF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QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2Qyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXRjaEpvYlR5cGUgfSBmcm9tICcuL0thbHR1cmFCYXRjaEpvYlR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUJhdGNoSm9iU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2JTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcyB9IGZyb20gJy4vS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcyc7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyLCBLYWx0dXJhRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJhdGNoSm9iQmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbHRlckFyZ3Mge1xuICAgIGlkRXF1YWw/IDogbnVtYmVyO1xuXHRpZEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZEVxdWFsPyA6IG51bWJlcjtcblx0cGFydG5lcklkSW4/IDogc3RyaW5nO1xuXHRwYXJ0bmVySWROb3RJbj8gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRleGVjdXRpb25BdHRlbXB0c0dyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGV4ZWN1dGlvbkF0dGVtcHRzTGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0bG9ja1ZlcnNpb25HcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRsb2NrVmVyc2lvbkxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGVudHJ5SWRFcXVhbD8gOiBzdHJpbmc7XG5cdGpvYlR5cGVFcXVhbD8gOiBLYWx0dXJhQmF0Y2hKb2JUeXBlO1xuXHRqb2JUeXBlSW4/IDogc3RyaW5nO1xuXHRqb2JUeXBlTm90SW4/IDogc3RyaW5nO1xuXHRqb2JTdWJUeXBlRXF1YWw/IDogbnVtYmVyO1xuXHRqb2JTdWJUeXBlSW4/IDogc3RyaW5nO1xuXHRqb2JTdWJUeXBlTm90SW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhQmF0Y2hKb2JTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0c3RhdHVzTm90SW4/IDogc3RyaW5nO1xuXHRwcmlvcml0eUdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHByaW9yaXR5TGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0cHJpb3JpdHlFcXVhbD8gOiBudW1iZXI7XG5cdHByaW9yaXR5SW4/IDogc3RyaW5nO1xuXHRwcmlvcml0eU5vdEluPyA6IHN0cmluZztcblx0YmF0Y2hWZXJzaW9uR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0YmF0Y2hWZXJzaW9uTGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0YmF0Y2hWZXJzaW9uRXF1YWw/IDogbnVtYmVyO1xuXHRxdWV1ZVRpbWVHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRxdWV1ZVRpbWVMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRmaW5pc2hUaW1lR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZmluaXNoVGltZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGVyclR5cGVFcXVhbD8gOiBLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzO1xuXHRlcnJUeXBlSW4/IDogc3RyaW5nO1xuXHRlcnJUeXBlTm90SW4/IDogc3RyaW5nO1xuXHRlcnJOdW1iZXJFcXVhbD8gOiBudW1iZXI7XG5cdGVyck51bWJlckluPyA6IHN0cmluZztcblx0ZXJyTnVtYmVyTm90SW4/IDogc3RyaW5nO1xuXHRlc3RpbWF0ZWRFZmZvcnRMZXNzVGhhbj8gOiBudW1iZXI7XG5cdGVzdGltYXRlZEVmZm9ydEdyZWF0ZXJUaGFuPyA6IG51bWJlcjtcblx0dXJnZW5jeUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHVyZ2VuY3lHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQmF0Y2hKb2JCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUZpbHRlciB7XG5cbiAgICBpZEVxdWFsIDogbnVtYmVyO1xuXHRpZEdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0cGFydG5lcklkRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluIDogc3RyaW5nO1xuXHRwYXJ0bmVySWROb3RJbiA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0ZXhlY3V0aW9uQXR0ZW1wdHNHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGV4ZWN1dGlvbkF0dGVtcHRzTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRsb2NrVmVyc2lvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0bG9ja1ZlcnNpb25MZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGVudHJ5SWRFcXVhbCA6IHN0cmluZztcblx0am9iVHlwZUVxdWFsIDogS2FsdHVyYUJhdGNoSm9iVHlwZTtcblx0am9iVHlwZUluIDogc3RyaW5nO1xuXHRqb2JUeXBlTm90SW4gOiBzdHJpbmc7XG5cdGpvYlN1YlR5cGVFcXVhbCA6IG51bWJlcjtcblx0am9iU3ViVHlwZUluIDogc3RyaW5nO1xuXHRqb2JTdWJUeXBlTm90SW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYUJhdGNoSm9iU3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0c3RhdHVzTm90SW4gOiBzdHJpbmc7XG5cdHByaW9yaXR5R3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRwcmlvcml0eUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0cHJpb3JpdHlFcXVhbCA6IG51bWJlcjtcblx0cHJpb3JpdHlJbiA6IHN0cmluZztcblx0cHJpb3JpdHlOb3RJbiA6IHN0cmluZztcblx0YmF0Y2hWZXJzaW9uR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRiYXRjaFZlcnNpb25MZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGJhdGNoVmVyc2lvbkVxdWFsIDogbnVtYmVyO1xuXHRxdWV1ZVRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHF1ZXVlVGltZUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZmluaXNoVGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZmluaXNoVGltZUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZXJyVHlwZUVxdWFsIDogS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcztcblx0ZXJyVHlwZUluIDogc3RyaW5nO1xuXHRlcnJUeXBlTm90SW4gOiBzdHJpbmc7XG5cdGVyck51bWJlckVxdWFsIDogbnVtYmVyO1xuXHRlcnJOdW1iZXJJbiA6IHN0cmluZztcblx0ZXJyTnVtYmVyTm90SW4gOiBzdHJpbmc7XG5cdGVzdGltYXRlZEVmZm9ydExlc3NUaGFuIDogbnVtYmVyO1xuXHRlc3RpbWF0ZWRFZmZvcnRHcmVhdGVyVGhhbiA6IG51bWJlcjtcblx0dXJnZW5jeUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0dXJnZW5jeUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJhdGNoSm9iQmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQmF0Y2hKb2JCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZE5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRleGVjdXRpb25BdHRlbXB0c0dyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRleGVjdXRpb25BdHRlbXB0c0xlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsb2NrVmVyc2lvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsb2NrVmVyc2lvbkxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbnRyeUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0am9iVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhdGNoSm9iVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQmF0Y2hKb2JUeXBlJyB9LFxuXHRcdFx0XHRqb2JUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0am9iVHlwZU5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGpvYlN1YlR5cGVFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRqb2JTdWJUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0am9iU3ViVHlwZU5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhdGNoSm9iU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFCYXRjaEpvYlN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzTm90SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJpb3JpdHlHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJpb3JpdHlMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJpb3JpdHlFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcmlvcml0eUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByaW9yaXR5Tm90SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YmF0Y2hWZXJzaW9uR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJhdGNoVmVyc2lvbkxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRiYXRjaFZlcnNpb25FcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRxdWV1ZVRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cXVldWVUaW1lTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpbmlzaFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZmluaXNoVGltZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlcnJUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzLCBzdWJUeXBlIDogJ0thbHR1cmFCYXRjaEpvYkVycm9yVHlwZXMnIH0sXG5cdFx0XHRcdGVyclR5cGVJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlcnJUeXBlTm90SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXJyTnVtYmVyRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXJyTnVtYmVySW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXJyTnVtYmVyTm90SW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXN0aW1hdGVkRWZmb3J0TGVzc1RoYW4gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXN0aW1hdGVkRWZmb3J0R3JlYXRlclRoYW4gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXJnZW5jeUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1cmdlbmN5R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCYXRjaEpvYkJhc2VGaWx0ZXInXSA9IEthbHR1cmFCYXRjaEpvYkJhc2VGaWx0ZXI7Il19