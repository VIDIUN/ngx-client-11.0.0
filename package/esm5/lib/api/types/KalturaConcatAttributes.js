/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDataCenterContentResource } from './KalturaDataCenterContentResource';
import { KalturaOperationAttributes } from './KalturaOperationAttributes';
/**
 * @record
 */
export function KalturaConcatAttributesArgs() { }
/** @type {?|undefined} */
KalturaConcatAttributesArgs.prototype.resource;
var KalturaConcatAttributes = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConcatAttributes, _super);
    function KalturaConcatAttributes(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConcatAttributes.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConcatAttributes' },
            resource: { type: 'o', subTypeConstructor: KalturaDataCenterContentResource, subType: 'KalturaDataCenterContentResource' }
        });
        return result;
    };
    return KalturaConcatAttributes;
}(KalturaOperationAttributes));
export { KalturaConcatAttributes };
if (false) {
    /** @type {?} */
    KalturaConcatAttributes.prototype.resource;
}
typesMappingStorage['KalturaConcatAttributes'] = KalturaConcatAttributes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbmNhdEF0dHJpYnV0ZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb25jYXRBdHRyaWJ1dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwwQkFBMEIsRUFBa0MsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQU8xRyxJQUFBO0lBQTZDLG1EQUEwQjtJQUluRSxpQ0FBWSxJQUFtQztlQUUzQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1lBQzVFLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1NBQ3JILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7a0NBOUJMO0VBVTZDLDBCQUEwQixFQXFCdEUsQ0FBQTtBQXJCRCxtQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGF0YUNlbnRlckNvbnRlbnRSZXNvdXJjZSB9IGZyb20gJy4vS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMsIEthbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzQXJncyB9IGZyb20gJy4vS2FsdHVyYU9wZXJhdGlvbkF0dHJpYnV0ZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb25jYXRBdHRyaWJ1dGVzQXJncyAgZXh0ZW5kcyBLYWx0dXJhT3BlcmF0aW9uQXR0cmlidXRlc0FyZ3Mge1xuICAgIHJlc291cmNlPyA6IEthbHR1cmFEYXRhQ2VudGVyQ29udGVudFJlc291cmNlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29uY2F0QXR0cmlidXRlcyBleHRlbmRzIEthbHR1cmFPcGVyYXRpb25BdHRyaWJ1dGVzIHtcblxuICAgIHJlc291cmNlIDogS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb25jYXRBdHRyaWJ1dGVzQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb25jYXRBdHRyaWJ1dGVzJyB9LFxuXHRcdFx0XHRyZXNvdXJjZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UsIHN1YlR5cGUgOiAnS2FsdHVyYURhdGFDZW50ZXJDb250ZW50UmVzb3VyY2UnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb25jYXRBdHRyaWJ1dGVzJ10gPSBLYWx0dXJhQ29uY2F0QXR0cmlidXRlczsiXX0=