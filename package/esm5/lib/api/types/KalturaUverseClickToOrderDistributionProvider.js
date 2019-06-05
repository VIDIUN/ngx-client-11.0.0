/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProvider } from './KalturaDistributionProvider';
/**
 * @record
 */
export function KalturaUverseClickToOrderDistributionProviderArgs() { }
var KalturaUverseClickToOrderDistributionProvider = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUverseClickToOrderDistributionProvider, _super);
    function KalturaUverseClickToOrderDistributionProvider(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaUverseClickToOrderDistributionProvider.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUverseClickToOrderDistributionProvider' }
        });
        return result;
    };
    return KalturaUverseClickToOrderDistributionProvider;
}(KalturaDistributionProvider));
export { KalturaUverseClickToOrderDistributionProvider };
typesMappingStorage['KalturaUverseClickToOrderDistributionProvider'] = KalturaUverseClickToOrderDistributionProvider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVV2ZXJzZUNsaWNrVG9PcmRlckRpc3RyaWJ1dGlvblByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhVXZlcnNlQ2xpY2tUb09yZGVyRGlzdHJpYnV0aW9uUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFtQyxNQUFNLCtCQUErQixDQUFDOzs7OztBQU83RyxJQUFBO0lBQW1FLHlFQUEyQjtJQUkxRix1REFBWSxJQUF5RDtlQUVqRSxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9FQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtDQUErQyxFQUFFO1NBQ3pGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0RBNUJMO0VBU21FLDJCQUEyQixFQW9CN0YsQ0FBQTtBQXBCRCx5REFvQkM7QUFFRCxtQkFBbUIsQ0FBQywrQ0FBK0MsQ0FBQyxHQUFHLDZDQUE2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlciwgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXZlcnNlQ2xpY2tUb09yZGVyRGlzdHJpYnV0aW9uUHJvdmlkZXJBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXZlcnNlQ2xpY2tUb09yZGVyRGlzdHJpYnV0aW9uUHJvdmlkZXIgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVdmVyc2VDbGlja1RvT3JkZXJEaXN0cmlidXRpb25Qcm92aWRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXZlcnNlQ2xpY2tUb09yZGVyRGlzdHJpYnV0aW9uUHJvdmlkZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVdmVyc2VDbGlja1RvT3JkZXJEaXN0cmlidXRpb25Qcm92aWRlciddID0gS2FsdHVyYVV2ZXJzZUNsaWNrVG9PcmRlckRpc3RyaWJ1dGlvblByb3ZpZGVyOyJdfQ==