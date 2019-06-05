/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchItemType } from './KalturaESearchItemType';
import { KalturaESearchRange } from './KalturaESearchRange';
import { KalturaESearchUserBaseItem } from './KalturaESearchUserBaseItem';
/**
 * @record
 */
export function KalturaESearchAbstractUserItemArgs() { }
/** @type {?|undefined} */
KalturaESearchAbstractUserItemArgs.prototype.searchTerm;
/** @type {?|undefined} */
KalturaESearchAbstractUserItemArgs.prototype.itemType;
/** @type {?|undefined} */
KalturaESearchAbstractUserItemArgs.prototype.range;
/** @type {?|undefined} */
KalturaESearchAbstractUserItemArgs.prototype.addHighlight;
export class KalturaESearchAbstractUserItem extends KalturaESearchUserBaseItem {
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
            objectType: { type: 'c', default: 'KalturaESearchAbstractUserItem' },
            searchTerm: { type: 's' },
            itemType: { type: 'en', subTypeConstructor: KalturaESearchItemType, subType: 'KalturaESearchItemType' },
            range: { type: 'o', subTypeConstructor: KalturaESearchRange, subType: 'KalturaESearchRange' },
            addHighlight: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchAbstractUserItem.prototype.searchTerm;
    /** @type {?} */
    KalturaESearchAbstractUserItem.prototype.itemType;
    /** @type {?} */
    KalturaESearchAbstractUserItem.prototype.range;
    /** @type {?} */
    KalturaESearchAbstractUserItem.prototype.addHighlight;
}
typesMappingStorage['KalturaESearchAbstractUserItem'] = KalturaESearchAbstractUserItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hBYnN0cmFjdFVzZXJJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVMUcsTUFBTSxxQ0FBc0MsU0FBUSwwQkFBMEI7Ozs7SUFPMUUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUMzRyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUNqRyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3BCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoSXRlbVR5cGUgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoSXRlbVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hSYW5nZSB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hSYW5nZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaFVzZXJCYXNlSXRlbSwgS2FsdHVyYUVTZWFyY2hVc2VyQmFzZUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFVzZXJCYXNlSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdFVzZXJJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaFVzZXJCYXNlSXRlbUFyZ3Mge1xuICAgIHNlYXJjaFRlcm0/IDogc3RyaW5nO1xuXHRpdGVtVHlwZT8gOiBLYWx0dXJhRVNlYXJjaEl0ZW1UeXBlO1xuXHRyYW5nZT8gOiBLYWx0dXJhRVNlYXJjaFJhbmdlO1xuXHRhZGRIaWdobGlnaHQ/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hBYnN0cmFjdFVzZXJJdGVtIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hVc2VyQmFzZUl0ZW0ge1xuXG4gICAgc2VhcmNoVGVybSA6IHN0cmluZztcblx0aXRlbVR5cGUgOiBLYWx0dXJhRVNlYXJjaEl0ZW1UeXBlO1xuXHRyYW5nZSA6IEthbHR1cmFFU2VhcmNoUmFuZ2U7XG5cdGFkZEhpZ2hsaWdodCA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW0nIH0sXG5cdFx0XHRcdHNlYXJjaFRlcm0gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXRlbVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaEl0ZW1UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoSXRlbVR5cGUnIH0sXG5cdFx0XHRcdHJhbmdlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaFJhbmdlLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoUmFuZ2UnIH0sXG5cdFx0XHRcdGFkZEhpZ2hsaWdodCA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaEFic3RyYWN0VXNlckl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoQWJzdHJhY3RVc2VySXRlbTsiXX0=