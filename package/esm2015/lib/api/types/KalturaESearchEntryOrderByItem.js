/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryOrderByFieldName } from './KalturaESearchEntryOrderByFieldName';
import { KalturaESearchOrderByItem } from './KalturaESearchOrderByItem';
/**
 * @record
 */
export function KalturaESearchEntryOrderByItemArgs() { }
/** @type {?|undefined} */
KalturaESearchEntryOrderByItemArgs.prototype.sortField;
export class KalturaESearchEntryOrderByItem extends KalturaESearchOrderByItem {
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
            objectType: { type: 'c', default: 'KalturaESearchEntryOrderByItem' },
            sortField: { type: 'es', subTypeConstructor: KalturaESearchEntryOrderByFieldName, subType: 'KalturaESearchEntryOrderByFieldName' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchEntryOrderByItem.prototype.sortField;
}
typesMappingStorage['KalturaESearchEntryOrderByItem'] = KalturaESearchEntryOrderByItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hFbnRyeU9yZGVyQnlJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaEVudHJ5T3JkZXJCeUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7QUFPdkcsTUFBTSxxQ0FBc0MsU0FBUSx5QkFBeUI7Ozs7SUFJekUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxtQ0FBbUMsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7U0FDN0gsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hFbnRyeU9yZGVyQnlGaWVsZE5hbWUgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoRW50cnlPcmRlckJ5RmllbGROYW1lJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW0sIEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaEVudHJ5T3JkZXJCeUl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW1BcmdzIHtcbiAgICBzb3J0RmllbGQ/IDogS2FsdHVyYUVTZWFyY2hFbnRyeU9yZGVyQnlGaWVsZE5hbWU7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoRW50cnlPcmRlckJ5SXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW0ge1xuXG4gICAgc29ydEZpZWxkIDogS2FsdHVyYUVTZWFyY2hFbnRyeU9yZGVyQnlGaWVsZE5hbWU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoRW50cnlPcmRlckJ5SXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaEVudHJ5T3JkZXJCeUl0ZW0nIH0sXG5cdFx0XHRcdHNvcnRGaWVsZCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoRW50cnlPcmRlckJ5RmllbGROYW1lLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoRW50cnlPcmRlckJ5RmllbGROYW1lJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaEVudHJ5T3JkZXJCeUl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoRW50cnlPcmRlckJ5SXRlbTsiXX0=