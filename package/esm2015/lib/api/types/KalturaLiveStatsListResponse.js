/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStats } from './KalturaLiveStats';
import { KalturaListResponse } from './KalturaListResponse';
/**
 * @record
 */
export function KalturaLiveStatsListResponseArgs() { }
/** @type {?|undefined} */
KalturaLiveStatsListResponseArgs.prototype.objects;
export class KalturaLiveStatsListResponse extends KalturaListResponse {
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
            objectType: { type: 'c', default: 'KalturaLiveStatsListResponse' },
            objects: { type: 'o', subTypeConstructor: KalturaLiveStats, subType: 'KalturaLiveStats' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaLiveStatsListResponse.prototype.objects;
}
typesMappingStorage['KalturaLiveStatsListResponse'] = KalturaLiveStatsListResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdGF0c0xpc3RSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVTdGF0c0xpc3RSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxtQkFBbUIsRUFBMkIsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7OztBQU9yRixNQUFNLG1DQUFvQyxTQUFRLG1CQUFtQjs7OztJQUlqRSxZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGdCQUFnQixFQUFFLE9BQU8sRUFBRyxrQkFBa0IsRUFBRTtTQUNwRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVN0YXRzIH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0YXRzJztcbmltcG9ydCB7IEthbHR1cmFMaXN0UmVzcG9uc2UsIEthbHR1cmFMaXN0UmVzcG9uc2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhTGlzdFJlc3BvbnNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZVN0YXRzTGlzdFJlc3BvbnNlQXJncyAgZXh0ZW5kcyBLYWx0dXJhTGlzdFJlc3BvbnNlQXJncyB7XG4gICAgb2JqZWN0cz8gOiBLYWx0dXJhTGl2ZVN0YXRzO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZVN0YXRzTGlzdFJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZSB7XG5cbiAgICBvYmplY3RzIDogS2FsdHVyYUxpdmVTdGF0cztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUxpdmVTdGF0c0xpc3RSZXNwb25zZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTGl2ZVN0YXRzTGlzdFJlc3BvbnNlJyB9LFxuXHRcdFx0XHRvYmplY3RzIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZVN0YXRzLCBzdWJUeXBlIDogJ0thbHR1cmFMaXZlU3RhdHMnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlU3RhdHNMaXN0UmVzcG9uc2UnXSA9IEthbHR1cmFMaXZlU3RhdHNMaXN0UmVzcG9uc2U7Il19