/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOrderBy } from './KalturaESearchOrderBy';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaESearchParamsArgs() { }
/** @type {?|undefined} */
KalturaESearchParamsArgs.prototype.objectStatuses;
/** @type {?|undefined} */
KalturaESearchParamsArgs.prototype.objectId;
/** @type {?|undefined} */
KalturaESearchParamsArgs.prototype.orderBy;
export class KalturaESearchParams extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaESearchParams' },
            objectStatuses: { type: 's' },
            objectId: { type: 's' },
            orderBy: { type: 'o', subTypeConstructor: KalturaESearchOrderBy, subType: 'KalturaESearchOrderBy' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaESearchParams.prototype.objectStatuses;
    /** @type {?} */
    KalturaESearchParams.prototype.objectId;
    /** @type {?} */
    KalturaESearchParams.prototype.orderBy;
}
typesMappingStorage['KalturaESearchParams'] = KalturaESearchParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hQYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7OztBQVNsRixNQUFNLDJCQUE0QixTQUFRLGlCQUFpQjs7OztJQU12RCxZQUFZLElBQWdDO1FBRXhDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7U0FDOUYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoT3JkZXJCeSB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hPcmRlckJ5JztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaFBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBvYmplY3RTdGF0dXNlcz8gOiBzdHJpbmc7XG5cdG9iamVjdElkPyA6IHN0cmluZztcblx0b3JkZXJCeT8gOiBLYWx0dXJhRVNlYXJjaE9yZGVyQnk7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoUGFyYW1zIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgb2JqZWN0U3RhdHVzZXMgOiBzdHJpbmc7XG5cdG9iamVjdElkIDogc3RyaW5nO1xuXHRvcmRlckJ5IDogS2FsdHVyYUVTZWFyY2hPcmRlckJ5O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaFBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaFBhcmFtcycgfSxcblx0XHRcdFx0b2JqZWN0U3RhdHVzZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3JkZXJCeSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hPcmRlckJ5LCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoT3JkZXJCeScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hQYXJhbXMnXSA9IEthbHR1cmFFU2VhcmNoUGFyYW1zOyJdfQ==