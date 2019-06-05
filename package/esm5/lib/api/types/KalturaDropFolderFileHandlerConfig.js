/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFileHandlerType } from './KalturaDropFolderFileHandlerType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaDropFolderFileHandlerConfigArgs() { }
var KalturaDropFolderFileHandlerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDropFolderFileHandlerConfig, _super);
    function KalturaDropFolderFileHandlerConfig(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDropFolderFileHandlerConfig.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDropFolderFileHandlerConfig' },
            handlerType: { type: 'es', readOnly: true, subTypeConstructor: KalturaDropFolderFileHandlerType, subType: 'KalturaDropFolderFileHandlerType' }
        });
        return result;
    };
    return KalturaDropFolderFileHandlerConfig;
}(KalturaObjectBase));
export { KalturaDropFolderFileHandlerConfig };
if (false) {
    /** @type {?} */
    KalturaDropFolderFileHandlerConfig.prototype.handlerType;
}
typesMappingStorage['KalturaDropFolderFileHandlerConfig'] = KalturaDropFolderFileHandlerConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBT2xGLElBQUE7SUFBd0QsOERBQWlCO0lBSXJFLDRDQUFZLElBQThDO2VBRXRELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGdDQUFnQyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtTQUMxSSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZDQTlCTDtFQVV3RCxpQkFBaUIsRUFxQnhFLENBQUE7QUFyQkQsOENBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlclR5cGUgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaGFuZGxlclR5cGUgOiBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZ0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnJyB9LFxuXHRcdFx0XHRoYW5kbGVyVHlwZSA6IHsgdHlwZSA6ICdlcycsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlclR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWcnXSA9IEthbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWc7Il19