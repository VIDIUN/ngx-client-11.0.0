/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBusinessProcessNotificationTemplate } from './KalturaBusinessProcessNotificationTemplate';
/**
 * @record
 */
export function KalturaBusinessProcessStartNotificationTemplateArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessStartNotificationTemplateArgs.prototype.abortOnDeletion;
var KalturaBusinessProcessStartNotificationTemplate = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBusinessProcessStartNotificationTemplate, _super);
    function KalturaBusinessProcessStartNotificationTemplate(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBusinessProcessStartNotificationTemplate.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBusinessProcessStartNotificationTemplate' },
            abortOnDeletion: { type: 'b' }
        });
        return result;
    };
    return KalturaBusinessProcessStartNotificationTemplate;
}(KalturaBusinessProcessNotificationTemplate));
export { KalturaBusinessProcessStartNotificationTemplate };
if (false) {
    /** @type {?} */
    KalturaBusinessProcessStartNotificationTemplate.prototype.abortOnDeletion;
}
typesMappingStorage['KalturaBusinessProcessStartNotificationTemplate'] = KalturaBusinessProcessStartNotificationTemplate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1N0YXJ0Tm90aWZpY2F0aW9uVGVtcGxhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NTdGFydE5vdGlmaWNhdGlvblRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQ0FBMEMsRUFBa0QsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7OztBQU8xSixJQUFBO0lBQXFFLDJFQUEwQztJQUkzRyx5REFBWSxJQUEyRDtlQUVuRSxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHNFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlEQUFpRCxFQUFFO1lBQ3BHLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswREE3Qkw7RUFTcUUsMENBQTBDLEVBcUI5RyxDQUFBO0FBckJELDJEQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpREFBaUQsQ0FBQyxHQUFHLCtDQUErQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25UZW1wbGF0ZSwgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlQXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzU3RhcnROb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlQXJncyB7XG4gICAgYWJvcnRPbkRlbGV0aW9uPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTdGFydE5vdGlmaWNhdGlvblRlbXBsYXRlIGV4dGVuZHMgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlIHtcblxuICAgIGFib3J0T25EZWxldGlvbiA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTdGFydE5vdGlmaWNhdGlvblRlbXBsYXRlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NTdGFydE5vdGlmaWNhdGlvblRlbXBsYXRlJyB9LFxuXHRcdFx0XHRhYm9ydE9uRGVsZXRpb24gOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc1N0YXJ0Tm90aWZpY2F0aW9uVGVtcGxhdGUnXSA9IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NTdGFydE5vdGlmaWNhdGlvblRlbXBsYXRlOyJdfQ==