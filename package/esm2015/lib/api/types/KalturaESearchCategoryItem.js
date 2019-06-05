/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryFieldName } from './KalturaESearchCategoryFieldName';
import { KalturaESearchAbstractCategoryItem } from './KalturaESearchAbstractCategoryItem';
/**
 * @record
 */
export function KalturaESearchCategoryItemArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryItemArgs.prototype.fieldName;
export class KalturaESearchCategoryItem extends KalturaESearchAbstractCategoryItem {
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
            objectType: { type: 'c', default: 'KalturaESearchCategoryItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchCategoryFieldName, subType: 'KalturaESearchCategoryFieldName' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchCategoryItem.prototype.fieldName;
}
typesMappingStorage['KalturaESearchCategoryItem'] = KalturaESearchCategoryItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUEwQyxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7O0FBT2xJLE1BQU0saUNBQWtDLFNBQVEsa0NBQWtDOzs7O0lBSTlFLFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1NBQ3JILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlGaWVsZE5hbWUgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlGaWVsZE5hbWUnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdENhdGVnb3J5SXRlbSwgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdENhdGVnb3J5SXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0Q2F0ZWdvcnlJdGVtQXJncyB7XG4gICAgZmllbGROYW1lPyA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlGaWVsZE5hbWU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlJdGVtIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdENhdGVnb3J5SXRlbSB7XG5cbiAgICBmaWVsZE5hbWUgOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5RmllbGROYW1lO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5SXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaENhdGVnb3J5SXRlbScgfSxcblx0XHRcdFx0ZmllbGROYW1lIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUZpZWxkTmFtZSwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaENhdGVnb3J5RmllbGROYW1lJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaENhdGVnb3J5SXRlbSddID0gS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUl0ZW07Il19