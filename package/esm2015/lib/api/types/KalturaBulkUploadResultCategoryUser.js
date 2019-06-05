/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
/**
 * @record
 */
export function KalturaBulkUploadResultCategoryUserArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.categoryId;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.categoryReferenceId;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.userId;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.permissionLevel;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.updateMethod;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryUserArgs.prototype.requiredObjectStatus;
export class KalturaBulkUploadResultCategoryUser extends KalturaBulkUploadResult {
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
            objectType: { type: 'c', default: 'KalturaBulkUploadResultCategoryUser' },
            categoryId: { type: 'n' },
            categoryReferenceId: { type: 's' },
            userId: { type: 's' },
            permissionLevel: { type: 'n' },
            updateMethod: { type: 'n' },
            requiredObjectStatus: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.categoryId;
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.categoryReferenceId;
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.userId;
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.permissionLevel;
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.updateMethod;
    /** @type {?} */
    KalturaBulkUploadResultCategoryUser.prototype.requiredObjectStatus;
}
typesMappingStorage['KalturaBulkUploadResultCategoryUser'] = KalturaBulkUploadResultCategoryUser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeVVzZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0Q2F0ZWdvcnlVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVlqRyxNQUFNLDBDQUEyQyxTQUFRLHVCQUF1Qjs7OztJQVM1RSxZQUFZLElBQStDO1FBRXZELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtZQUN4RixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQ0FBcUMsQ0FBQyxHQUFHLG1DQUFtQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0LCBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdEFyZ3MgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdENhdGVnb3J5VXNlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRBcmdzIHtcbiAgICBjYXRlZ29yeUlkPyA6IG51bWJlcjtcblx0Y2F0ZWdvcnlSZWZlcmVuY2VJZD8gOiBzdHJpbmc7XG5cdHVzZXJJZD8gOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25MZXZlbD8gOiBudW1iZXI7XG5cdHVwZGF0ZU1ldGhvZD8gOiBudW1iZXI7XG5cdHJlcXVpcmVkT2JqZWN0U3RhdHVzPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeVVzZXIgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCB7XG5cbiAgICBjYXRlZ29yeUlkIDogbnVtYmVyO1xuXHRjYXRlZ29yeVJlZmVyZW5jZUlkIDogc3RyaW5nO1xuXHR1c2VySWQgOiBzdHJpbmc7XG5cdHBlcm1pc3Npb25MZXZlbCA6IG51bWJlcjtcblx0dXBkYXRlTWV0aG9kIDogbnVtYmVyO1xuXHRyZXF1aXJlZE9iamVjdFN0YXR1cyA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeVVzZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeVVzZXInIH0sXG5cdFx0XHRcdGNhdGVnb3J5SWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2F0ZWdvcnlSZWZlcmVuY2VJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGVybWlzc2lvbkxldmVsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVwZGF0ZU1ldGhvZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRyZXF1aXJlZE9iamVjdFN0YXR1cyA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdENhdGVnb3J5VXNlciddID0gS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeVVzZXI7Il19