/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategory } from './KalturaCategory';
import { KalturaESearchResult } from './KalturaESearchResult';
/**
 * @record
 */
export function KalturaESearchCategoryResultArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryResultArgs.prototype.object;
var KalturaESearchCategoryResult = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCategoryResult, _super);
    function KalturaESearchCategoryResult(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCategoryResult.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCategoryResult' },
            object: { type: 'o', subTypeConstructor: KalturaCategory, subType: 'KalturaCategory' }
        });
        return result;
    };
    return KalturaESearchCategoryResult;
}(KalturaESearchResult));
export { KalturaESearchCategoryResult };
if (false) {
    /** @type {?} */
    KalturaESearchCategoryResult.prototype.object;
}
typesMappingStorage['KalturaESearchCategoryResult'] = KalturaESearchCategoryResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBT3hGLElBQUE7SUFBa0Qsd0RBQW9CO0lBSWxFLHNDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQ2pGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBOUJMO0VBVWtELG9CQUFvQixFQXFCckUsQ0FBQTtBQXJCRCx3Q0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnkgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaFJlc3VsdCwgS2FsdHVyYUVTZWFyY2hSZXN1bHRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFJlc3VsdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVJlc3VsdEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hSZXN1bHRBcmdzIHtcbiAgICBvYmplY3Q/IDogS2FsdHVyYUNhdGVnb3J5O1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5UmVzdWx0IGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hSZXN1bHQge1xuXG4gICAgb2JqZWN0IDogS2FsdHVyYUNhdGVnb3J5O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5UmVzdWx0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlSZXN1bHQnIH0sXG5cdFx0XHRcdG9iamVjdCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNhdGVnb3J5LCBzdWJUeXBlIDogJ0thbHR1cmFDYXRlZ29yeScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVJlc3VsdCddID0gS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVJlc3VsdDsiXX0=