/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchEntryNestedBaseItem } from './KalturaESearchEntryNestedBaseItem';
/**
 * @record
 */
export function KalturaESearchNestedOperatorArgs() { }
/** @type {?|undefined} */
KalturaESearchNestedOperatorArgs.prototype.operator;
/** @type {?|undefined} */
KalturaESearchNestedOperatorArgs.prototype.searchItems;
export class KalturaESearchNestedOperator extends KalturaESearchEntryNestedBaseItem {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.searchItems === 'undefined')
            this.searchItems = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchNestedOperator' },
            operator: { type: 'en', subTypeConstructor: KalturaESearchOperatorType, subType: 'KalturaESearchOperatorType' },
            searchItems: { type: 'a', subTypeConstructor: KalturaESearchEntryNestedBaseItem, subType: 'KalturaESearchEntryNestedBaseItem' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchNestedOperator.prototype.operator;
    /** @type {?} */
    KalturaESearchNestedOperator.prototype.searchItems;
}
typesMappingStorage['KalturaESearchNestedOperator'] = KalturaESearchNestedOperator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hOZXN0ZWRPcGVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hOZXN0ZWRPcGVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBeUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7O0FBUS9ILE1BQU0sbUNBQW9DLFNBQVEsaUNBQWlDOzs7O0lBSy9FLFlBQVksSUFBd0M7UUFFaEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0tBQ3RFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUNuSCxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlDQUFpQyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtTQUMxSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoT3BlcmF0b3JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaE9wZXJhdG9yVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEVudHJ5TmVzdGVkQmFzZUl0ZW0sIEthbHR1cmFFU2VhcmNoRW50cnlOZXN0ZWRCYXNlSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoRW50cnlOZXN0ZWRCYXNlSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hOZXN0ZWRPcGVyYXRvckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtQXJncyB7XG4gICAgb3BlcmF0b3I/IDogS2FsdHVyYUVTZWFyY2hPcGVyYXRvclR5cGU7XG5cdHNlYXJjaEl0ZW1zPyA6IEthbHR1cmFFU2VhcmNoRW50cnlOZXN0ZWRCYXNlSXRlbVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaE5lc3RlZE9wZXJhdG9yIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtIHtcblxuICAgIG9wZXJhdG9yIDogS2FsdHVyYUVTZWFyY2hPcGVyYXRvclR5cGU7XG5cdHNlYXJjaEl0ZW1zIDogS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoTmVzdGVkT3BlcmF0b3JBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWFyY2hJdGVtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuc2VhcmNoSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaE5lc3RlZE9wZXJhdG9yJyB9LFxuXHRcdFx0XHRvcGVyYXRvciA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoT3BlcmF0b3JUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoT3BlcmF0b3JUeXBlJyB9LFxuXHRcdFx0XHRzZWFyY2hJdGVtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoRW50cnlOZXN0ZWRCYXNlSXRlbScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hOZXN0ZWRPcGVyYXRvciddID0gS2FsdHVyYUVTZWFyY2hOZXN0ZWRPcGVyYXRvcjsiXX0=