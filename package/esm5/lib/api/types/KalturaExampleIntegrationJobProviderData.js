/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegrationJobProviderData } from './KalturaIntegrationJobProviderData';
/**
 * @record
 */
export function KalturaExampleIntegrationJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaExampleIntegrationJobProviderDataArgs.prototype.exampleUrl;
var KalturaExampleIntegrationJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaExampleIntegrationJobProviderData, _super);
    function KalturaExampleIntegrationJobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaExampleIntegrationJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaExampleIntegrationJobProviderData' },
            exampleUrl: { type: 's' }
        });
        return result;
    };
    return KalturaExampleIntegrationJobProviderData;
}(KalturaIntegrationJobProviderData));
export { KalturaExampleIntegrationJobProviderData };
if (false) {
    /** @type {?} */
    KalturaExampleIntegrationJobProviderData.prototype.exampleUrl;
}
typesMappingStorage['KalturaExampleIntegrationJobProviderData'] = KalturaExampleIntegrationJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4YW1wbGVJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUV4YW1wbGVJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUNBQWlDLEVBQXlDLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7QUFPL0gsSUFBQTtJQUE4RCxvRUFBaUM7SUFJM0Ysa0RBQVksSUFBb0Q7ZUFFNUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUM3RixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bURBN0JMO0VBUzhELGlDQUFpQyxFQXFCOUYsQ0FBQTtBQXJCRCxvREFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMENBQTBDLENBQUMsR0FBRyx3Q0FBd0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUV4YW1wbGVJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgZXhhbXBsZVVybD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFeGFtcGxlSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEgZXh0ZW5kcyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgZXhhbXBsZVVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV4YW1wbGVJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRXhhbXBsZUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhJyB9LFxuXHRcdFx0XHRleGFtcGxlVXJsIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFeGFtcGxlSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEnXSA9IEthbHR1cmFFeGFtcGxlSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGE7Il19