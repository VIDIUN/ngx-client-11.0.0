/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaImportJobData } from './KalturaImportJobData';
/**
 * @record
 */
export function KalturaSshImportJobDataArgs() { }
/** @type {?|undefined} */
KalturaSshImportJobDataArgs.prototype.privateKey;
/** @type {?|undefined} */
KalturaSshImportJobDataArgs.prototype.publicKey;
/** @type {?|undefined} */
KalturaSshImportJobDataArgs.prototype.passPhrase;
var KalturaSshImportJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSshImportJobData, _super);
    function KalturaSshImportJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSshImportJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSshImportJobData' },
            privateKey: { type: 's' },
            publicKey: { type: 's' },
            passPhrase: { type: 's' }
        });
        return result;
    };
    return KalturaSshImportJobData;
}(KalturaImportJobData));
export { KalturaSshImportJobData };
if (false) {
    /** @type {?} */
    KalturaSshImportJobData.prototype.privateKey;
    /** @type {?} */
    KalturaSshImportJobData.prototype.publicKey;
    /** @type {?} */
    KalturaSshImportJobData.prototype.passPhrase;
}
typesMappingStorage['KalturaSshImportJobData'] = KalturaSshImportJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNzaEltcG9ydEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFTc2hJbXBvcnRKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFTeEYsSUFBQTtJQUE2QyxtREFBb0I7SUFNN0QsaUNBQVksSUFBbUM7ZUFFM0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw4Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUM1RSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2tDQW5DTDtFQVc2QyxvQkFBb0IsRUF5QmhFLENBQUE7QUF6QkQsbUNBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLHVCQUF1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFJbXBvcnRKb2JEYXRhLCBLYWx0dXJhSW1wb3J0Sm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFJbXBvcnRKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU3NoSW1wb3J0Sm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUltcG9ydEpvYkRhdGFBcmdzIHtcbiAgICBwcml2YXRlS2V5PyA6IHN0cmluZztcblx0cHVibGljS2V5PyA6IHN0cmluZztcblx0cGFzc1BocmFzZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTc2hJbXBvcnRKb2JEYXRhIGV4dGVuZHMgS2FsdHVyYUltcG9ydEpvYkRhdGEge1xuXG4gICAgcHJpdmF0ZUtleSA6IHN0cmluZztcblx0cHVibGljS2V5IDogc3RyaW5nO1xuXHRwYXNzUGhyYXNlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU3NoSW1wb3J0Sm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU3NoSW1wb3J0Sm9iRGF0YScgfSxcblx0XHRcdFx0cHJpdmF0ZUtleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwdWJsaWNLZXkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cGFzc1BocmFzZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU3NoSW1wb3J0Sm9iRGF0YSddID0gS2FsdHVyYVNzaEltcG9ydEpvYkRhdGE7Il19