/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFtpDistributionProvider } from './KalturaFtpDistributionProvider';
/**
 * @record
 */
export function KalturaFtpScheduledDistributionProviderArgs() { }
var KalturaFtpScheduledDistributionProvider = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFtpScheduledDistributionProvider, _super);
    function KalturaFtpScheduledDistributionProvider(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFtpScheduledDistributionProvider.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFtpScheduledDistributionProvider' }
        });
        return result;
    };
    return KalturaFtpScheduledDistributionProvider;
}(KalturaFtpDistributionProvider));
export { KalturaFtpScheduledDistributionProvider };
typesMappingStorage['KalturaFtpScheduledDistributionProvider'] = KalturaFtpScheduledDistributionProvider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZ0cFNjaGVkdWxlZERpc3RyaWJ1dGlvblByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRnRwU2NoZWR1bGVkRGlzdHJpYnV0aW9uUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFzQyxNQUFNLGtDQUFrQyxDQUFDOzs7OztBQU90SCxJQUFBO0lBQTZELG1FQUE4QjtJQUl2RixpREFBWSxJQUFtRDtlQUUzRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlDQUF5QyxFQUFFO1NBQ25GLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0RBNUJMO0VBUzZELDhCQUE4QixFQW9CMUYsQ0FBQTtBQXBCRCxtREFvQkM7QUFFRCxtQkFBbUIsQ0FBQyx5Q0FBeUMsQ0FBQyxHQUFHLHVDQUF1QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGdHBEaXN0cmlidXRpb25Qcm92aWRlciwgS2FsdHVyYUZ0cERpc3RyaWJ1dGlvblByb3ZpZGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUZ0cERpc3RyaWJ1dGlvblByb3ZpZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRnRwU2NoZWR1bGVkRGlzdHJpYnV0aW9uUHJvdmlkZXJBcmdzICBleHRlbmRzIEthbHR1cmFGdHBEaXN0cmlidXRpb25Qcm92aWRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRnRwU2NoZWR1bGVkRGlzdHJpYnV0aW9uUHJvdmlkZXIgZXh0ZW5kcyBLYWx0dXJhRnRwRGlzdHJpYnV0aW9uUHJvdmlkZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGdHBTY2hlZHVsZWREaXN0cmlidXRpb25Qcm92aWRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRnRwU2NoZWR1bGVkRGlzdHJpYnV0aW9uUHJvdmlkZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFGdHBTY2hlZHVsZWREaXN0cmlidXRpb25Qcm92aWRlciddID0gS2FsdHVyYUZ0cFNjaGVkdWxlZERpc3RyaWJ1dGlvblByb3ZpZGVyOyJdfQ==