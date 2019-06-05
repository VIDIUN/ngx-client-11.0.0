/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';
/**
 * @record
 */
export function KalturaApiActionPermissionItemArgs() { }
/** @type {?|undefined} */
KalturaApiActionPermissionItemArgs.prototype.service;
/** @type {?|undefined} */
KalturaApiActionPermissionItemArgs.prototype.action;
export class KalturaApiActionPermissionItem extends KalturaPermissionItem {
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
            objectType: { type: 'c', default: 'KalturaApiActionPermissionItem' },
            service: { type: 's' },
            action: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaApiActionPermissionItem.prototype.service;
    /** @type {?} */
    KalturaApiActionPermissionItem.prototype.action;
}
typesMappingStorage['KalturaApiActionPermissionItem'] = KalturaApiActionPermissionItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFwaUFjdGlvblBlcm1pc3Npb25JdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQXBpQWN0aW9uUGVybWlzc2lvbkl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztBQVEzRixNQUFNLHFDQUFzQyxTQUFRLHFCQUFxQjs7OztJQUtyRSxZQUFZLElBQTBDO1FBRWxELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFQZXJtaXNzaW9uSXRlbSwgS2FsdHVyYVBlcm1pc3Npb25JdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYVBlcm1pc3Npb25JdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXBpQWN0aW9uUGVybWlzc2lvbkl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFQZXJtaXNzaW9uSXRlbUFyZ3Mge1xuICAgIHNlcnZpY2U/IDogc3RyaW5nO1xuXHRhY3Rpb24/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQXBpQWN0aW9uUGVybWlzc2lvbkl0ZW0gZXh0ZW5kcyBLYWx0dXJhUGVybWlzc2lvbkl0ZW0ge1xuXG4gICAgc2VydmljZSA6IHN0cmluZztcblx0YWN0aW9uIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXBpQWN0aW9uUGVybWlzc2lvbkl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFwaUFjdGlvblBlcm1pc3Npb25JdGVtJyB9LFxuXHRcdFx0XHRzZXJ2aWNlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQXBpQWN0aW9uUGVybWlzc2lvbkl0ZW0nXSA9IEthbHR1cmFBcGlBY3Rpb25QZXJtaXNzaW9uSXRlbTsiXX0=