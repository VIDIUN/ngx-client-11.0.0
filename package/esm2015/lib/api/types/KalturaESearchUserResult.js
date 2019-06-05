/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUser } from './KalturaUser';
import { KalturaESearchResult } from './KalturaESearchResult';
/**
 * @record
 */
export function KalturaESearchUserResultArgs() { }
/** @type {?|undefined} */
KalturaESearchUserResultArgs.prototype.object;
export class KalturaESearchUserResult extends KalturaESearchResult {
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
            objectType: { type: 'c', default: 'KalturaESearchUserResult' },
            object: { type: 'o', subTypeConstructor: KalturaUser, subType: 'KalturaUser' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchUserResult.prototype.object;
}
typesMappingStorage['KalturaESearchUserResult'] = KalturaESearchUserResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVc2VyUmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaFVzZXJSZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQU94RixNQUFNLCtCQUFnQyxTQUFRLG9CQUFvQjs7OztJQUk5RCxZQUFZLElBQW9DO1FBRTVDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUM3RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLFdBQVcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1NBQ3pFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyIH0gZnJvbSAnLi9LYWx0dXJhVXNlcic7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaFJlc3VsdCwgS2FsdHVyYUVTZWFyY2hSZXN1bHRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFJlc3VsdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hVc2VyUmVzdWx0QXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaFJlc3VsdEFyZ3Mge1xuICAgIG9iamVjdD8gOiBLYWx0dXJhVXNlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hVc2VyUmVzdWx0IGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hSZXN1bHQge1xuXG4gICAgb2JqZWN0IDogS2FsdHVyYVVzZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoVXNlclJlc3VsdEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaFVzZXJSZXN1bHQnIH0sXG5cdFx0XHRcdG9iamVjdCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoVXNlclJlc3VsdCddID0gS2FsdHVyYUVTZWFyY2hVc2VyUmVzdWx0OyJdfQ==