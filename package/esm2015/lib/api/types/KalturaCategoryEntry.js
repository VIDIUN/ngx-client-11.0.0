/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryEntryStatus } from './KalturaCategoryEntryStatus';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaCategoryEntryArgs() { }
/** @type {?|undefined} */
KalturaCategoryEntryArgs.prototype.categoryId;
/** @type {?|undefined} */
KalturaCategoryEntryArgs.prototype.entryId;
export class KalturaCategoryEntry extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaCategoryEntry' },
            categoryId: { type: 'n' },
            entryId: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            categoryFullIds: { type: 's', readOnly: true },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaCategoryEntryStatus, subType: 'KalturaCategoryEntryStatus' },
            creatorUserId: { type: 's', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCategoryEntry.prototype.categoryId;
    /** @type {?} */
    KalturaCategoryEntry.prototype.entryId;
    /** @type {?} */
    KalturaCategoryEntry.prototype.createdAt;
    /** @type {?} */
    KalturaCategoryEntry.prototype.categoryFullIds;
    /** @type {?} */
    KalturaCategoryEntry.prototype.status;
    /** @type {?} */
    KalturaCategoryEntry.prototype.creatorUserId;
}
typesMappingStorage['KalturaCategoryEntry'] = KalturaCategoryEntry;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5RW50cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDYXRlZ29yeUVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7QUFRbEYsTUFBTSwyQkFBNEIsU0FBUSxpQkFBaUI7Ozs7SUFTdkQsWUFBWSxJQUFnQztRQUV4QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDekUsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDakQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUNsSSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7U0FDdEMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDYXRlZ29yeUVudHJ5U3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlFbnRyeVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNhdGVnb3J5RW50cnlBcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgY2F0ZWdvcnlJZD8gOiBudW1iZXI7XG5cdGVudHJ5SWQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2F0ZWdvcnlFbnRyeSBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGNhdGVnb3J5SWQgOiBudW1iZXI7XG5cdGVudHJ5SWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IGNhdGVnb3J5RnVsbElkcyA6IHN0cmluZztcblx0cmVhZG9ubHkgc3RhdHVzIDogS2FsdHVyYUNhdGVnb3J5RW50cnlTdGF0dXM7XG5cdHJlYWRvbmx5IGNyZWF0b3JVc2VySWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXRlZ29yeUVudHJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDYXRlZ29yeUVudHJ5JyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y2F0ZWdvcnlGdWxsSWRzIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2F0ZWdvcnlFbnRyeVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlFbnRyeVN0YXR1cycgfSxcblx0XHRcdFx0Y3JlYXRvclVzZXJJZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDYXRlZ29yeUVudHJ5J10gPSBLYWx0dXJhQ2F0ZWdvcnlFbnRyeTsiXX0=