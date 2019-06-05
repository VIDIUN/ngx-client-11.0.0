/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBusinessProcessCaseArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessCaseArgs.prototype.id;
/** @type {?|undefined} */
KalturaBusinessProcessCaseArgs.prototype.businessProcessId;
/** @type {?|undefined} */
KalturaBusinessProcessCaseArgs.prototype.businessProcessStartNotificationTemplateId;
/** @type {?|undefined} */
KalturaBusinessProcessCaseArgs.prototype.suspended;
/** @type {?|undefined} */
KalturaBusinessProcessCaseArgs.prototype.activityId;
export class KalturaBusinessProcessCase extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaBusinessProcessCase' },
            id: { type: 's' },
            businessProcessId: { type: 's' },
            businessProcessStartNotificationTemplateId: { type: 'n' },
            suspended: { type: 'b' },
            activityId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBusinessProcessCase.prototype.id;
    /** @type {?} */
    KalturaBusinessProcessCase.prototype.businessProcessId;
    /** @type {?} */
    KalturaBusinessProcessCase.prototype.businessProcessStartNotificationTemplateId;
    /** @type {?} */
    KalturaBusinessProcessCase.prototype.suspended;
    /** @type {?} */
    KalturaBusinessProcessCase.prototype.activityId;
}
typesMappingStorage['KalturaBusinessProcessCase'] = KalturaBusinessProcessCase;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc0Nhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXbEYsTUFBTSxpQ0FBa0MsU0FBUSxpQkFBaUI7Ozs7SUFRN0QsWUFBWSxJQUFzQztRQUU5QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7WUFDL0UsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsMENBQTBDLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNELFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzQ2FzZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBpZD8gOiBzdHJpbmc7XG5cdGJ1c2luZXNzUHJvY2Vzc0lkPyA6IHN0cmluZztcblx0YnVzaW5lc3NQcm9jZXNzU3RhcnROb3RpZmljYXRpb25UZW1wbGF0ZUlkPyA6IG51bWJlcjtcblx0c3VzcGVuZGVkPyA6IGJvb2xlYW47XG5cdGFjdGl2aXR5SWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzQ2FzZSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGlkIDogc3RyaW5nO1xuXHRidXNpbmVzc1Byb2Nlc3NJZCA6IHN0cmluZztcblx0YnVzaW5lc3NQcm9jZXNzU3RhcnROb3RpZmljYXRpb25UZW1wbGF0ZUlkIDogbnVtYmVyO1xuXHRzdXNwZW5kZWQgOiBib29sZWFuO1xuXHRhY3Rpdml0eUlkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzQ2FzZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVzaW5lc3NQcm9jZXNzQ2FzZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YnVzaW5lc3NQcm9jZXNzSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YnVzaW5lc3NQcm9jZXNzU3RhcnROb3RpZmljYXRpb25UZW1wbGF0ZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN1c3BlbmRlZCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRhY3Rpdml0eUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NDYXNlJ10gPSBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzQ2FzZTsiXX0=