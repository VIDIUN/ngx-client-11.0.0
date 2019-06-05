/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';
import { KalturaListResponse } from './KalturaListResponse';
/**
 * @record
 */
export function KalturaScheduledTaskProfileListResponseArgs() { }
var KalturaScheduledTaskProfileListResponse = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScheduledTaskProfileListResponse, _super);
    function KalturaScheduledTaskProfileListResponse(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.objects === 'undefined')
            _this.objects = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaScheduledTaskProfileListResponse.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaScheduledTaskProfileListResponse' },
            objects: { type: 'a', readOnly: true, subTypeConstructor: KalturaScheduledTaskProfile, subType: 'KalturaScheduledTaskProfile' }
        });
        return result;
    };
    return KalturaScheduledTaskProfileListResponse;
}(KalturaListResponse));
export { KalturaScheduledTaskProfileListResponse };
if (false) {
    /** @type {?} */
    KalturaScheduledTaskProfileListResponse.prototype.objects;
}
typesMappingStorage['KalturaScheduledTaskProfileListResponse'] = KalturaScheduledTaskProfileListResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlTGlzdFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVMaXN0UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUEyQixNQUFNLHVCQUF1QixDQUFDOzs7OztBQU9yRixJQUFBO0lBQTZELG1FQUFtQjtJQUk1RSxpREFBWSxJQUFtRDtRQUEvRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztLQUM5RDs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1lBQzVGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7U0FDM0gsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrREEvQkw7RUFVNkQsbUJBQW1CLEVBc0IvRSxDQUFBO0FBdEJELG1EQXNCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlJztcbmltcG9ydCB7IEthbHR1cmFMaXN0UmVzcG9uc2UsIEthbHR1cmFMaXN0UmVzcG9uc2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhTGlzdFJlc3BvbnNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVMaXN0UmVzcG9uc2VBcmdzICBleHRlbmRzIEthbHR1cmFMaXN0UmVzcG9uc2VBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlTGlzdFJlc3BvbnNlIGV4dGVuZHMgS2FsdHVyYUxpc3RSZXNwb25zZSB7XG5cbiAgICByZWFkb25seSBvYmplY3RzIDogS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZUxpc3RSZXNwb25zZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9iamVjdHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVMaXN0UmVzcG9uc2UnIH0sXG5cdFx0XHRcdG9iamVjdHMgOiB7IHR5cGUgOiAnYScsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZWRUYXNrUHJvZmlsZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNjaGVkdWxlZFRhc2tQcm9maWxlTGlzdFJlc3BvbnNlJ10gPSBLYWx0dXJhU2NoZWR1bGVkVGFza1Byb2ZpbGVMaXN0UmVzcG9uc2U7Il19