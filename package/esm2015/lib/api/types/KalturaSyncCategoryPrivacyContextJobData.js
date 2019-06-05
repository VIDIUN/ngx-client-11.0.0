/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaSyncCategoryPrivacyContextJobDataArgs() { }
/** @type {?|undefined} */
KalturaSyncCategoryPrivacyContextJobDataArgs.prototype.categoryId;
/** @type {?|undefined} */
KalturaSyncCategoryPrivacyContextJobDataArgs.prototype.lastUpdatedCategoryEntryCreatedAt;
/** @type {?|undefined} */
KalturaSyncCategoryPrivacyContextJobDataArgs.prototype.lastUpdatedCategoryCreatedAt;
export class KalturaSyncCategoryPrivacyContextJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaSyncCategoryPrivacyContextJobData' },
            categoryId: { type: 'n' },
            lastUpdatedCategoryEntryCreatedAt: { type: 'n' },
            lastUpdatedCategoryCreatedAt: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaSyncCategoryPrivacyContextJobData.prototype.categoryId;
    /** @type {?} */
    KalturaSyncCategoryPrivacyContextJobData.prototype.lastUpdatedCategoryEntryCreatedAt;
    /** @type {?} */
    KalturaSyncCategoryPrivacyContextJobData.prototype.lastUpdatedCategoryCreatedAt;
}
typesMappingStorage['KalturaSyncCategoryPrivacyContextJobData'] = KalturaSyncCategoryPrivacyContextJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN5bmNDYXRlZ29yeVByaXZhY3lDb250ZXh0Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVN5bmNDYXRlZ29yeVByaXZhY3lDb250ZXh0Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7O0FBU3RFLE1BQU0sK0NBQWdELFNBQVEsY0FBYzs7OztJQU14RSxZQUFZLElBQW9EO1FBRTVELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUM3RixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLGlDQUFpQyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsRCw0QkFBNEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQ0FBMEMsQ0FBQyxHQUFHLHdDQUF3QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3luY0NhdGVnb3J5UHJpdmFjeUNvbnRleHRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIGNhdGVnb3J5SWQ/IDogbnVtYmVyO1xuXHRsYXN0VXBkYXRlZENhdGVnb3J5RW50cnlDcmVhdGVkQXQ/IDogbnVtYmVyO1xuXHRsYXN0VXBkYXRlZENhdGVnb3J5Q3JlYXRlZEF0PyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVN5bmNDYXRlZ29yeVByaXZhY3lDb250ZXh0Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIGNhdGVnb3J5SWQgOiBudW1iZXI7XG5cdGxhc3RVcGRhdGVkQ2F0ZWdvcnlFbnRyeUNyZWF0ZWRBdCA6IG51bWJlcjtcblx0bGFzdFVwZGF0ZWRDYXRlZ29yeUNyZWF0ZWRBdCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVN5bmNDYXRlZ29yeVByaXZhY3lDb250ZXh0Sm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU3luY0NhdGVnb3J5UHJpdmFjeUNvbnRleHRKb2JEYXRhJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGxhc3RVcGRhdGVkQ2F0ZWdvcnlFbnRyeUNyZWF0ZWRBdCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRsYXN0VXBkYXRlZENhdGVnb3J5Q3JlYXRlZEF0IDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTeW5jQ2F0ZWdvcnlQcml2YWN5Q29udGV4dEpvYkRhdGEnXSA9IEthbHR1cmFTeW5jQ2F0ZWdvcnlQcml2YWN5Q29udGV4dEpvYkRhdGE7Il19