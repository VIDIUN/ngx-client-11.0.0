/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaListResponse } from './KalturaListResponse';
/**
 * @record
 */
export function KalturaThumbParamsListResponseArgs() { }
var KalturaThumbParamsListResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaThumbParamsListResponse, _super);
    function KalturaThumbParamsListResponse(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.objects === 'undefined')
            _this.objects = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaThumbParamsListResponse.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaThumbParamsListResponse' },
            objects: { type: 'a', readOnly: true, subTypeConstructor: KalturaThumbParams, subType: 'KalturaThumbParams' }
        });
        return result;
    };
    return KalturaThumbParamsListResponse;
}(KalturaListResponse));
export { KalturaThumbParamsListResponse };
if (false) {
    /** @type {?} */
    KalturaThumbParamsListResponse.prototype.objects;
}
typesMappingStorage['KalturaThumbParamsListResponse'] = KalturaThumbParamsListResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRodW1iUGFyYW1zTGlzdFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVGh1bWJQYXJhbXNMaXN0UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUEyQixNQUFNLHVCQUF1QixDQUFDOzs7OztBQU9yRixJQUFBO0lBQW9ELDBEQUFtQjtJQUluRSx3Q0FBWSxJQUEwQztRQUF0RCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztLQUM5RDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ25GLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDekcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0EvQkw7RUFVb0QsbUJBQW1CLEVBc0J0RSxDQUFBO0FBdEJELDBDQXNCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFUaHVtYlBhcmFtcyB9IGZyb20gJy4vS2FsdHVyYVRodW1iUGFyYW1zJztcbmltcG9ydCB7IEthbHR1cmFMaXN0UmVzcG9uc2UsIEthbHR1cmFMaXN0UmVzcG9uc2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhTGlzdFJlc3BvbnNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVGh1bWJQYXJhbXNMaXN0UmVzcG9uc2VBcmdzICBleHRlbmRzIEthbHR1cmFMaXN0UmVzcG9uc2VBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVRodW1iUGFyYW1zTGlzdFJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZSB7XG5cbiAgICByZWFkb25seSBvYmplY3RzIDogS2FsdHVyYVRodW1iUGFyYW1zW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUaHVtYlBhcmFtc0xpc3RSZXNwb25zZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9iamVjdHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVGh1bWJQYXJhbXNMaXN0UmVzcG9uc2UnIH0sXG5cdFx0XHRcdG9iamVjdHMgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVRodW1iUGFyYW1zLCBzdWJUeXBlIDogJ0thbHR1cmFUaHVtYlBhcmFtcycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVRodW1iUGFyYW1zTGlzdFJlc3BvbnNlJ10gPSBLYWx0dXJhVGh1bWJQYXJhbXNMaXN0UmVzcG9uc2U7Il19