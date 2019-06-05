/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchUserOrderByFieldName } from './KalturaESearchUserOrderByFieldName';
import { KalturaESearchOrderByItem } from './KalturaESearchOrderByItem';
/**
 * @record
 */
export function KalturaESearchUserOrderByItemArgs() { }
/** @type {?|undefined} */
KalturaESearchUserOrderByItemArgs.prototype.sortField;
export class KalturaESearchUserOrderByItem extends KalturaESearchOrderByItem {
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
            objectType: { type: 'c', default: 'KalturaESearchUserOrderByItem' },
            sortField: { type: 'es', subTypeConstructor: KalturaESearchUserOrderByFieldName, subType: 'KalturaESearchUserOrderByFieldName' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchUserOrderByItem.prototype.sortField;
}
typesMappingStorage['KalturaESearchUserOrderByItem'] = KalturaESearchUserOrderByItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVc2VyT3JkZXJCeUl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoVXNlck9yZGVyQnlJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7O0FBT3ZHLE1BQU0sb0NBQXFDLFNBQVEseUJBQXlCOzs7O0lBSXhFLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1NBQzNILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywrQkFBK0IsQ0FBQyxHQUFHLDZCQUE2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoVXNlck9yZGVyQnlGaWVsZE5hbWUgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoVXNlck9yZGVyQnlGaWVsZE5hbWUnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hPcmRlckJ5SXRlbSwgS2FsdHVyYUVTZWFyY2hPcmRlckJ5SXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoVXNlck9yZGVyQnlJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtQXJncyB7XG4gICAgc29ydEZpZWxkPyA6IEthbHR1cmFFU2VhcmNoVXNlck9yZGVyQnlGaWVsZE5hbWU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoVXNlck9yZGVyQnlJdGVtIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hPcmRlckJ5SXRlbSB7XG5cbiAgICBzb3J0RmllbGQgOiBLYWx0dXJhRVNlYXJjaFVzZXJPcmRlckJ5RmllbGROYW1lO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaFVzZXJPcmRlckJ5SXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaFVzZXJPcmRlckJ5SXRlbScgfSxcblx0XHRcdFx0c29ydEZpZWxkIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hVc2VyT3JkZXJCeUZpZWxkTmFtZSwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaFVzZXJPcmRlckJ5RmllbGROYW1lJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaFVzZXJPcmRlckJ5SXRlbSddID0gS2FsdHVyYUVTZWFyY2hVc2VyT3JkZXJCeUl0ZW07Il19