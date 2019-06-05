/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaSchedulerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSchedulerConfig, _super);
    function KalturaSchedulerConfig(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSchedulerConfig.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaSchedulerConfig;
}(KalturaObjectBase));
export { KalturaSchedulerConfig };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlckNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNjaGVkdWxlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQmxGLElBQUE7SUFBNEMsa0RBQWlCO0lBaUJ6RCxnQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIscUJBQXFCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNiLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBbkVMO0VBcUI0QyxpQkFBaUIsRUErQzVELENBQUE7QUEvQ0Qsa0NBK0NDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNjaGVkdWxlckNvbmZpZ0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBjcmVhdGVkQnk/IDogc3RyaW5nO1xuXHR1cGRhdGVkQnk/IDogc3RyaW5nO1xuXHRjb21tYW5kSWQ/IDogc3RyaW5nO1xuXHRjb21tYW5kU3RhdHVzPyA6IHN0cmluZztcblx0c2NoZWR1bGVySWQ/IDogbnVtYmVyO1xuXHRzY2hlZHVsZXJDb25maWd1cmVkSWQ/IDogbnVtYmVyO1xuXHRzY2hlZHVsZXJOYW1lPyA6IHN0cmluZztcblx0d29ya2VySWQ/IDogbnVtYmVyO1xuXHR3b3JrZXJDb25maWd1cmVkSWQ/IDogbnVtYmVyO1xuXHR3b3JrZXJOYW1lPyA6IHN0cmluZztcblx0dmFyaWFibGU/IDogc3RyaW5nO1xuXHR2YXJpYWJsZVBhcnQ/IDogc3RyaW5nO1xuXHR2YWx1ZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTY2hlZHVsZXJDb25maWcgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0Y3JlYXRlZEJ5IDogc3RyaW5nO1xuXHR1cGRhdGVkQnkgOiBzdHJpbmc7XG5cdGNvbW1hbmRJZCA6IHN0cmluZztcblx0Y29tbWFuZFN0YXR1cyA6IHN0cmluZztcblx0c2NoZWR1bGVySWQgOiBudW1iZXI7XG5cdHNjaGVkdWxlckNvbmZpZ3VyZWRJZCA6IG51bWJlcjtcblx0c2NoZWR1bGVyTmFtZSA6IHN0cmluZztcblx0d29ya2VySWQgOiBudW1iZXI7XG5cdHdvcmtlckNvbmZpZ3VyZWRJZCA6IG51bWJlcjtcblx0d29ya2VyTmFtZSA6IHN0cmluZztcblx0dmFyaWFibGUgOiBzdHJpbmc7XG5cdHZhcmlhYmxlUGFydCA6IHN0cmluZztcblx0dmFsdWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTY2hlZHVsZXJDb25maWdBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNjaGVkdWxlckNvbmZpZycgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRjcmVhdGVkQnkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXBkYXRlZEJ5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbW1hbmRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb21tYW5kU3RhdHVzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNjaGVkdWxlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNjaGVkdWxlckNvbmZpZ3VyZWRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzY2hlZHVsZXJOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHdvcmtlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHdvcmtlckNvbmZpZ3VyZWRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR3b3JrZXJOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZhcmlhYmxlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZhcmlhYmxlUGFydCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2YWx1ZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2NoZWR1bGVyQ29uZmlnJ10gPSBLYWx0dXJhU2NoZWR1bGVyQ29uZmlnOyJdfQ==