/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchUserOperator } from './KalturaESearchUserOperator';
import { KalturaESearchParams } from './KalturaESearchParams';
/**
 * @record
 */
export function KalturaESearchUserParamsArgs() { }
/** @type {?|undefined} */
KalturaESearchUserParamsArgs.prototype.searchOperator;
var KalturaESearchUserParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchUserParams, _super);
    function KalturaESearchUserParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchUserParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchUserParams' },
            searchOperator: { type: 'o', subTypeConstructor: KalturaESearchUserOperator, subType: 'KalturaESearchUserOperator' }
        });
        return result;
    };
    return KalturaESearchUserParams;
}(KalturaESearchParams));
export { KalturaESearchUserParams };
if (false) {
    /** @type {?} */
    KalturaESearchUserParams.prototype.searchOperator;
}
typesMappingStorage['KalturaESearchUserParams'] = KalturaESearchUserParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hVc2VyUGFyYW1zLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaFVzZXJQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBT3hGLElBQUE7SUFBOEMsb0RBQW9CO0lBSTlELGtDQUFZLElBQW9DO2VBRTVDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRywwQkFBMEIsRUFBRSxPQUFPLEVBQUcsNEJBQTRCLEVBQUU7U0FDL0csQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttQ0E5Qkw7RUFVOEMsb0JBQW9CLEVBcUJqRSxDQUFBO0FBckJELG9DQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoVXNlck9wZXJhdG9yIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFVzZXJPcGVyYXRvcic7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaFBhcmFtcywgS2FsdHVyYUVTZWFyY2hQYXJhbXNBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaFBhcmFtcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hVc2VyUGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaFBhcmFtc0FyZ3Mge1xuICAgIHNlYXJjaE9wZXJhdG9yPyA6IEthbHR1cmFFU2VhcmNoVXNlck9wZXJhdG9yO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaFVzZXJQYXJhbXMgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaFBhcmFtcyB7XG5cbiAgICBzZWFyY2hPcGVyYXRvciA6IEthbHR1cmFFU2VhcmNoVXNlck9wZXJhdG9yO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaFVzZXJQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hVc2VyUGFyYW1zJyB9LFxuXHRcdFx0XHRzZWFyY2hPcGVyYXRvciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hVc2VyT3BlcmF0b3IsIHN1YlR5cGUgOiAnS2FsdHVyYUVTZWFyY2hVc2VyT3BlcmF0b3InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoVXNlclBhcmFtcyddID0gS2FsdHVyYUVTZWFyY2hVc2VyUGFyYW1zOyJdfQ==