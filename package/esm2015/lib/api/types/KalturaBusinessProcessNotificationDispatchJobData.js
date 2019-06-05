/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessServer } from './KalturaBusinessProcessServer';
import { KalturaEventNotificationDispatchJobData } from './KalturaEventNotificationDispatchJobData';
/**
 * @record
 */
export function KalturaBusinessProcessNotificationDispatchJobDataArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessNotificationDispatchJobDataArgs.prototype.server;
/** @type {?|undefined} */
KalturaBusinessProcessNotificationDispatchJobDataArgs.prototype.caseId;
export class KalturaBusinessProcessNotificationDispatchJobData extends KalturaEventNotificationDispatchJobData {
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
            objectType: { type: 'c', default: 'KalturaBusinessProcessNotificationDispatchJobData' },
            server: { type: 'o', subTypeConstructor: KalturaBusinessProcessServer, subType: 'KalturaBusinessProcessServer' },
            caseId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBusinessProcessNotificationDispatchJobData.prototype.server;
    /** @type {?} */
    KalturaBusinessProcessNotificationDispatchJobData.prototype.caseId;
}
typesMappingStorage['KalturaBusinessProcessNotificationDispatchJobData'] = KalturaBusinessProcessNotificationDispatchJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBK0MsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7O0FBUWpKLE1BQU0sd0RBQXlELFNBQVEsdUNBQXVDOzs7O0lBSzFHLFlBQVksSUFBNkQ7UUFFckUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1EQUFtRCxFQUFFO1lBQ3RHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ3BILE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtREFBbUQsQ0FBQyxHQUFHLGlEQUFpRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXIgfSBmcm9tICcuL0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhLCBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YUFyZ3Mge1xuICAgIHNlcnZlcj8gOiBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU2VydmVyO1xuXHRjYXNlSWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhIHtcblxuICAgIHNlcnZlciA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXI7XG5cdGNhc2VJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvbkRpc3BhdGNoSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uRGlzcGF0Y2hKb2JEYXRhJyB9LFxuXHRcdFx0XHRzZXJ2ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTZXJ2ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1NlcnZlcicgfSxcblx0XHRcdFx0Y2FzZUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGEnXSA9IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25EaXNwYXRjaEpvYkRhdGE7Il19