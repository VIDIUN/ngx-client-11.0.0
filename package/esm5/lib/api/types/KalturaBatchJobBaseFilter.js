/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaBatchJobBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBatchJobBaseFilter, _super);
    function KalturaBatchJobBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBatchJobBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaBatchJobBaseFilter;
}(KalturaFilter));
export { KalturaBatchJobBaseFilter };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJhdGNoSm9iQmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJhdGNoSm9iQmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EbkUsSUFBQTtJQUErQyxxREFBYTtJQWdEeEQsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQyxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVB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LElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBcEtMO0VBd0QrQyxhQUFhLEVBNkczRCxDQUFBO0FBN0dELHFDQTZHQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hKb2JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFCYXRjaEpvYlN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUJhdGNoSm9iU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFCYXRjaEpvYkVycm9yVHlwZXMgfSBmcm9tICcuL0thbHR1cmFCYXRjaEpvYkVycm9yVHlwZXMnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciwgS2FsdHVyYUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCYXRjaEpvYkJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRwYXJ0bmVySWRFcXVhbD8gOiBudW1iZXI7XG5cdHBhcnRuZXJJZEluPyA6IHN0cmluZztcblx0cGFydG5lcklkTm90SW4/IDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0ZXhlY3V0aW9uQXR0ZW1wdHNHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRleGVjdXRpb25BdHRlbXB0c0xlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGxvY2tWZXJzaW9uR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0bG9ja1ZlcnNpb25MZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRlbnRyeUlkRXF1YWw/IDogc3RyaW5nO1xuXHRqb2JUeXBlRXF1YWw/IDogS2FsdHVyYUJhdGNoSm9iVHlwZTtcblx0am9iVHlwZUluPyA6IHN0cmluZztcblx0am9iVHlwZU5vdEluPyA6IHN0cmluZztcblx0am9iU3ViVHlwZUVxdWFsPyA6IG51bWJlcjtcblx0am9iU3ViVHlwZUluPyA6IHN0cmluZztcblx0am9iU3ViVHlwZU5vdEluPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUJhdGNoSm9iU3RhdHVzO1xuXHRzdGF0dXNJbj8gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluPyA6IHN0cmluZztcblx0cHJpb3JpdHlHcmVhdGVyVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRwcmlvcml0eUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdHByaW9yaXR5RXF1YWw/IDogbnVtYmVyO1xuXHRwcmlvcml0eUluPyA6IHN0cmluZztcblx0cHJpb3JpdHlOb3RJbj8gOiBzdHJpbmc7XG5cdGJhdGNoVmVyc2lvbkdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGJhdGNoVmVyc2lvbkxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGJhdGNoVmVyc2lvbkVxdWFsPyA6IG51bWJlcjtcblx0cXVldWVUaW1lR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0cXVldWVUaW1lTGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZmluaXNoVGltZUdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGZpbmlzaFRpbWVMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRlcnJUeXBlRXF1YWw/IDogS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcztcblx0ZXJyVHlwZUluPyA6IHN0cmluZztcblx0ZXJyVHlwZU5vdEluPyA6IHN0cmluZztcblx0ZXJyTnVtYmVyRXF1YWw/IDogbnVtYmVyO1xuXHRlcnJOdW1iZXJJbj8gOiBzdHJpbmc7XG5cdGVyck51bWJlck5vdEluPyA6IHN0cmluZztcblx0ZXN0aW1hdGVkRWZmb3J0TGVzc1RoYW4/IDogbnVtYmVyO1xuXHRlc3RpbWF0ZWRFZmZvcnRHcmVhdGVyVGhhbj8gOiBudW1iZXI7XG5cdHVyZ2VuY3lMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHR1cmdlbmN5R3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJhdGNoSm9iQmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFGaWx0ZXIge1xuXG4gICAgaWRFcXVhbCA6IG51bWJlcjtcblx0aWRHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHBhcnRuZXJJZEVxdWFsIDogbnVtYmVyO1xuXHRwYXJ0bmVySWRJbiA6IHN0cmluZztcblx0cGFydG5lcklkTm90SW4gOiBzdHJpbmc7XG5cdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGV4ZWN1dGlvbkF0dGVtcHRzR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRleGVjdXRpb25BdHRlbXB0c0xlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0bG9ja1ZlcnNpb25HcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGxvY2tWZXJzaW9uTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRlbnRyeUlkRXF1YWwgOiBzdHJpbmc7XG5cdGpvYlR5cGVFcXVhbCA6IEthbHR1cmFCYXRjaEpvYlR5cGU7XG5cdGpvYlR5cGVJbiA6IHN0cmluZztcblx0am9iVHlwZU5vdEluIDogc3RyaW5nO1xuXHRqb2JTdWJUeXBlRXF1YWwgOiBudW1iZXI7XG5cdGpvYlN1YlR5cGVJbiA6IHN0cmluZztcblx0am9iU3ViVHlwZU5vdEluIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFCYXRjaEpvYlN0YXR1cztcblx0c3RhdHVzSW4gOiBzdHJpbmc7XG5cdHN0YXR1c05vdEluIDogc3RyaW5nO1xuXHRwcmlvcml0eUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0cHJpb3JpdHlMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHByaW9yaXR5RXF1YWwgOiBudW1iZXI7XG5cdHByaW9yaXR5SW4gOiBzdHJpbmc7XG5cdHByaW9yaXR5Tm90SW4gOiBzdHJpbmc7XG5cdGJhdGNoVmVyc2lvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0YmF0Y2hWZXJzaW9uTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRiYXRjaFZlcnNpb25FcXVhbCA6IG51bWJlcjtcblx0cXVldWVUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRxdWV1ZVRpbWVMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGZpbmlzaFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGZpbmlzaFRpbWVMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGVyclR5cGVFcXVhbCA6IEthbHR1cmFCYXRjaEpvYkVycm9yVHlwZXM7XG5cdGVyclR5cGVJbiA6IHN0cmluZztcblx0ZXJyVHlwZU5vdEluIDogc3RyaW5nO1xuXHRlcnJOdW1iZXJFcXVhbCA6IG51bWJlcjtcblx0ZXJyTnVtYmVySW4gOiBzdHJpbmc7XG5cdGVyck51bWJlck5vdEluIDogc3RyaW5nO1xuXHRlc3RpbWF0ZWRFZmZvcnRMZXNzVGhhbiA6IG51bWJlcjtcblx0ZXN0aW1hdGVkRWZmb3J0R3JlYXRlclRoYW4gOiBudW1iZXI7XG5cdHVyZ2VuY3lMZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdHVyZ2VuY3lHcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCYXRjaEpvYkJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJhdGNoSm9iQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0aWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpZEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWROb3RJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0ZXhlY3V0aW9uQXR0ZW1wdHNHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXhlY3V0aW9uQXR0ZW1wdHNMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bG9ja1ZlcnNpb25HcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bG9ja1ZlcnNpb25MZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW50cnlJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGpvYlR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXRjaEpvYlR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUJhdGNoSm9iVHlwZScgfSxcblx0XHRcdFx0am9iVHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGpvYlR5cGVOb3RJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRqb2JTdWJUeXBlRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0am9iU3ViVHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGpvYlN1YlR5cGVOb3RJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXRjaEpvYlN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQmF0Y2hKb2JTdGF0dXMnIH0sXG5cdFx0XHRcdHN0YXR1c0luIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0YXR1c05vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByaW9yaXR5R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByaW9yaXR5TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByaW9yaXR5RXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJpb3JpdHlJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcmlvcml0eU5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGJhdGNoVmVyc2lvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRiYXRjaFZlcnNpb25MZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YmF0Y2hWZXJzaW9uRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cXVldWVUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHF1ZXVlVGltZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRmaW5pc2hUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpbmlzaFRpbWVMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZXJyVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcywgc3ViVHlwZSA6ICdLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzJyB9LFxuXHRcdFx0XHRlcnJUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXJyVHlwZU5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVyck51bWJlckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVyck51bWJlckluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVyck51bWJlck5vdEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVzdGltYXRlZEVmZm9ydExlc3NUaGFuIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVzdGltYXRlZEVmZm9ydEdyZWF0ZXJUaGFuIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVyZ2VuY3lMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXJnZW5jeUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQmF0Y2hKb2JCYXNlRmlsdGVyJ10gPSBLYWx0dXJhQmF0Y2hKb2JCYXNlRmlsdGVyOyJdfQ==