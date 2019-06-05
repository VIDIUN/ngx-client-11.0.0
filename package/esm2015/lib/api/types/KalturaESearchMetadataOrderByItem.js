/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOrderByItem } from './KalturaESearchOrderByItem';
/**
 * @record
 */
export function KalturaESearchMetadataOrderByItemArgs() { }
/** @type {?|undefined} */
KalturaESearchMetadataOrderByItemArgs.prototype.xpath;
/** @type {?|undefined} */
KalturaESearchMetadataOrderByItemArgs.prototype.metadataProfileId;
export class KalturaESearchMetadataOrderByItem extends KalturaESearchOrderByItem {
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
            objectType: { type: 'c', default: 'KalturaESearchMetadataOrderByItem' },
            xpath: { type: 's' },
            metadataProfileId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchMetadataOrderByItem.prototype.xpath;
    /** @type {?} */
    KalturaESearchMetadataOrderByItem.prototype.metadataProfileId;
}
typesMappingStorage['KalturaESearchMetadataOrderByItem'] = KalturaESearchMetadataOrderByItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hNZXRhZGF0YU9yZGVyQnlJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaE1ldGFkYXRhT3JkZXJCeUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7OztBQVF2RyxNQUFNLHdDQUF5QyxTQUFRLHlCQUF5Qjs7OztJQUs1RSxZQUFZLElBQTZDO1FBRXJELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0RixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW0sIEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaE1ldGFkYXRhT3JkZXJCeUl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW1BcmdzIHtcbiAgICB4cGF0aD8gOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hNZXRhZGF0YU9yZGVyQnlJdGVtIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hPcmRlckJ5SXRlbSB7XG5cbiAgICB4cGF0aCA6IHN0cmluZztcblx0bWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoTWV0YWRhdGFPcmRlckJ5SXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaE1ldGFkYXRhT3JkZXJCeUl0ZW0nIH0sXG5cdFx0XHRcdHhwYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoTWV0YWRhdGFPcmRlckJ5SXRlbSddID0gS2FsdHVyYUVTZWFyY2hNZXRhZGF0YU9yZGVyQnlJdGVtOyJdfQ==