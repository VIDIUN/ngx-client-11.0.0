/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryUserFieldName } from './KalturaESearchCategoryUserFieldName';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaESearchAbstractCategoryItem } from './KalturaESearchAbstractCategoryItem';
/**
 * @record
 */
export function KalturaESearchCategoryUserItemArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryUserItemArgs.prototype.fieldName;
/** @type {?|undefined} */
KalturaESearchCategoryUserItemArgs.prototype.permissionLevel;
/** @type {?|undefined} */
KalturaESearchCategoryUserItemArgs.prototype.permissionName;
export class KalturaESearchCategoryUserItem extends KalturaESearchAbstractCategoryItem {
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
            objectType: { type: 'c', default: 'KalturaESearchCategoryUserItem' },
            fieldName: { type: 'es', subTypeConstructor: KalturaESearchCategoryUserFieldName, subType: 'KalturaESearchCategoryUserFieldName' },
            permissionLevel: { type: 'en', subTypeConstructor: KalturaCategoryUserPermissionLevel, subType: 'KalturaCategoryUserPermissionLevel' },
            permissionName: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchCategoryUserItem.prototype.fieldName;
    /** @type {?} */
    KalturaESearchCategoryUserItem.prototype.permissionLevel;
    /** @type {?} */
    KalturaESearchCategoryUserItem.prototype.permissionName;
}
typesMappingStorage['KalturaESearchCategoryUserItem'] = KalturaESearchCategoryUserItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVVzZXJJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaENhdGVnb3J5VXNlckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsa0NBQWtDLEVBQTBDLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7Ozs7O0FBU2xJLE1BQU0scUNBQXNDLFNBQVEsa0NBQWtDOzs7O0lBTWxGLFlBQVksSUFBMEM7UUFFbEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsbUNBQW1DLEVBQUUsT0FBTyxFQUFHLHFDQUFxQyxFQUFFO1lBQ3RJLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQzFJLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlVc2VyRmllbGROYW1lIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaENhdGVnb3J5VXNlckZpZWxkTmFtZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW0sIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEFic3RyYWN0Q2F0ZWdvcnlJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaENhdGVnb3J5VXNlckl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW1BcmdzIHtcbiAgICBmaWVsZE5hbWU/IDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVVzZXJGaWVsZE5hbWU7XG5cdHBlcm1pc3Npb25MZXZlbD8gOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsO1xuXHRwZXJtaXNzaW9uTmFtZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlVc2VySXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RDYXRlZ29yeUl0ZW0ge1xuXG4gICAgZmllbGROYW1lIDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVVzZXJGaWVsZE5hbWU7XG5cdHBlcm1pc3Npb25MZXZlbCA6IEthbHR1cmFDYXRlZ29yeVVzZXJQZXJtaXNzaW9uTGV2ZWw7XG5cdHBlcm1pc3Npb25OYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5VXNlckl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVVzZXJJdGVtJyB9LFxuXHRcdFx0XHRmaWVsZE5hbWUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5VXNlckZpZWxkTmFtZSwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaENhdGVnb3J5VXNlckZpZWxkTmFtZScgfSxcblx0XHRcdFx0cGVybWlzc2lvbkxldmVsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhdGVnb3J5VXNlclBlcm1pc3Npb25MZXZlbCwgc3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyUGVybWlzc2lvbkxldmVsJyB9LFxuXHRcdFx0XHRwZXJtaXNzaW9uTmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaENhdGVnb3J5VXNlckl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlVc2VySXRlbTsiXX0=