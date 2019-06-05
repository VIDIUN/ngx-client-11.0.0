/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAuditTrailInfo } from './KalturaAuditTrailInfo';
/**
 * @record
 */
export function KalturaAuditTrailTextInfoArgs() { }
/** @type {?|undefined} */
KalturaAuditTrailTextInfoArgs.prototype.info;
var KalturaAuditTrailTextInfo = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAuditTrailTextInfo, _super);
    function KalturaAuditTrailTextInfo(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAuditTrailTextInfo.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAuditTrailTextInfo' },
            info: { type: 's' }
        });
        return result;
    };
    return KalturaAuditTrailTextInfo;
}(KalturaAuditTrailInfo));
export { KalturaAuditTrailTextInfo };
if (false) {
    /** @type {?} */
    KalturaAuditTrailTextInfo.prototype.info;
}
typesMappingStorage['KalturaAuditTrailTextInfo'] = KalturaAuditTrailTextInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUF1ZGl0VHJhaWxUZXh0SW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUF1ZGl0VHJhaWxUZXh0SW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7QUFPM0YsSUFBQTtJQUErQyxxREFBcUI7SUFJaEUsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1osQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0E3Qkw7RUFTK0MscUJBQXFCLEVBcUJuRSxDQUFBO0FBckJELHFDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBdWRpdFRyYWlsSW5mbywgS2FsdHVyYUF1ZGl0VHJhaWxJbmZvQXJncyB9IGZyb20gJy4vS2FsdHVyYUF1ZGl0VHJhaWxJbmZvJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQXVkaXRUcmFpbFRleHRJbmZvQXJncyAgZXh0ZW5kcyBLYWx0dXJhQXVkaXRUcmFpbEluZm9BcmdzIHtcbiAgICBpbmZvPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUF1ZGl0VHJhaWxUZXh0SW5mbyBleHRlbmRzIEthbHR1cmFBdWRpdFRyYWlsSW5mbyB7XG5cbiAgICBpbmZvIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQXVkaXRUcmFpbFRleHRJbmZvQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBdWRpdFRyYWlsVGV4dEluZm8nIH0sXG5cdFx0XHRcdGluZm8gOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUF1ZGl0VHJhaWxUZXh0SW5mbyddID0gS2FsdHVyYUF1ZGl0VHJhaWxUZXh0SW5mbzsiXX0=