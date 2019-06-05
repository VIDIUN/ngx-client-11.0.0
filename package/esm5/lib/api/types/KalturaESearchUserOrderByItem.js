/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchUserOrderByFieldName } from './KalturaESearchUserOrderByFieldName';
import { KalturaESearchOrderByItem } from './KalturaESearchOrderByItem';
/**
 * @record
 */
export function KalturaESearchUserOrderByItemArgs() { }
/** @type {?|undefined} */
KalturaESearchUserOrderByItemArgs.prototype.sortField;
var KalturaESearchUserOrderByItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchUserOrderByItem, _super);
    function KalturaESearchUserOrderByItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchUserOrderByItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchUserOrderByItem' },
            sortField: { type: 'es', subTypeConstructor: KalturaESearchUserOrderByFieldName, subType: 'KalturaESearchUserOrderByFieldName' }
        });
        return result;
    };
    return KalturaESearchUserOrderByItem;
}(KalturaESearchOrderByItem));
export { KalturaESearchUserOrderByItem };
if (false) {
    /** @type {?} */
    KalturaESearchUserOrderByItem.prototype.sortField;
}
typesMappingStorage['KalturaESearchUserOrderByItem'] = KalturaESearchUserOrderByItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVc2VyT3JkZXJCeUl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFU2VhcmNoVXNlck9yZGVyQnlJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSx5QkFBeUIsRUFBaUMsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7OztBQU92RyxJQUFBO0lBQW1ELHlEQUF5QjtJQUl4RSx1Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1NBQzNILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBOUJMO0VBVW1ELHlCQUF5QixFQXFCM0UsQ0FBQTtBQXJCRCx5Q0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaFVzZXJPcmRlckJ5RmllbGROYW1lIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFVzZXJPcmRlckJ5RmllbGROYW1lJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW0sIEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaFVzZXJPcmRlckJ5SXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hPcmRlckJ5SXRlbUFyZ3Mge1xuICAgIHNvcnRGaWVsZD8gOiBLYWx0dXJhRVNlYXJjaFVzZXJPcmRlckJ5RmllbGROYW1lO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaFVzZXJPcmRlckJ5SXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoT3JkZXJCeUl0ZW0ge1xuXG4gICAgc29ydEZpZWxkIDogS2FsdHVyYUVTZWFyY2hVc2VyT3JkZXJCeUZpZWxkTmFtZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hVc2VyT3JkZXJCeUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hVc2VyT3JkZXJCeUl0ZW0nIH0sXG5cdFx0XHRcdHNvcnRGaWVsZCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoVXNlck9yZGVyQnlGaWVsZE5hbWUsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hVc2VyT3JkZXJCeUZpZWxkTmFtZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hVc2VyT3JkZXJCeUl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoVXNlck9yZGVyQnlJdGVtOyJdfQ==