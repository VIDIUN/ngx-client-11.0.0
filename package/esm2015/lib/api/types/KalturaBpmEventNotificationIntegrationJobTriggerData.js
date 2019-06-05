/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegrationJobTriggerData } from './KalturaIntegrationJobTriggerData';
/**
 * @record
 */
export function KalturaBpmEventNotificationIntegrationJobTriggerDataArgs() { }
/** @type {?|undefined} */
KalturaBpmEventNotificationIntegrationJobTriggerDataArgs.prototype.templateId;
/** @type {?|undefined} */
KalturaBpmEventNotificationIntegrationJobTriggerDataArgs.prototype.businessProcessId;
/** @type {?|undefined} */
KalturaBpmEventNotificationIntegrationJobTriggerDataArgs.prototype.caseId;
export class KalturaBpmEventNotificationIntegrationJobTriggerData extends KalturaIntegrationJobTriggerData {
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
            objectType: { type: 'c', default: 'KalturaBpmEventNotificationIntegrationJobTriggerData' },
            templateId: { type: 'n' },
            businessProcessId: { type: 's' },
            caseId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBpmEventNotificationIntegrationJobTriggerData.prototype.templateId;
    /** @type {?} */
    KalturaBpmEventNotificationIntegrationJobTriggerData.prototype.businessProcessId;
    /** @type {?} */
    KalturaBpmEventNotificationIntegrationJobTriggerData.prototype.caseId;
}
typesMappingStorage['KalturaBpmEventNotificationIntegrationJobTriggerData'] = KalturaBpmEventNotificationIntegrationJobTriggerData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJwbUV2ZW50Tm90aWZpY2F0aW9uSW50ZWdyYXRpb25Kb2JUcmlnZ2VyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJwbUV2ZW50Tm90aWZpY2F0aW9uSW50ZWdyYXRpb25Kb2JUcmlnZ2VyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBd0MsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7Ozs7Ozs7QUFTNUgsTUFBTSwyREFBNEQsU0FBUSxnQ0FBZ0M7Ozs7SUFNdEcsWUFBWSxJQUFnRTtRQUV4RSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0RBQXNELEVBQUU7WUFDekcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNkLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0RBQXNELENBQUMsR0FBRyxvREFBb0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JUcmlnZ2VyRGF0YSwgS2FsdHVyYUludGVncmF0aW9uSm9iVHJpZ2dlckRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSW50ZWdyYXRpb25Kb2JUcmlnZ2VyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJwbUV2ZW50Tm90aWZpY2F0aW9uSW50ZWdyYXRpb25Kb2JUcmlnZ2VyRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUludGVncmF0aW9uSm9iVHJpZ2dlckRhdGFBcmdzIHtcbiAgICB0ZW1wbGF0ZUlkPyA6IG51bWJlcjtcblx0YnVzaW5lc3NQcm9jZXNzSWQ/IDogc3RyaW5nO1xuXHRjYXNlSWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnBtRXZlbnROb3RpZmljYXRpb25JbnRlZ3JhdGlvbkpvYlRyaWdnZXJEYXRhIGV4dGVuZHMgS2FsdHVyYUludGVncmF0aW9uSm9iVHJpZ2dlckRhdGEge1xuXG4gICAgdGVtcGxhdGVJZCA6IG51bWJlcjtcblx0YnVzaW5lc3NQcm9jZXNzSWQgOiBzdHJpbmc7XG5cdGNhc2VJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJwbUV2ZW50Tm90aWZpY2F0aW9uSW50ZWdyYXRpb25Kb2JUcmlnZ2VyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnBtRXZlbnROb3RpZmljYXRpb25JbnRlZ3JhdGlvbkpvYlRyaWdnZXJEYXRhJyB9LFxuXHRcdFx0XHR0ZW1wbGF0ZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGJ1c2luZXNzUHJvY2Vzc0lkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhc2VJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnBtRXZlbnROb3RpZmljYXRpb25JbnRlZ3JhdGlvbkpvYlRyaWdnZXJEYXRhJ10gPSBLYWx0dXJhQnBtRXZlbnROb3RpZmljYXRpb25JbnRlZ3JhdGlvbkpvYlRyaWdnZXJEYXRhOyJdfQ==