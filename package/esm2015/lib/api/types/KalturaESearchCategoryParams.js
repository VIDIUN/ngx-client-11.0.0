/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryOperator } from './KalturaESearchCategoryOperator';
import { KalturaESearchParams } from './KalturaESearchParams';
/**
 * @record
 */
export function KalturaESearchCategoryParamsArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryParamsArgs.prototype.searchOperator;
export class KalturaESearchCategoryParams extends KalturaESearchParams {
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
            objectType: { type: 'c', default: 'KalturaESearchCategoryParams' },
            searchOperator: { type: 'o', subTypeConstructor: KalturaESearchCategoryOperator, subType: 'KalturaESearchCategoryOperator' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchCategoryParams.prototype.searchOperator;
}
typesMappingStorage['KalturaESearchCategoryParams'] = KalturaESearchCategoryParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQU94RixNQUFNLG1DQUFvQyxTQUFRLG9CQUFvQjs7OztJQUlsRSxZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtTQUN2SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5T3BlcmF0b3IgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlPcGVyYXRvcic7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaFBhcmFtcywgS2FsdHVyYUVTZWFyY2hQYXJhbXNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFBhcmFtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hQYXJhbXNBcmdzIHtcbiAgICBzZWFyY2hPcGVyYXRvcj8gOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5T3BlcmF0b3I7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlQYXJhbXMgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaFBhcmFtcyB7XG5cbiAgICBzZWFyY2hPcGVyYXRvciA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlPcGVyYXRvcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaENhdGVnb3J5UGFyYW1zJyB9LFxuXHRcdFx0XHRzZWFyY2hPcGVyYXRvciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU9wZXJhdG9yLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlPcGVyYXRvcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVBhcmFtcyddID0gS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVBhcmFtczsiXX0=