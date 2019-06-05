/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryEntryFieldName } from './KalturaESearchCategoryEntryFieldName';
import { KalturaCategoryEntryStatus } from './KalturaCategoryEntryStatus';
import { KalturaESearchAbstractEntryItem } from './KalturaESearchAbstractEntryItem';
/**
 * @record
 */
export function KalturaESearchCategoryEntryItemArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryEntryItemArgs.prototype.fieldName;
/** @type {?|undefined} */
KalturaESearchCategoryEntryItemArgs.prototype.categoryEntryStatus;
export class KalturaESearchCategoryEntryItem extends KalturaESearchAbstractEntryItem {
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
            objectType: { type: 'c', default: 'KalturaESearchCategoryEntryItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchCategoryEntryFieldName, subType: 'KalturaESearchCategoryEntryFieldName' },
            categoryEntryStatus: { type: 'en', subTypeConstructor: KalturaCategoryEntryStatus, subType: 'KalturaCategoryEntryStatus' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchCategoryEntryItem.prototype.fieldName;
    /** @type {?} */
    KalturaESearchCategoryEntryItem.prototype.categoryEntryStatus;
}
typesMappingStorage['KalturaESearchCategoryEntryItem'] = KalturaESearchCategoryEntryItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5SXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBdUMsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7O0FBUXpILE1BQU0sc0NBQXVDLFNBQVEsK0JBQStCOzs7O0lBS2hGLFlBQVksSUFBMkM7UUFFbkQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ3BGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsb0NBQW9DLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1lBQ3hJLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7U0FDckgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5RW50cnlGaWVsZE5hbWUgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlFbnRyeUZpZWxkTmFtZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnlFbnRyeVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUNhdGVnb3J5RW50cnlTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdEVudHJ5SXRlbSwgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdEVudHJ5SXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlFbnRyeUl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RFbnRyeUl0ZW1BcmdzIHtcbiAgICBmaWVsZE5hbWU/IDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5RmllbGROYW1lO1xuXHRjYXRlZ29yeUVudHJ5U3RhdHVzPyA6IEthbHR1cmFDYXRlZ29yeUVudHJ5U3RhdHVzO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5RW50cnlJdGVtIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdEVudHJ5SXRlbSB7XG5cbiAgICBmaWVsZE5hbWUgOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5RW50cnlGaWVsZE5hbWU7XG5cdGNhdGVnb3J5RW50cnlTdGF0dXMgOiBLYWx0dXJhQ2F0ZWdvcnlFbnRyeVN0YXR1cztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5SXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaENhdGVnb3J5RW50cnlJdGVtJyB9LFxuXHRcdFx0XHRmaWVsZE5hbWUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5RW50cnlGaWVsZE5hbWUsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUVudHJ5RmllbGROYW1lJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUVudHJ5U3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhdGVnb3J5RW50cnlTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5RW50cnlTdGF0dXMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlFbnRyeUl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlFbnRyeUl0ZW07Il19