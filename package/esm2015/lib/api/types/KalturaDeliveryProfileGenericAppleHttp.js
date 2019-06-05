/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';
/**
 * @record
 */
export function KalturaDeliveryProfileGenericAppleHttpArgs() { }
/** @type {?|undefined} */
KalturaDeliveryProfileGenericAppleHttpArgs.prototype.pattern;
/** @type {?|undefined} */
KalturaDeliveryProfileGenericAppleHttpArgs.prototype.rendererClass;
/** @type {?|undefined} */
KalturaDeliveryProfileGenericAppleHttpArgs.prototype.manifestRedirect;
export class KalturaDeliveryProfileGenericAppleHttp extends KalturaDeliveryProfile {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDeliveryProfileGenericAppleHttp' },
            pattern: { type: 's' },
            rendererClass: { type: 's' },
            manifestRedirect: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDeliveryProfileGenericAppleHttp.prototype.pattern;
    /** @type {?} */
    KalturaDeliveryProfileGenericAppleHttp.prototype.rendererClass;
    /** @type {?} */
    KalturaDeliveryProfileGenericAppleHttp.prototype.manifestRedirect;
}
typesMappingStorage['KalturaDeliveryProfileGenericAppleHttp'] = KalturaDeliveryProfileGenericAppleHttp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNBcHBsZUh0dHAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljQXBwbGVIdHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7OztBQVM5RixNQUFNLDZDQUE4QyxTQUFRLHNCQUFzQjs7OztJQU05RSxZQUFZLElBQWtEO1FBRTFELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUMzRixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUMxRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdDQUF3QyxDQUFDLEdBQUcsc0NBQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU51bGxhYmxlQm9vbGVhbiB9IGZyb20gJy4vS2FsdHVyYU51bGxhYmxlQm9vbGVhbic7XG5pbXBvcnQgeyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlLCBLYWx0dXJhRGVsaXZlcnlQcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNBcHBsZUh0dHBBcmdzICBleHRlbmRzIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVBcmdzIHtcbiAgICBwYXR0ZXJuPyA6IHN0cmluZztcblx0cmVuZGVyZXJDbGFzcz8gOiBzdHJpbmc7XG5cdG1hbmlmZXN0UmVkaXJlY3Q/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUdlbmVyaWNBcHBsZUh0dHAgZXh0ZW5kcyBLYWx0dXJhRGVsaXZlcnlQcm9maWxlIHtcblxuICAgIHBhdHRlcm4gOiBzdHJpbmc7XG5cdHJlbmRlcmVyQ2xhc3MgOiBzdHJpbmc7XG5cdG1hbmlmZXN0UmVkaXJlY3QgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY0FwcGxlSHR0cEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY0FwcGxlSHR0cCcgfSxcblx0XHRcdFx0cGF0dGVybiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZW5kZXJlckNsYXNzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1hbmlmZXN0UmVkaXJlY3QgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEZWxpdmVyeVByb2ZpbGVHZW5lcmljQXBwbGVIdHRwJ10gPSBLYWx0dXJhRGVsaXZlcnlQcm9maWxlR2VuZXJpY0FwcGxlSHR0cDsiXX0=