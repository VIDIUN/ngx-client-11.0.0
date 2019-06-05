/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaSchedulerConfigArgs() { }
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.createdBy;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.updatedBy;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.commandId;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.commandStatus;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.schedulerId;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.schedulerConfiguredId;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.schedulerName;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.workerId;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.workerConfiguredId;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.workerName;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.variable;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.variablePart;
/** @type {?|undefined} */
KalturaSchedulerConfigArgs.prototype.value;
export class KalturaSchedulerConfig extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaSchedulerConfig' },
            id: { type: 'n', readOnly: true },
            createdBy: { type: 's' },
            updatedBy: { type: 's' },
            commandId: { type: 's' },
            commandStatus: { type: 's' },
            schedulerId: { type: 'n' },
            schedulerConfiguredId: { type: 'n' },
            schedulerName: { type: 's' },
            workerId: { type: 'n' },
            workerConfiguredId: { type: 'n' },
            workerName: { type: 's' },
            variable: { type: 's' },
            variablePart: { type: 's' },
            value: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSchedulerConfig.prototype.id;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.createdBy;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.updatedBy;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.commandId;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.commandStatus;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.schedulerId;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.schedulerConfiguredId;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.schedulerName;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.workerId;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.workerConfiguredId;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.workerName;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.variable;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.variablePart;
    /** @type {?} */
    KalturaSchedulerConfig.prototype.value;
}
typesMappingStorage['KalturaSchedulerConfig'] = KalturaSchedulerConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlckNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNjaGVkdWxlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CbEYsTUFBTSw2QkFBOEIsU0FBUSxpQkFBaUI7Ozs7SUFpQnpELFlBQVksSUFBa0M7UUFFMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdCQUF3QixDQUFDLEdBQUcsc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTY2hlZHVsZXJDb25maWdBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgY3JlYXRlZEJ5PyA6IHN0cmluZztcblx0dXBkYXRlZEJ5PyA6IHN0cmluZztcblx0Y29tbWFuZElkPyA6IHN0cmluZztcblx0Y29tbWFuZFN0YXR1cz8gOiBzdHJpbmc7XG5cdHNjaGVkdWxlcklkPyA6IG51bWJlcjtcblx0c2NoZWR1bGVyQ29uZmlndXJlZElkPyA6IG51bWJlcjtcblx0c2NoZWR1bGVyTmFtZT8gOiBzdHJpbmc7XG5cdHdvcmtlcklkPyA6IG51bWJlcjtcblx0d29ya2VyQ29uZmlndXJlZElkPyA6IG51bWJlcjtcblx0d29ya2VyTmFtZT8gOiBzdHJpbmc7XG5cdHZhcmlhYmxlPyA6IHN0cmluZztcblx0dmFyaWFibGVQYXJ0PyA6IHN0cmluZztcblx0dmFsdWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2NoZWR1bGVyQ29uZmlnIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdGNyZWF0ZWRCeSA6IHN0cmluZztcblx0dXBkYXRlZEJ5IDogc3RyaW5nO1xuXHRjb21tYW5kSWQgOiBzdHJpbmc7XG5cdGNvbW1hbmRTdGF0dXMgOiBzdHJpbmc7XG5cdHNjaGVkdWxlcklkIDogbnVtYmVyO1xuXHRzY2hlZHVsZXJDb25maWd1cmVkSWQgOiBudW1iZXI7XG5cdHNjaGVkdWxlck5hbWUgOiBzdHJpbmc7XG5cdHdvcmtlcklkIDogbnVtYmVyO1xuXHR3b3JrZXJDb25maWd1cmVkSWQgOiBudW1iZXI7XG5cdHdvcmtlck5hbWUgOiBzdHJpbmc7XG5cdHZhcmlhYmxlIDogc3RyaW5nO1xuXHR2YXJpYWJsZVBhcnQgOiBzdHJpbmc7XG5cdHZhbHVlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2NoZWR1bGVyQ29uZmlnQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY2hlZHVsZXJDb25maWcnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEJ5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVwZGF0ZWRCeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb21tYW5kSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29tbWFuZFN0YXR1cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzY2hlZHVsZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzY2hlZHVsZXJDb25maWd1cmVkSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2NoZWR1bGVyTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR3b3JrZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3b3JrZXJDb25maWd1cmVkSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0d29ya2VyTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2YXJpYWJsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2YXJpYWJsZVBhcnQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dmFsdWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNjaGVkdWxlckNvbmZpZyddID0gS2FsdHVyYVNjaGVkdWxlckNvbmZpZzsiXX0=