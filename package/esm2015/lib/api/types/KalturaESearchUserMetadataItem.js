/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchAbstractUserItem } from './KalturaESearchAbstractUserItem';
/**
 * @record
 */
export function KalturaESearchUserMetadataItemArgs() { }
/** @type {?|undefined} */
KalturaESearchUserMetadataItemArgs.prototype.xpath;
/** @type {?|undefined} */
KalturaESearchUserMetadataItemArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaESearchUserMetadataItemArgs.prototype.metadataFieldId;
export class KalturaESearchUserMetadataItem extends KalturaESearchAbstractUserItem {
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
            objectType: { type: 'c', default: 'KalturaESearchUserMetadataItem' },
            xpath: { type: 's' },
            metadataProfileId: { type: 'n' },
            metadataFieldId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchUserMetadataItem.prototype.xpath;
    /** @type {?} */
    KalturaESearchUserMetadataItem.prototype.metadataProfileId;
    /** @type {?} */
    KalturaESearchUserMetadataItem.prototype.metadataFieldId;
}
typesMappingStorage['KalturaESearchUserMetadataItem'] = KalturaESearchUserMetadataItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVc2VyTWV0YWRhdGFJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaFVzZXJNZXRhZGF0YUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQXNDLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7O0FBU3RILE1BQU0scUNBQXNDLFNBQVEsOEJBQThCOzs7O0lBTTlFLFlBQVksSUFBMEM7UUFFbEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbSwgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdFVzZXJJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hBYnN0cmFjdFVzZXJJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaFVzZXJNZXRhZGF0YUl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbUFyZ3Mge1xuICAgIHhwYXRoPyA6IHN0cmluZztcblx0bWV0YWRhdGFQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRtZXRhZGF0YUZpZWxkSWQ/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaFVzZXJNZXRhZGF0YUl0ZW0gZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW0ge1xuXG4gICAgeHBhdGggOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRtZXRhZGF0YUZpZWxkSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoVXNlck1ldGFkYXRhSXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaFVzZXJNZXRhZGF0YUl0ZW0nIH0sXG5cdFx0XHRcdHhwYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1ldGFkYXRhRmllbGRJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaFVzZXJNZXRhZGF0YUl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoVXNlck1ldGFkYXRhSXRlbTsiXX0=